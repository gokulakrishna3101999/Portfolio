import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const norm = name.toLowerCase().trim();

  // 1. Java
  if (norm.includes('java') && !norm.includes('script')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
        <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
        <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
        <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
      </svg>
    );
  }

  // 2. Python
  if (norm.includes('python')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
        <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
      </svg>
    );
  }

  // 3. C++
  if (norm.includes('c++')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#00599C" d="M64 4.2L115.8 34.1v59.8L64 123.8 12.2 93.9V34.1L64 4.2z"/>
        <path fill="#FFFFFF" d="M64 22.8c-22.8 0-41.2 18.5-41.2 41.2s18.5 41.2 41.2 41.2c16.3 0 30.5-9.5 37.3-23.2l-14.8-8.5c-4 8.2-12.5 13.9-22.5 13.9-13.8 0-25-11.2-25-25s11.2-25 25-25c10 0 18.5 5.7 22.5 13.9l14.8-8.5C94.5 32.3 80.3 22.8 64 22.8z"/>
        <path fill="#0086D6" d="M86 58h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4zm18 0h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4z"/>
      </svg>
    );
  }

  // 4. SQL (PostgreSQL, MySQL) - Distinct relational database icon
  if (norm.startsWith('sql') || norm === 'sql') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="8" cy="6" rx="6" ry="2.5" className="stroke-blue-600 fill-blue-50" />
        <path d="M2 6v6c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V6" className="stroke-blue-600" />
        <path d="M2 12v6c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-6" className="stroke-blue-600" />
        <path d="M14 10l8 4M14 18l8-4" className="stroke-cyan-500" strokeWidth="1.5" />
        <circle cx="18" cy="14" r="1.5" className="fill-cyan-500 stroke-cyan-500" />
      </svg>
    );
  }

  // 5. Spring AI (Distinct leaf with neural AI node)
  if (norm.includes('spring ai') || (norm.includes('spring') && norm.includes('ai'))) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7z" fill="#6DB33F"/>
        <circle cx="64" cy="64" r="28" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="4"/>
        <path d="M52 64h24M64 52v24M55 55l18 18M73 55l-18 18" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="64" cy="64" r="6" fill="#38BDF8"/>
      </svg>
    );
  }

  // 6. Spring Data JPA (Distinct leaf with database layer stack)
  if (norm.includes('spring data') || norm.includes('jpa')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7z" fill="#6DB33F"/>
        <rect x="40" y="44" width="48" height="14" rx="4" fill="#047857" stroke="#A7F3D0" strokeWidth="3"/>
        <rect x="40" y="62" width="48" height="14" rx="4" fill="#047857" stroke="#A7F3D0" strokeWidth="3"/>
        <rect x="40" y="80" width="48" height="14" rx="4" fill="#047857" stroke="#A7F3D0" strokeWidth="3"/>
        <circle cx="48" cy="51" r="2.5" fill="#A7F3D0"/>
        <circle cx="48" cy="69" r="2.5" fill="#A7F3D0"/>
        <circle cx="48" cy="87" r="2.5" fill="#A7F3D0"/>
      </svg>
    );
  }

  // 7. Spring Boot (Standard Spring leaf)
  if (norm.includes('spring')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#6DB33F"/>
      </svg>
    );
  }

  // 8. Prometheus / CloudWatch (Check BEFORE AWS so it doesn't match 'amazon')
  if (norm.includes('prometheus') || norm.includes('cloudwatch')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#e75225" d="M64.125.51C99.229.517 128.045 29.133 128 63.951c-.045 35.342-28.742 63.564-64.608 63.539C28.325 127.466-.025 98.818 0 63.434.023 28.834 28.898.503 64.125.51ZM44.72 22.793c.803 3.96.025 7.655-1.167 11.289-.823 2.515-1.962 4.94-2.642 7.492-1.122 4.203-2.391 8.43-2.859 12.726-.671 6.181 1.758 11.625 5.914 17.04L24.86 67.318c.033.602 0 .83.065 1.024 1.811 5.32 4.998 9.802 8.57 14.03.377.446 1.237.674 1.877.674 19.05.038 38.101.034 57.152.009.59 0 1.381-.11 1.741-.49 4.084-4.294 7.205-9.185 9.16-15.342l-20.228 3.962c1.336-2.618 2.855-4.916 3.733-7.443 2.994-8.643 1.752-16.998-2.545-24.88-3.449-6.324-6.631-12.62-4.91-20.243-3.642 3.6-5.043 8.179-5.932 12.898-.872 4.65-1.389 9.364-2.065 14.083-.098-.143-.22-.25-.242-.373a13.964 13.964 0 0 1-.176-1.49c-.413-7.726-1.92-15.17-5.106-22.28-1.873-4.182-3.941-8.462-2.008-13.456-1.307.693-2.49 1.377-3.338 2.356-2.527 2.92-3.573 6.428-3.842 10.269-.231 3.282-.546 6.579-1.156 9.806-.64 3.392-1.65 6.714-3.932 9.831-.918-6.656-1.02-13.244-6.956-17.47ZM93.842 88.88H34.088v10.38h59.754Zm-47.904 15.746c-.049 8.642 8.753 15.081 19.633 14.614 9.02-.389 16.999-7.484 16.315-14.614z"/>
      </svg>
    );
  }

  // 9. AWS
  if (norm.startsWith('aws') || norm === 'aws' || norm.includes('amazon web services')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#232F3E" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"/>
        <path fill="#FF9900" d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"/>
      </svg>
    );
  }

  // 10. PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"/>
      </svg>
    );
  }

  // 11. Redis
  if (norm.includes('redis')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z"/>
        <path fill="#D82C20" d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"/>
        <path fill="#A41E11" d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z"/>
        <path fill="#D82C20" d="M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 79.6 13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"/>
        <path fill="#A41E11" d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4z"/>
        <path fill="#D82C20" d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z"/>
        <path fill="#fff" d="M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z"/>
        <ellipse fill="#fff" cx="38.4" cy="35.4" rx="15.5" ry="6"/>
      </svg>
    );
  }

  // 12. MySQL
  if (norm.includes('mysql')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#00618A" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957z"/>
      </svg>
    );
  }

  // 13. Docker
  if (norm.includes('docker')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#2496ED" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/>
        <rect x="28" y="52" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="39" y="52" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="50" y="52" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="61" y="52" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="72" y="52" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="39" y="41" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="50" y="41" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="61" y="41" width="10" height="10" rx="1" fill="#2496ED"/>
        <rect x="61" y="30" width="10" height="10" rx="1" fill="#2496ED"/>
      </svg>
    );
  }

  // 14. Kubernetes
  if (norm.includes('kubernetes') || norm.includes('k8s')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path fill="#326ce5" d="M63.556 1.911a8.51 8.44 0 0 0-3.26.826L15.794 24a8.51 8.44 0 0 0-4.603 5.725L.214 77.484a8.51 8.44 0 0 0 1.154 6.47 8.51 8.44 0 0 0 .485.673l30.799 38.297a8.51 8.44 0 0 0 6.654 3.175l49.393-.011a8.51 8.44 0 0 0 6.654-3.17l30.79-38.303a8.51 8.44 0 0 0 1.644-7.14l-10.996-47.76a8.51 8.44 0 0 0-4.604-5.727L67.681 2.738a8.51 8.44 0 0 0-4.125-.827Z"/>
        <circle cx="64" cy="64" r="16" fill="#FFFFFF"/>
        <circle cx="64" cy="64" r="9" fill="#326ce5"/>
      </svg>
    );
  }

  // 15. Terraform
  if (norm.includes('terraform')) {
    return (
      <svg viewBox="0 0 128 128" className={className}>
        <path d="M77.941 44.5v36.836L46.324 62.918V26.082zm0 0" fill="#5c4ee5"/>
        <path d="M81.41 81.336l31.633-18.418V26.082L81.41 44.5zm0 0" fill="#4040b2"/>
        <path d="M11.242 42.36L42.86 60.776V23.941L11.242 5.523zm0 0M77.941 85.375L46.324 66.957v36.82l31.617 18.418zm0 0" fill="#5c4ee5"/>
      </svg>
    );
  }

  // 16. Jenkins, Maven & Gradle
  if (norm.includes('jenkins') || norm.includes('maven') || norm.includes('gradle')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" className="stroke-red-600 fill-red-100" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" className="stroke-red-600" />
      </svg>
    );
  }

  // 17. Multi-Vector Embeddings (Distinct tensor grid with matrix brackets)
  if (norm.includes('multi-vector') || norm.includes('embeddings')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h3M4 4v16M4 20h3M20 4h-3M20 4v16M20 20h-3" className="stroke-indigo-600" strokeWidth="2" />
        <circle cx="9" cy="9" r="1.5" className="fill-indigo-600 stroke-indigo-600" />
        <circle cx="15" cy="9" r="1.5" className="fill-indigo-400 stroke-indigo-400" />
        <circle cx="9" cy="15" r="1.5" className="fill-indigo-400 stroke-indigo-400" />
        <circle cx="15" cy="15" r="1.5" className="fill-indigo-600 stroke-indigo-600" />
      </svg>
    );
  }

  // 18. pgvector & Cosine ANN (Distinct 3D coordinate vector angle)
  if (norm.includes('pgvector') || norm.includes('cosine')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 21V3" className="stroke-cyan-700" strokeWidth="2" />
        <path d="M3 21l14-14M12 7h5v5" className="stroke-blue-600" strokeWidth="2" />
        <path d="M8 21a5 5 0 0 0-5-5" className="stroke-amber-500" strokeWidth="2" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  // 19. Apache Lucene (BM25)
  if (norm.includes('lucene') || norm.includes('bm25')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="6.5" className="stroke-amber-600 fill-amber-50" />
        <path d="M15 15l6 6" className="stroke-amber-600" strokeWidth="2.5" />
        <path d="M8 10h4M10 8v4" className="stroke-amber-600" strokeWidth="1.8" />
      </svg>
    );
  }

  // 20. Reciprocal Rank Fusion (RRF)
  if (norm.includes('rrf') || norm.includes('fusion') || norm.includes('reciprocal')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h6a4 4 0 0 1 4 4v8M4 18h6a4 4 0 0 0 4-4V6" className="stroke-emerald-600" strokeWidth="2" />
        <path d="M19 14l-4 4-4-4" className="stroke-emerald-600" strokeWidth="2" />
      </svg>
    );
  }

  // 21. LLM Reranking & Prompt Orchestration
  if (norm.includes('rerank') || norm.includes('prompt') || norm.includes('llm')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 5.2L20 8.3l-4 4 1 5.7L12 15.2l-5 2.8 1-5.7-4-4 5.6-1.1L12 2z" className="stroke-amber-500 fill-amber-100" />
        <circle cx="19" cy="4" r="1.5" className="fill-amber-400 stroke-amber-400" />
      </svg>
    );
  }

  // 22. RAG (Retrieval-Augmented Generation)
  if (norm.includes('rag') || norm.includes('retrieval')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="12" height="15" rx="2" className="stroke-cyan-600 fill-cyan-50" />
        <path d="M7 7h4M7 11h4M18 10l3 3-3 3M21 13H11" className="stroke-cyan-600" strokeWidth="1.8" />
        <circle cx="18" cy="5" r="2" className="stroke-cyan-500 fill-cyan-300" />
      </svg>
    );
  }

  // 23. Model Context Protocol (MCP)
  if (norm.includes('mcp') || norm.includes('model context')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="3" className="stroke-indigo-600 fill-indigo-50" />
        <path d="M9 4v4M15 4v4M8 14h8" className="stroke-indigo-600" strokeWidth="2" />
        <circle cx="12" cy="14" r="2" className="stroke-indigo-700 fill-indigo-600" />
      </svg>
    );
  }

  // 24. Domain-Driven Design (DDD)
  if (norm.includes('domain-driven') || norm.includes('ddd')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" className="stroke-indigo-600" />
        <circle cx="12" cy="12" r="5" className="stroke-indigo-500 fill-indigo-50/60" />
        <circle cx="12" cy="12" r="2" className="stroke-indigo-700 fill-indigo-600" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" className="stroke-indigo-400" />
      </svg>
    );
  }

  // 25. Microservices Architecture
  if (norm.includes('microservice')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1.5" className="stroke-violet-600 fill-violet-50" />
        <rect x="16" y="3" width="6" height="6" rx="1.5" className="stroke-violet-600 fill-violet-50" />
        <rect x="9" y="15" width="6" height="6" rx="1.5" className="stroke-violet-700 fill-violet-100" />
        <path d="M8 6h8M5 9v3l4 3M19 9v3l-4 3" className="stroke-violet-500" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  // 26. Hexagonal Architecture
  if (norm.includes('hexagonal')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" className="stroke-emerald-600 fill-emerald-50/50" />
        <path d="M12 6.5l4.8 2.8v5.5L12 17.5l-4.8-2.7V9.3L12 6.5z" className="stroke-emerald-700" />
        <circle cx="12" cy="12" r="1.8" className="fill-emerald-600 stroke-emerald-600" />
        <path d="M12 2v4.5M20.5 6.9l-3.7 2.4M20.5 16.7l-3.7-2.4M12 21.6v-4.1M3.5 16.7l3.7-2.4M3.5 6.9l3.7 2.4" className="stroke-emerald-500" />
      </svg>
    );
  }

  // 27. Distributed Systems & Concurrency
  if (norm.includes('distributed') || norm.includes('concurrency')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2.5" className="stroke-teal-600 fill-teal-100" />
        <circle cx="4" cy="18" r="2.5" className="stroke-teal-600 fill-teal-100" />
        <circle cx="20" cy="18" r="2.5" className="stroke-teal-600 fill-teal-100" />
        <circle cx="12" cy="13" r="2" className="stroke-teal-700 fill-teal-600" />
        <path d="M12 6.5v4.5M5.8 16.2l4.4-2.2M18.2 16.2l-4.4-2.2M6.5 18h11" className="stroke-teal-500" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  // 28. Bulk APIs (Distinct batch data pipeline with parallel streams)
  if (norm.includes('bulk')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="8" height="4" rx="1" className="stroke-cyan-600 fill-cyan-50" />
        <rect x="3" y="10" width="8" height="4" rx="1" className="stroke-cyan-600 fill-cyan-50" />
        <rect x="3" y="16" width="8" height="4" rx="1" className="stroke-cyan-600 fill-cyan-50" />
        <path d="M14 6h7M18 4l3 2-3 2M14 12h7M18 10l3 2-3 2M14 18h7M18 16l3 2-3 2" className="stroke-cyan-700" strokeWidth="1.8" />
      </svg>
    );
  }

  // 29. REST APIs / Web APIs (Distinct connected HTTP endpoint gateway)
  if (norm.includes('rest') || norm.includes('api')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="3" className="stroke-blue-600 fill-blue-50" />
        <circle cx="18" cy="6" r="3" className="stroke-blue-600 fill-blue-50" />
        <circle cx="18" cy="18" r="3" className="stroke-blue-600 fill-blue-50" />
        <path d="M9 12h3M12 12l3-5M12 12l3 5" className="stroke-blue-600" strokeWidth="2" />
        <path d="M10 6h4" className="stroke-blue-400" strokeDasharray="1 1.5" />
      </svg>
    );
  }

  // 30. System Design & Scalability
  if (norm.includes('system design') || norm.includes('scalability')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16M4 20l4-14 4 14M16 20l-4-14" className="stroke-sky-600" strokeWidth="2" />
        <circle cx="12" cy="6" r="2.5" className="stroke-sky-700 fill-sky-200" />
        <circle cx="4" cy="20" r="1.5" className="fill-sky-700" />
        <circle cx="20" cy="20" r="1.5" className="fill-sky-700" />
      </svg>
    );
  }

  // 31. Data Structures & Algorithms
  if (norm.includes('data structure') || norm.includes('algorithm')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2" className="stroke-fuchsia-600 fill-fuchsia-100" />
        <circle cx="6" cy="12" r="2" className="stroke-fuchsia-600 fill-fuchsia-100" />
        <circle cx="18" cy="12" r="2" className="stroke-fuchsia-600 fill-fuchsia-100" />
        <circle cx="3" cy="20" r="2" className="stroke-fuchsia-600 fill-fuchsia-100" />
        <circle cx="9" cy="20" r="2" className="stroke-fuchsia-600 fill-fuchsia-100" />
        <path d="M10.5 5.5l-3 5M13.5 5.5l3 5M4.5 13.5l-1 5M7.5 13.5l1 5" className="stroke-fuchsia-500" />
      </svg>
    );
  }

  // 32. Bucket4j / Rate Limiting
  if (norm.includes('bucket4j') || norm.includes('rate limit')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14l-1.5 12h-11L5 8z" className="stroke-emerald-600 fill-emerald-50" />
        <path d="M3 8h18M12 4v4M9 13h6" className="stroke-emerald-600" />
        <circle cx="12" cy="16" r="1" className="fill-emerald-600" />
      </svg>
    );
  }

  // 33. JUnit 5 & Integration Test Harnesses
  if (norm.includes('junit') || norm.includes('test')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v6l-4.5 9A3 3 0 0 0 8 21h8a3 3 0 0 0 2.5-4L14 8V2" className="stroke-emerald-600 fill-emerald-50" />
        <path d="M8 2h8M9 15l2 2 4-4" className="stroke-emerald-600" strokeWidth="2" />
      </svg>
    );
  }

  // 34. Struts
  if (norm.includes('struts')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7l8-4 8 4-8 4-8-4zM4 17l8 4 8-4M4 12l8 4 8-4" className="stroke-sky-600" strokeWidth="2" />
      </svg>
    );
  }

  // 35. FHIR
  if (norm.includes('fhir')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4" className="stroke-rose-600 fill-rose-50/40" />
        <path d="M12 7v10M7 12h10" className="stroke-rose-600" strokeWidth="2.5" />
      </svg>
    );
  }

  // 36. IAM
  if (norm.includes('iam')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-amber-600 fill-amber-50/50" />
        <circle cx="12" cy="10" r="2.5" className="stroke-amber-700 fill-amber-100" />
        <path d="M12 12.5V16M10.5 14.5h3" className="stroke-amber-700" strokeWidth="2" />
      </svg>
    );
  }

  // 37. MDC Tracing
  if (norm.includes('mdc') || norm.includes('tracing')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2.5-6 5 12 2.5-6H21" className="stroke-purple-600" strokeWidth="2" />
        <circle cx="7" cy="12" r="2" className="stroke-purple-700 fill-white" />
        <circle cx="17" cy="12" r="2" className="stroke-purple-700 fill-white" />
        <circle cx="12" cy="12" r="1.5" className="fill-purple-600 stroke-purple-600" />
      </svg>
    );
  }

  // 38. Sandbox Lifecycle
  if (norm.includes('sandbox')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" className="stroke-orange-600 fill-orange-50/50" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" className="stroke-orange-600" />
        <path d="M17 12a5 5 0 0 1-5 5" className="stroke-amber-600" strokeDasharray="1 1.5" />
      </svg>
    );
  }

  // Fallback generic tech badge (Distinct neutral chip)
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" className="stroke-zinc-400 fill-zinc-50" />
      <circle cx="12" cy="12" r="3" className="stroke-zinc-500 fill-zinc-200" />
    </svg>
  );
};

