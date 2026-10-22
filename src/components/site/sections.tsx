import {
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Plane,
  Sparkles,
  Sprout,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import aboutTexture from "@/assets/about-texture.jpg";
import beyondWork from "@/assets/beyond-work.jpg";
import {
  certifications,
  education,
  experience,
  interests,
  leadership,
  skills,
} from "@/data/cv";

function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="eyebrow text-mustard">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold text-brown sm:text-5xl">
        {title}
      </h2>
      <div
        aria-hidden
        className={`mt-4 h-0.5 w-16 bg-mustard ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}

export function About() {
  const highlights = [
    "Industrial maintenance and equipment troubleshooting",
    "Electrical installations, design and billing",
    "Leadership in engineering student organisations",
    "Travelling, event planning, outreach and community cleanups",
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative order-2 lg:order-1">
          <img
            src={aboutTexture}
            alt="Pressed eucalyptus and dried wildflowers on oatmeal linen beside an open notebook"
            width={1008}
            height={1008}
            loading="lazy"
            className="h-auto w-full rounded-3xl object-cover shadow-lg shadow-brown/15"
          />
          <div
            aria-hidden
            className="absolute -bottom-5 -right-4 h-28 w-28 rounded-full border border-mustard/60"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="About Me" title="A Little About Me" align="left" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            I completed my Bachelor of Science in Electrical and Electronic
            Engineering at the University of Nairobi, and my journey has taken
            me from packaging lines at East African Breweries Limited to ATM
            hardware benches at NCR Kenya and domestic wiring installations.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            What draws me to engineering is the problem-solving — understanding
            how something works, finding where it fails, and restoring it. I
            pair that curiosity with a commitment to continuous professional
            development, and I have grown as a leader through engineering
            student organisations.
          </p>
          <ul className="mt-6 space-y-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 rounded-r-xl border-l-4 border-mustard bg-secondary px-5 py-4">
            <p className="font-display text-lg italic leading-snug text-brown">
              Always learning. Always growing. Always looking for ways to make
              a meaningful difference.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-oatmeal/50">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:py-24">
        <SectionHeading eyebrow="Professional Experience" title="Where I've Worked" />
        <ol className="mt-12 space-y-10">
          {experience.map((item) => (
            <li key={item.org} className="relative border-l border-border pl-8">
              <span
                aria-hidden
                className="absolute -left-[0.57rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-forest"
              />
              <p className="eyebrow text-[0.68rem] text-mustard">{item.period}</p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold text-brown">
                {item.org}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-forest">{item.role}</p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-mustard" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Leadership & Community"
          title="Leadership, Community & Collaboration"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {leadership.map((item) => (
            <article
              key={item.org}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-brown">
                    {item.org}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-forest">{item.role}</p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-mustard-soft px-3 py-1 text-xs font-semibold text-espresso">
                  {item.period}
                </span>
              </div>
              {item.points.map((point) => (
                <p key={point} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {point}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const groups: { title: string; icon: LucideIcon; items: string[] }[] = [
    { title: "Professional Skills", icon: Sparkles, items: skills.professional },
    { title: "Technical Experience", icon: Wrench, items: skills.technical },
  ];

  return (
    <section id="skills" className="scroll-mt-24 bg-oatmeal/50">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionHeading eyebrow="Skills & Expertise" title="What I Bring" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden className="rounded-full bg-primary/10 p-2.5">
                  <group.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-brown">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:py-24">
        <SectionHeading eyebrow="Education" title="Academic Journey" />
        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <article
              key={item.school}
              className={
                index === 0
                  ? "rounded-2xl border border-mustard/60 bg-card p-7 shadow-md"
                  : "rounded-2xl border border-border bg-card/70 p-6"
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3
                    className={`font-display font-semibold text-brown ${
                      index === 0 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.credential}</p>
                </div>
                <div className="text-right">
                  <p className="eyebrow text-[0.65rem] text-forest">{item.period}</p>
                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-bold text-espresso ${
                      index === 0 ? "bg-mustard" : "bg-mustard-soft"
                    }`}
                  >
                    {item.detail}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 bg-oatmeal/50">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:py-24">
        <SectionHeading eyebrow="Certifications & Awards" title="Continued Learning" />
        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {certifications.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-center justify-between gap-3 px-6 py-5"
            >
              <div>
                <h3 className="font-semibold text-brown">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.issuer}</p>
              </div>
              <span className="rounded-full bg-mustard px-3 py-1 text-xs font-bold tracking-wide text-espresso">
                {item.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const interestIcons: LucideIcon[] = [CalendarDays, Plane, HeartHandshake, Sprout];

export function Interests() {
  return (
    <section id="beyond" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <img
          src={beyondWork}
          alt="A travel journal with dried wildflowers and a straw hat on a sunlit wooden table"
          width={1008}
          height={1008}
          loading="lazy"
          className="h-auto w-full rounded-3xl object-cover shadow-lg shadow-brown/15"
        />
        <div>
          <SectionHeading eyebrow="Personal Touch" title="Beyond the Work" align="left" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Away from engineering, you will find me planning gatherings,
            exploring new places, and giving my time to outreach programmes and
            community cleanups — the places where people and purpose meet.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {interests.map((interest, index) => {
              const Icon = interestIcons[index % interestIcons.length];
              return (
                <li
                  key={interest.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <Icon className="h-4 w-4 shrink-0 text-forest" aria-hidden />
                  {interest.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
