"use client";

import { useState, useId } from "react";
import { siteConfig } from "@/config/site";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: "1",
    question: "How long does the coaching program last?",
    answer:
      "Programs are tailored to your goals and timeline. Most clients commit to a minimum of 12 weeks to build habits and see meaningful results. Longer commitments are available and often include better rates.",
  },
  {
    id: "2",
    question: "Do I need a gym membership?",
    answer:
      "Yes. Effective resistance training for muscle gain and body recomposition is best done with access to free weights and machines. I can help you choose a gym that fits your budget and schedule.",
  },
  {
    id: "3",
    question: "What if I've never lifted weights before?",
    answer:
      "Beginners are welcome. Programming is scaled to your experience level, and we focus on technique and progressive overload from day one. You'll build a solid foundation before advancing.",
  },
  {
    id: "4",
    question: "How does nutrition coaching work?",
    answer:
      "We set targets based on your goals (e.g., muscle gain or fat loss), schedule, and preferences. You get clear guidance on calories and macros, plus practical strategies for meals and adherence—no rigid meal plans unless you want them.",
  },
  {
    id: "5",
    question: "Is there a payment plan?",
    answer:
      "Payment options depend on program length. Some plans offer monthly billing; others are paid in full for a discount. Details are shared when you apply.",
  },
  {
    id: "6",
    question: "Can I pause or cancel?",
    answer:
      "Life happens. Pause and cancellation policies are outlined in your agreement so you know your options upfront. The goal is to keep you on track without locking you into something that no longer fits.",
  },
];

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  headingId,
  panelId,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  headingId: string;
  panelId: string;
}) {
  return (
    <div
      className="group border-b transition-colors last:border-b-0"
      style={{ borderColor: siteConfig.branding.colors.border }}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={headingId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold transition-colors hover:opacity-90 sm:py-6"
          style={{ color: siteConfig.branding.colors.text.primary }}
        >
          <span className="pr-4 text-base sm:text-lg">{item.question}</span>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200"
            style={{
              backgroundColor: siteConfig.branding.colors.accent.primary,
              color: siteConfig.branding.colors.text.inverse,
            }}
            aria-hidden
          >
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-5 text-sm leading-relaxed sm:pb-6 sm:text-base"
            style={{ color: siteConfig.branding.colors.text.secondary }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface FaqProps {
  eyebrow?: string;
}

export default function Faq({ eyebrow = "Support" }: FaqProps) {
  const [openId, setOpenId] = useState<string | null>(defaultFaqs[0]?.id ?? null);
  const baseId = useId();

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: siteConfig.branding.colors.background.primary }}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: siteConfig.branding.colors.accent.primary }}
          >
            {eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl"
            style={{ color: siteConfig.branding.colors.text.primary }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mx-auto mt-3 max-w-lg text-base sm:text-lg"
            style={{ color: siteConfig.branding.colors.text.secondary }}
          >
            Quick answers to common questions. Still have one? Reach out.
          </p>
        </header>

        <div
          className="mt-10 overflow-hidden rounded-2xl border bg-white shadow-sm sm:mt-12"
          style={{ borderColor: siteConfig.branding.colors.border }}
        >
          <div className="divide-y-0 px-4 sm:px-6">
            {defaultFaqs.map((item, index) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
                headingId={`${baseId}-faq-${index}`}
                panelId={`${baseId}-panel-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
