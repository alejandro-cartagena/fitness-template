"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface WhyMeProps {
  title?: string;
  videoPlaceholderSrc?: string | null;
  subtitle?: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
}

const defaultBullets = [
  "Individuals who are tired of guessing what will transfer to building muscle.",
  "Individuals who want individualized training tailored to their needs.",
  "Individuals who want 1-on-1 coaching based on their schedules, level, and genetics.",
];

export default function WhyMe({
  title = "Why Choose Me?",
  videoPlaceholderSrc = null,
  subtitle = "Who is Charm Fitness for?",
  bullets = defaultBullets,
  ctaText = "Join the Team",
  ctaHref = "#programs",
}: WhyMeProps) {
  return (
    <section
      aria-labelledby="why-me-heading"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Main title */}
        <h2
          id="why-me-heading"
          className={`${mont.className} text-center text-2xl font-bold italic uppercase tracking-tight text-(--text-primary) sm:text-3xl lg:text-4xl`}
        >
          {title}
        </h2>

        {/* Video placeholder */}
        <div className="mt-10 flex justify-center">
          <div
            className="relative w-full overflow-hidden rounded-xl border border-(--border) bg-zinc-200 shadow-md ring-1 ring-black/5"
            style={{ aspectRatio: "16/9" }}
          >
            {videoPlaceholderSrc ? (
              <video
                className="h-full w-full object-cover"
                src={videoPlaceholderSrc}
                controls
                poster=""
                aria-label="Intro video"
              />
            ) : (
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-3 text-(--text-primary)"
                style={{ backgroundColor: "var(--bg-primary)" }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-(--accent-primary) text-(--accent-primary)"
                  aria-hidden
                >
                  <svg
                    className="ml-1 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-zinc-500">
                  Video placeholder
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Subtitle */}
        <h3
          className={`${mont.className} mt-10 text-center text-xl font-bold tracking-tight text-(--text-primary) sm:text-2xl`}
        >
          {subtitle}
        </h3>

        {/* Bulleted list — styled with accent markers */}
        <ul className="mt-8 flex flex-col gap-4 sm:mt-10">
          {bullets.map((text, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-lg border border-(--border) bg-white/80 px-4 py-3 shadow-sm ring-1 ring-black/5 transition hover:shadow-md sm:gap-5 sm:px-5 sm:py-4"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white sm:h-7 sm:w-7"
                style={{ backgroundColor: "var(--accent-primary)" }}
                aria-hidden
              >
                <span className="text-xs font-bold sm:text-sm">{index + 1}</span>
              </span>
              <span className="text-base leading-relaxed text-(--text-primary) sm:text-lg">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href={ctaHref}
            className={`${mont.className} inline-flex items-center justify-center rounded-lg border-2 border-[var(--accent-primary)] bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent-primary)] transition-colors hover:bg-[var(--accent-primary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2`}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
