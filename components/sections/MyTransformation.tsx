import Image from "next/image";
import type { ReactNode } from "react";

type TransformationItem = {
  id: string;
  caption: string;
  imageUrl: string;
  alt: string;
  footer?: ReactNode;
};

interface MyTransformationProps {
  heading?: string;
  backgroundClassName?: string;
  items?: TransformationItem[];
}

const defaultItems: TransformationItem[] = [
  {
    id: "bf-start",
    caption: "15%+ Body Fat, 130 lbs",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
    alt: "Early progress mirror photo",
  },
  {
    id: "bf-end",
    caption: "9% Body Fat, 143 lbs",
    imageUrl:
      "https://images.unsplash.com/photo-1594737626072-90dc274bc2c9?q=80&w=1400&auto=format&fit=crop",
    alt: "Leaner mirror photo",
  },
  {
    id: "vert-26",
    caption: "26 inch vertical",
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1400&auto=format&fit=crop",
    alt: "Athlete jumping outdoors",
  },
  {
    id: "vert-41",
    caption: "41.5 inch vertical",
    imageUrl:
      "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1400&auto=format&fit=crop",
    alt: "Athlete dunking basketball",
  },
];

export default function MyTransformation({
  heading = "My Transformation",
  backgroundClassName = "bg-zinc-100",
  items = defaultItems,
}: MyTransformationProps) {
  // Group items in pairs [ [a,b], [c,d], ... ]
  const grouped = items.reduce<TransformationItem[][]>((acc, curr, idx) => {
    if (idx % 2 === 0) acc.push([curr]);
    else acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <section
      aria-labelledby="my-transformation-heading"
      className={`relative isolate w-full py-14 sm:py-20 lg:py-24 ${backgroundClassName}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          id="my-transformation-heading"
          className="text-center text-3xl font-extrabold uppercase tracking-tight text-zinc-900 sm:text-4xl"
        >
          {heading}
        </h2>

        {/* Grouped gallery: two images per row with a black separator */}
        <div className="mt-10 space-y-8">
          {grouped.map((pair, rowIdx) => (
            <div
              key={`row-${rowIdx}`}
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative flex h-[540px] flex-col sm:h-[460px] sm:flex-row lg:h-[520px]">
                {pair.map((item) => (
                  <figure
                    key={item.id}
                    className="group relative flex-1"
                  >
                    {/* Caption bubble per image */}
                    <figcaption className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2">
                      <span className="inline-block rounded-full bg-zinc-900/90 px-3 py-1 text-center text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm sm:text-xs">
                        {item.caption}
                      </span>
                    </figcaption>

                    {/* Image with hover and gradient */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.alt}
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        priority={false}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
                      />
                    </div>

                    {/* Optional footer per item */}
                    {item.footer ? (
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2 text-center text-xs text-zinc-700 backdrop-blur">
                        {item.footer}
                      </div>
                    ) : null}
                  </figure>
                ))}

                {/* Vertical black separator between the two images */}
                {pair.length === 2 ? (
                  <>
                    {/* Separator for stacked (mobile): horizontal */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-black sm:hidden"
                    />
                    {/* Separator for side-by-side (sm+): vertical */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-black sm:block"
                    />
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
