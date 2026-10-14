# Gokulakrishna K — Senior Software Engineer Portfolio

A high-performance, single-page static React portfolio website designed for **Gokulakrishna K** (Senior Software Engineer – Backend & Applied AI), engineered specifically for **AWS S3 Static Website Hosting** and CloudFront CDN distribution.

---

## 🎨 Design Concept (Adham Dannaway Split Paradigm)

Inspired by the iconic split hero design of **Adham Dannaway**, this portfolio represents Gokulakrishna's dual engineering strengths:
- **Left Side (`systems` / Architect):** Highlights 5 years of production backend engineering, high-scale microservices (Zoho Corporation serving 250K+ users & athenahealth healthcare reconciliation), Domain-Driven Design (DDD), Hexagonal Architecture, and low-latency performance tuning.
- **Right Side (`<coder>` / `<ai engineer>`):** Highlights Applied AI engineering, authoring **SynapseMCP** (open-source multi-tenant RAG + 15-tool Model Context Protocol server), hybrid Lucene BM25 + pgvector retrieval (1.00 MRR), dynamic sparse vector dimensions, and resilient ingestion pipelines.
- **Center Interactive Split Canvas:** Real-time mouse tracking and mode toggles (`[Systems Focus]`, `[50/50 Split]`, `[<coder> Focus]`) that dynamically shift the divider, spotlighting architecture metrics and code tokens.

---

## 🚀 Key Sections Included

1. **Header Navigation:** Sleek dark bar with circular `GK` monogram, clean lowercase links (`about`, `skills`, `experience`, `projects`, `education`, `contact`), social links (GitHub, LinkedIn, Email), S3 guide modal trigger, and direct PDF Resume viewer.
2. **Interactive Hero Split:** Dynamic mouse-tracking dual canvas with systems architecture on the left and applied AI coder on the right.
3. **Quantified Impact Counters:** 5+ Years Experience, 250K+ Active Users, -35% API Latency Reduction, 1.00 MRR Retrieval, and 447+ Integration Tests.
4. **About & Architecture Philosophy:** Deep dive into career journey across Citiustech healthcare Technology Private limited (athenahealth) and Zoho Corporation.
5. **Interactive Skills Matrix:** Categorized and filterable by Core Languages, Distributed Architecture, Applied AI, Databases, Cloud & DevOps, and Observability, with real-time search.
6. **Experience Timeline:** Detailed deliverables and metrics for Citiustech healthcare Technology Private limited (athenahealth) and Zoho Corporation.
7. **Featured Project Spotlight (SynapseMCP):** Deep technical dive with architecture flow, hybrid retrieval benchmarks (0.83 -> 0.94 -> 1.00 MRR), sparse vector schema with `halfvec`, and 5-stage ingestion pipeline with Bucket4j failover.
8. **Education:** Velammal Institute of Technology (B.E. in Computer Science).
9. **Contact & Collaboration:** Direct email (`gokulakrishna3101999@gmail.com`), phone (`+91 9080424870`), Chennai location, copy buttons, and interactive mailto generator.
10. **Resume Modal:** Instant in-browser PDF preview and 1-click download of `Gokulakrishna_Resume.pdf`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Bundler:** Vite 6 (configured with relative `base: './'` for seamless S3 bucket hosting)
- **Icons:** Lucide React + custom SVG icons
- **Target Hosting:** AWS S3 (Simple Storage Service) + AWS CloudFront

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Preview production build locally
npm run build
npm run preview
```

---

## ☁️ Deploying to AWS S3 Bucket

The project includes an automated deployment script `deploy-s3.sh` and produces an optimized static build in `dist/`.

### Option A: One-Command Automated Deployment

```bash
./deploy-s3.sh <your-unique-bucket-name> [aws-region]
```

**Example:**
```bash
./deploy-s3.sh gokulakrishna-portfolio us-east-1
```

This script will automatically:
1. Run `npm run build`
2. Create the S3 bucket if it doesn't already exist
3. Enable S3 Static Website Hosting (`index.html` as index and error document)
4. Configure public access settings and attach the public read bucket policy
5. Sync all assets to S3 with cache-control headers
6. Print your live website endpoint URL!

---

### Option B: Step-by-Step Manual AWS CLI Deployment

#### 1. Build the production package
```bash
npm run build
```

#### 2. Create the S3 Bucket
```bash
aws s3 mb s3://gokulakrishna-portfolio --region us-east-1
```

#### 3. Enable Static Website Hosting
```bash
aws s3 website s3://gokulakrishna-portfolio/ \
  --index-document index.html \
  --error-document index.html
```

#### 4. Disable Public Access Block for Static Website Hosting
```bash
aws s3api put-public-access-block \
  --bucket gokulakrishna-portfolio \
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

#### 5. Attach Public Read Bucket Policy
Create `policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::gokulakrishna-portfolio/*"
    }
  ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy --bucket gokulakrishna-portfolio --policy file://policy.json
```

#### 6. Upload Assets
```bash
# Upload static hashed assets with long-term cache
aws s3 sync dist/ s3://gokulakrishna-portfolio --delete --cache-control "public, max-age=31536000, immutable" --exclude "index.html" --exclude "Gokulakrishna_Resume.pdf"

# Upload index.html and Resume PDF with immediate revalidation
aws s3 cp dist/index.html s3://gokulakrishna-portfolio/index.html --cache-control "public, max-age=0, must-revalidate"
aws s3 cp dist/Gokulakrishna_Resume.pdf s3://gokulakrishna-portfolio/Gokulakrishna_Resume.pdf --cache-control "public, max-age=3600"
```

#### 7. Access Your Website
Your live website will be available at:
```
http://gokulakrishna-portfolio.s3-website-us-east-1.amazonaws.com
```

---

## 🔒 Custom Domain & HTTPS via AWS CloudFront (Recommended)

To add HTTPS/SSL and a custom domain (e.g. `gokulakrishna.dev`):
1. Open **AWS CloudFront** console -> **Create Distribution**.
2. Set **Origin domain** to your S3 website endpoint (e.g. `gokulakrishna-portfolio.s3-website-us-east-1.amazonaws.com`).
3. Set **Viewer Protocol Policy** to `Redirect HTTP to HTTPS`.
4. (Optional) Attach your ACM SSL Certificate and set **Alternate Domain Name (CNAME)** to your domain.
5. In **Route 53** (or your DNS registrar), create an `A` record alias pointing to the CloudFront distribution domain name.
