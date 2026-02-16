"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import PhoneFrame from "@/components/ui/PhoneFrame";

type Feature = {
  id: string;
  label: string;
  title: string;
  description: string;
  screenshotUrl?: string;
  content?: ReactNode;
};

interface FeaturesProps {
  eyebrow?: string;
  heading?: string;
  items?: Feature[];
}

const defaultItems: Feature[] = [
  {
    id: "workouts",
    label: "Workout Sessions",
    title: "Training Plans",
    description:
      "Structured programming tailored to your goals with progressive overload and clear milestones.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "nutrition",
    label: "Nutrition / Recipes",
    title: "Sustainable Nutrition",
    description:
      "Macro-friendly meals, grocery lists, and flexible guidance to fit busy lifestyles.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "progress",
    label: "Progress Tracking",
    title: "Data-Driven Results",
    description:
      "Weekly check-ins, measurements, and photo logs to keep you accountable and improving.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1551281044-8a281611b4d2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "dm",
    label: "Direct Message",
    title: "1:1 Support",
    description:
      "Direct access for quick feedback, form checks, and motivation when you need it most.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Features({
  eyebrow = "Charm Fitness",
  heading = "What You Get With My Coaching",
  items = defaultItems,
}: FeaturesProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative isolate w-full py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
          {eyebrow}
        </p>
        {/* Heading */}
        <h2 className="mt-2 text-center text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          {heading}
        </h2>

        {/* Aligned label + card columns */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div key={item.id} className="flex h-full flex-col gap-3">
                {/* Label directly above its card, same width as phone */}
                <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-none">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleToggle(item.id)}
                    className={`w-full rounded-lg px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide shadow-sm transition-colors sm:text-xs ${
                      isActive
                        ? "bg-red-600 text-white"
                        : "bg-zinc-900 text-white hover:bg-zinc-800"
                    }`}
                  >
                    {item.label}
                  </button>
                </div>

                {/* Card: the iPhone is the visual card, text lives below */}
                <article
                  className={`group relative flex h-full flex-col rounded-xl transition will-change-transform ${
                    isActive ? "ring-2 ring-red-200" : "hover:-translate-y-1"
                  } ${activeId && !isActive ? "opacity-60" : "opacity-100"}`}
                >
                  {/* Constrain width on mobile/tablet; full width on desktop */}
                  <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-none">
                    <PhoneFrame
                      className="w-full"
                      imageUrl={
                        item.screenshotUrl ??
                        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop"
                      }
                      alt={`${item.title} preview`}
                    />

                    {/* Details panel under the phone, matching same width */}
                    <div className="relative mt-3 flex h-48 flex-1 flex-col overflow-hidden rounded-b-xl bg-white p-5 text-center">
                      {/* Fixed-height title block so underline aligns across cards */}
                      <div className="mx-auto flex h-20 w-full flex-col items-center justify-end">
                        <h3 className="text-base text-xl font-semibold leading-tight text-zinc-900">
                          {item.title}
                        </h3>
                        <div className="mt-1 h-1 w-16 rounded-full bg-red-600" />
                      </div>
                      <p className="mt-2 text-lg leading-6 text-zinc-600">
                        {item.description}
                      </p>
                      {item.content ? (
                        <div className="mt-4 text-sm text-zinc-700">
                          {item.content}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
