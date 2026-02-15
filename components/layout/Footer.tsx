import Link from "next/link";
import { siteConfig } from "@/config/site";
import SocialIcons from "@/components/ui/SocialIcons";
import { navigation } from "@/config/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: CTA on left, socials on right */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center sm:gap-8">
          <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Commit to the Change
            </p>
            <h3 className="mt-1 text-xl font-semibold text-zinc-100 sm:text-2xl">
                Get Started Now
            </h3>
            <div className="mt-4">
              <Link
                href="/#contact"
                className="tracking-wider uppercase inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 active:scale-95"
                aria-label="Join my team"
              >
                Join the Movement
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="sm:hidden h-px w-full bg-white/10" />

          <div className="flex md:flex-row flex-col md:gap-8 gap-4 text-center md:text-left mx-auto md:mx-0">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-100">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="w-full sm:w-auto md:mt-0 mt-4">
            <div className="flex items-center justify-center md:justify-end">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Bottom section: Copyright */}
        <div className="flex items-center justify-between py-6">
          <p className="text-xs sm:text-sm text-center md:text-left mx-auto md:mx-0">
            © {year} {siteConfig?.name ?? "Your Company"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
