'use client';

const normalizeSrc = (src) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

const CloudflareLoader = ({ src, width, quality }) => {
  // Return original src in development or client-side
  if (process.env.NODE_ENV === "development" || typeof window !== "undefined") {
    return src;
  }

  // Ensure we have a valid src
  const normalizedSrc = normalizeSrc(src);
  
  // Construct the Cloudflare Images URL
  const params = [`width=${width}`];
  
  if (quality) {
    params.push(`quality=${quality}`);
  }
  
  // Add WebP format by default
  params.push('format=auto'); // 'auto' is better than forcing 'webp'
  
  // Join parameters and create final URL
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizedSrc}`;
};

export default CloudflareLoader;
