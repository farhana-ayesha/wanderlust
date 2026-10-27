import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";

const searchFields = [
  {
    label: "Location",
    name: "location",
    placeholder: "Address, City or Zip",
  },
  {
    label: "Date/Duration",
    name: "dates",
    placeholder: "Anytime / 3 days",
  },
  {
    label: "Budget",
    name: "budget",
    placeholder: "$0 - $3000",
  },
  {
    label: "People",
    name: "people",
    placeholder: "5 - 10",
  },
];

export function Banner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden lg:min-h-[calc(100svh-5rem)]",
        className
      )}
    >
      {/* Photo: dronepicr — CC BY 2.0, via Wikimedia Commons */}
      <Image
        src="/images/hero-coast.jpg"
        alt="Aerial view of a Mediterranean coastline with turquoise water and red-roofed houses"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]"
      />

      <div className="flex flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:py-20">
        <h1 className="w-full font-display text-[clamp(2.15rem,8vw,6rem)] font-normal leading-[1.08] text-white">
          <span className="block">Discover Your</span>
          <span className="block">Next Adventure</span>
        </h1>
        <p className="mt-5 w-full max-w-[540px] text-sm leading-6 text-white/85 sm:text-[15px] sm:leading-7">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            className="inline-flex h-11 w-[184px] items-center justify-center gap-2 whitespace-nowrap bg-brand px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-brand-foreground transition-colors hover:bg-brand/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-[184px] items-center justify-center whitespace-nowrap bg-white/20 px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            View Destination
          </button>
        </div>
      </div>

      <div className="px-3 pb-3 sm:px-4 sm:pb-4">
        <form className="mx-auto w-full max-w-[1440px] bg-[#1b1f21]/85 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.4fr_1fr_1fr_180px]">
            {searchFields.map((field) => (
              <label
                key={field.name}
                className="flex cursor-text flex-col justify-center gap-0.5 border-t border-white/10 px-5 py-3 transition-colors hover:bg-white/5 focus-within:bg-white/5 focus-within:ring-1 focus-within:ring-inset focus-within:ring-brand/60 lg:border-l lg:border-t-0 lg:px-6 lg:py-4"
              >
                <span className="text-[11px] tracking-wide text-white/55">
                  {field.label}
                </span>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-white/80"
                />
              </label>
            ))}
            <button
              type="submit"
              className="min-h-12 bg-brand px-6 py-4 text-sm font-medium tracking-wide text-brand-foreground transition-colors hover:bg-brand/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60 lg:min-h-0"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
