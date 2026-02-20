import Image from "next/image";
import Link from "next/link";
import { branding } from "@/config/branding";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Fully Personalized Training",
    description:
      "Built around your body goals, schedule, and experience level for long-term muscle gain and fat loss.",
  },
  {
    title: "1-on-1 Access + Weekly Calls",
    description:
      "Direct communication for fast feedback, form checks, and program adjustments.",
  },
  {
    title: "Lift Technique + Program Analysis",
    description:
      "Technical breakdown of your key lifts and training split for optimal progression and injury prevention.",
  },
  {
    title: "Progress Accountability",
    description:
      "Training consistency and execution are monitored so your results stay on track.",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Nutrition aligned with training demands, recovery, and body composition goals.",
  },
  {
    title: "Private Charm Fitness Community",
    description:
      "Train alongside others focused on real body transformations like yourself.",
  },
];

const systemImageUrl =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop";

export default function Features() {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: branding.colors.background.secondary }}
      aria-labelledby="system-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <h2
            id="system-heading"
            className="text-3xl font-extrabold italic uppercase tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: branding.colors.text.primary }}
          >
            The Charm Fitness System
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: branding.colors.text.secondary }}
          >
            Specific coaching for individuals who want to maximize their
            physique and overall health.
          </p>

          
        </header>

        <h3
              className="text-xl font-bold sm:text-2xl text-center mt-12"
              style={{ color: branding.colors.text.primary }}
            >  
                What You Get With Charm Fitness:
            </h3>

        {/* Two-column: features list (left) + image (right) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-6 lg:gap-14 lg:items-start">

          {/* Left: feature list */}
          <div className="min-w-0">
            
            <ul className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
              {features.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7"
                    style={{
                      backgroundColor: branding.colors.accent.primary,
                      color: branding.colors.text.inverse,
                    }}
                    aria-hidden
                  >
                    <svg
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <div>
                    <span
                      className="font-bold"
                      style={{ color: branding.colors.text.primary }}
                    >
                      {item.title}
                    </span>
                    <p
                      className="mt-1 text-sm leading-relaxed sm:text-base"
                      style={{ color: branding.colors.text.secondary }}
                    >
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[420px] min-w-0 overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 md:min-h-[480px] lg:mt-2 lg:min-h-[560px] md:self-center">
            <Image
              src={systemImageUrl}
              alt="Charm Fitness coaching — focused training for your goals"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        {/* CTA + disclaimer */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:mt-14">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:opacity-95 active:scale-[0.98]"
            style={{
              backgroundColor: branding.colors.accent.primary,
              border: `2px solid ${branding.colors.text.primary}`,
            }}
          >
            Apply for Charm Fitness
          </Link>
          <p
            className="text-sm"
            style={{ color: branding.colors.text.secondary }}
          >
            Limited spots to maintain coaching quality.
          </p>
        </div>
      </div>
    </section>
  );
}