export const TechBadge: React.FC<{ 
  name: string; 
  level?: string; 
  showLabel?: boolean;
  highlight?: boolean;
  onHover?: (name: string | null) => void;
}> = ({ 
  name, 
  showLabel = false, 
  highlight = false,
  onHover
}) => {
  if (showLabel) {
    return (
      <div 
        onMouseEnter={() => onHover && onHover(name)}
        onMouseLeave={() => onHover && onHover(null)}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-150 ${
          highlight 
            ? 'bg-white border-zinc-300 text-zinc-900 shadow-2xs font-semibold' 
            : 'bg-[#fafaf9] border-zinc-200 text-zinc-700 hover:bg-white hover:border-zinc-300'
        }`}
      >
        <TechIcon name={name} className="w-4 h-4 flex-shrink-0" />
        <span>{name}</span>
      </div>
    );
  }

  return (
    <div 
      className="relative group inline-flex items-center"
      onMouseEnter={() => onHover && onHover(name)}
      onMouseLeave={() => onHover && onHover(null)}
    >
      <div 
        tabIndex={0}
        role="img"
        aria-label={name}
        title={name}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border shadow-2xs hover:shadow-md hover:-translate-y-0.5 focus:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all duration-200 flex items-center justify-center cursor-pointer p-1.5 ${
          highlight ? 'border-zinc-300 ring-1 ring-zinc-900/10' : 'border-zinc-200 hover:border-zinc-400'
        }`}
      >
        <TechIcon name={name} className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain" />
      </div>

      {/* Floating Tooltip - Name Only, No Level Details */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-900 text-white text-[11px] font-mono rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-150 transform translate-y-1 group-hover:translate-y-0 whitespace-nowrap z-30 flex items-center justify-center">
        <span className="font-semibold text-zinc-100">{name}</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
};
