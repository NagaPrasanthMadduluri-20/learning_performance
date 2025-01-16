'use client';

import Image from "next/image";
import cloudflareLoader from "../lib/CloudflareLoader";
function CustomImage({ src, alt, width, height, ...props }) {
  return (
    <Image
      loader={cloudflareLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}
export default CustomImage;