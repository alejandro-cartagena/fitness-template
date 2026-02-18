import Link from "next/link";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface HeroProps {
  titleLines?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageUrl?: string;
  overlayClassName?: string;
}

export default function Hero({
  titleLines = ["Unlock the path to", "your dream", "physique."],
  ctaLabel = "Join My Team",
  ctaHref = "/#contact",
  backgroundImageUrl = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  overlayClassName = "bg-black/60",
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate h-[65vh] min-h-[520px] w-full overflow-hidden sm:h-[72vh] lg:h-[82vh]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid h-full max-w-5xl place-items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold uppercase tracking-tight text-[var(--text-inverse)]">
            <span className="block text-3xl leading-tight sm:text-5xl lg:text-6xl">
              {titleLines[0] ?? ""}
            </span>
            <span className="block text-3xl leading-tight sm:text-5xl lg:text-6xl">
              {titleLines[1] ?? ""}
            </span>
            <span className="block text-3xl leading-tight sm:text-5xl lg:text-6xl">
              {titleLines[2] ?? ""}
            </span>
          </h1>

          {/* Accent underline */}
          <div className="mt-3 h-1 w-20 bg-[var(--accent-primary)] sm:w-24" aria-hidden="true" />

          {/* CTA */}
          <div className="mt-6">
            <Link
              href={ctaHref}
              className={`${mont.className} inline-flex items-center justify-center rounded-md bg-[var(--accent-primary)] px-5 py-2.5 text-lg uppercase tracking-wider font-semibold text-white shadow-sm transition hover:bg-[var(--accent-hover)] active:scale-95`}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
