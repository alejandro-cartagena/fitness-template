import Image from "next/image";
import type { HTMLAttributes } from "react";

interface PhoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  alt?: string;
}

// Renders /public/iphone.svg with a positioned "screen" where the preview appears
export default function PhoneFrame({
  imageUrl,
  alt = "App preview",
  className,
  ...rest
}: PhoneFrameProps) {
  const containerClass = [
    "relative aspect-[9/19.5] w-full",
    "select-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass} aria-hidden="true" {...rest}>
      {/* Device SVG */}
      <img
        src="/iphone.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />

      {/* Screen area (tuned to match the svg's screen bounds) */}
      <div
        className="absolute overflow-hidden rounded-[1.8rem]"
        style={{
          // Percentages tuned visually for the provided iphone.svg
          left: "6%",
          right: "6%",
          top: "9.5%",
          bottom: "6.5%",
        }}
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          unoptimized
          className="object-cover"
          sizes="(min-width: 1024px) 200px, (min-width: 640px) 40vw, 70vw"
        />
      </div>
    </div>
  );
}

