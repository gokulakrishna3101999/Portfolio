#!/bin/bash
# ==============================================================================
# AWS S3 Static Website Deployment Script for Gokulakrishna's Portfolio
# ==============================================================================

set -e

BUCKET_NAME="$1"
REGION="${2:-us-east-1}"

if [ -z "$BUCKET_NAME" ]; then
  echo "Usage: ./deploy-s3.sh <bucket-name> [aws-region]"
  echo "Example: ./deploy-s3.sh gokulakrishna-portfolio us-east-1"
  exit 1
fi

echo "=========================================================="
echo "🚀 Deploying Portfolio to AWS S3: s3://$BUCKET_NAME ($REGION)"
echo "=========================================================="

# Check AWS CLI
if ! command -v aws &> /dev/null; then
  echo "❌ AWS CLI is not installed or not in PATH. Please install and configure AWS CLI."
  exit 1
fi

# Step 1: Build the static production bundle
echo "\n📦 Step 1: Building static React production assets..."
npm run build

if [ ! -d "dist" ]; then
  echo "❌ Build failed: 'dist' directory not found!"
  exit 1
fi

# Step 2: Create bucket if it doesn't exist
echo "\n🪣 Step 2: Checking / Creating S3 bucket: $BUCKET_NAME..."
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
  echo "Creating bucket $BUCKET_NAME..."
  if [ "$REGION" = "us-east-1" ]; then
    aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"
  else
    aws s3 mb "s3://$BUCKET_NAME" --region "$REGION" --create-bucket-configuration LocationConstraint="$REGION"
  fi
else
  echo "Bucket $BUCKET_NAME already exists or is accessible."
fi

# Step 3: Configure bucket for static website hosting
echo "\n🌐 Step 3: Configuring Static Website Hosting..."
aws s3 website "s3://$BUCKET_NAME/" \
  --index-document index.html \
  --error-document index.html

# Step 4: Configure Public Access Block
echo "\n🔓 Step 4: Updating Public Access Block settings..."
aws s3api put-public-access-block \
  --bucket "$BUCKET_NAME" \
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# Step 5: Attach public read bucket policy
echo "\n📜 Step 5: Attaching Public Read Bucket Policy..."
cat <<EOF > /tmp/s3-policy.json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy file:///tmp/s3-policy.json
rm -f /tmp/s3-policy.json

# Step 6: Sync dist folder
echo "\n⬆️ Step 6: Uploading files to S3 bucket..."
aws s3 sync dist/ "s3://$BUCKET_NAME" --delete --cache-control "public, max-age=31536000, immutable" --exclude "index.html"
aws s3 cp dist/index.html "s3://$BUCKET_NAME/index.html" --cache-control "public, max-age=0, must-revalidate"

# Step 7: Done!
echo "\n=========================================================="
echo "✅ DEPLOYMENT SUCCESSFUL!"
echo "Your portfolio is live at:"
if [ "$REGION" = "us-east-1" ]; then
  echo "👉 http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
else
  echo "👉 http://$BUCKET_NAME.s3-website.$REGION.amazonaws.com"
fi
echo "=========================================================="
