import type { HTMLAttributes } from "react";

export interface IPhoneMockProps extends HTMLAttributes<HTMLDivElement> {
  screenGradientFrom?: string;
  screenGradientTo?: string;
}

// Simple iPhone-style SVG mock with notch and screen gradient
export default function IPhoneMock({
  className,
  screenGradientFrom = "#f4f4f5", // zinc-100
  screenGradientTo = "#e4e4e7", // zinc-200
  ...rest
}: IPhoneMockProps) {
  const containerClass =
    ["relative aspect-[9/19.5] w-full select-none", className]
      .filter(Boolean)
      .join(" ");
  return (
    <div
      className={containerClass}
      aria-hidden="true"
      {...rest}
    >
      <svg
        viewBox="0 0 390 844"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="screenGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={screenGradientFrom} />
            <stop offset="100%" stopColor={screenGradientTo} />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Device body */}
        <rect
          x="6"
          y="6"
          width="378"
          height="832"
          rx="56"
          fill="#ffffff"
          stroke="#e5e7eb"
          strokeWidth="2"
          filter="url(#shadow)"
        />

        {/* Screen */}
        <rect
          x="18"
          y="74"
          width="354"
          height="742"
          rx="36"
          fill="url(#screenGradient)"
        />

        {/* Notch */}
        <path
          d="M135 74c0-13.255 10.745-24 24-24h72c13.255 0 24 10.745 24 24v10c0 6.627-5.373 12-12 12H147c-6.627 0-12-5.373-12-12V74z"
          fill="#111827"
        />

        {/* Side buttons (subtle) */}
        <rect x="382" y="200" width="4" height="60" rx="2" fill="#e5e7eb" />
        <rect x="382" y="280" width="4" height="40" rx="2" fill="#e5e7eb" />
        <rect x="382" y="332" width="4" height="40" rx="2" fill="#e5e7eb" />

        {/* Speaker dot */}
        <circle cx="195" cy="76" r="2" fill="#374151" />
      </svg>
    </div>
  );
}

