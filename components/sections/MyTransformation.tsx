"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface MyTransformationProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  beforeLabel?: string;
  afterLabel?: string;
  quote?: string;
  stats?: { value: string; label: string }[];
}

const defaultStats = [
  { value: "50+", label: "lbs lost" },
  { value: "2", label: "years committed" },
  { value: "100%", label: "mindset shift" },
];

export default function MyTransformation({
  eyebrow = "My journey",
  heading = "From Where I Was to Who I Am",
  subheading = "I didn’t just change my body—I rebuilt my habits, discipline, and confidence. Now I help others do the same.",
  beforeImageUrl = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  afterImageUrl = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
  beforeLabel = "Before",
  afterLabel = "After",
  quote = "If I can do it, you can too. It starts with one decision.",
  stats = defaultStats,
}: MyTransformationProps) {
  return (
    <section
      aria-labelledby="transformation-heading"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-(--accent-primary)">
          {eyebrow}
        </p>
        {/* Heading */}
        <h2
          id="transformation-heading"
          className="mt-2 text-center text-2xl font-extrabold tracking-tight text-(--text-primary) sm:text-3xl lg:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-600 sm:text-lg">
          {subheading}
        </p>

        {/* Before / After block */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Before */}
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:shadow-xl">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={beforeImageUrl}
                  alt="Before transformation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span
                  className={`${mont.className} absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm`}
                >
                  {beforeLabel}
                </span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:shadow-xl">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={afterImageUrl}
                  alt="After transformation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span
                  className={`${mont.className} absolute bottom-4 left-4 rounded-md bg-(--accent-primary) px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white`}
                >
                  {afterLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accent line */}
        <div
          className="mx-auto mt-10 h-1 w-20 rounded-full sm:w-24"
          style={{ backgroundColor: "var(--accent-primary)" }}
          aria-hidden="true"
        />

        {/* Quote + stats */}
        <div className="mt-10 flex flex-col items-center gap-8 sm:mt-12 lg:flex-row lg:justify-center lg:gap-16">
          <blockquote className="max-w-xl text-center text-lg font-medium italic leading-relaxed text-(--text-primary) sm:text-xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <dl className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-2xl font-extrabold tracking-tight text-(--accent-primary) sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
