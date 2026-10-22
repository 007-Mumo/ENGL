import { Download, Leaf, MapPin } from "lucide-react";
import heroBotanical from "@/assets/lynne profile.jpeg";
import { profile } from "@/data/cv";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-mustard-soft/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sage/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <p className="eyebrow flex items-center gap-2.5 text-forest">
            <Leaf className="h-4 w-4 text-mustard" aria-hidden />
            {profile.eyebrow}
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.08] text-brown sm:text-6xl">
            {profile.headline[0]}
            <br />
            <span className="italic text-forest">{profile.headline[1]}</span>
            <br />
            {profile.headline[2]}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-brown/25 transition-all hover:-translate-y-0.5 hover:bg-brown-deep"
            >
              Explore My CV
            </a>
            <a
              href="#contact"
              className="rounded-full border border-primary/40 px-7 py-3 text-sm font-semibold text-brown transition-colors hover:border-mustard hover:bg-mustard-soft/40 hover:text-espresso"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-forest" aria-hidden />
              {profile.location}
            </span>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-1.5 font-medium text-brown underline decoration-mustard decoration-2 underline-offset-4 transition-colors hover:text-forest"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download My CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div aria-hidden className="arch-frame absolute -inset-3 border border-mustard/50" />
          <div className="arch-frame relative overflow-hidden shadow-xl shadow-brown/20">
            <img
              src={heroBotanical}
              alt="Dried pampas grass and eucalyptus in a terracotta vase on warm linen"
              width={912}
              height={1200}
              fetchPriority="high"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 max-w-[16rem] rounded-2xl border border-border bg-card px-5 py-4 shadow-lg">
            <p className="eyebrow text-[0.62rem] text-mustard">B.Sc. · First Class Honours</p>
            <p className="mt-1 font-display text-lg font-semibold leading-snug text-brown">
              Electrical &amp; Electronic Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
