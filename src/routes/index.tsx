import { createFileRoute, Link } from "@tanstack/react-router";
import { Palette, Activity, HandHeart, Users } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/hero-teaching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qurat-Al-Ain Bashar Foundation — The art of giving" },
      {
        name: "description",
        content:
          "A women-led NGO built on the pillars of Art, Athleticism, and Altruism. The art of giving.",
      },
      { property: "og:title", content: "Qurat-Al-Ain Bashar Foundation — The art of giving" },
      {
        property: "og:description",
        content:
          "A women-led NGO built on the pillars of Art, Athleticism, and Altruism. The art of giving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    title: "Art",
    to: "/model",
    icon: Palette,
    blurb:
      "Using creativity and artistic expression to educate, preserve culture, raise awareness, and build stronger communities.",
  },
  {
    title: "Athleticism",
    to: "/model",
    icon: Activity,
    blurb:
      "Building discipline, strength, and leadership to empower lives and nurture potential.",
  },
  {
    title: "Altruism",
    to: "/model",
    icon: HandHeart,
    blurb:
      "Serving with compassion and expertise to uplift communities and create real impact.",
  },
  {
    title: "Women-Led",
    to: "/leadership",
    icon: Users,
    blurb:
      "Proudly founded, led, and operated by women to empower women and transform society.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav transparentOnTop />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={hero}
          alt="A hijabi woman teacher guiding young children through a lesson"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        {/* Left-side warm wash so headline stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/85 to-ivory/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory/60" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="font-display text-6xl font-light leading-[0.98] text-ink text-balance sm:text-7xl lg:text-8xl animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Artists,
              <br />
              Athletes,
              <br />
              Altruists<span className="text-ink">.</span>
            </h1>

            <div
              className="mt-8 flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <span className="h-px w-16 bg-ink" />
              <p className="font-display italic text-xl text-ink sm:text-2xl">
                Together, we create lasting change.
              </p>
            </div>

            <p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink sm:text-base animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              A women-led, women-operated NGO built on three quiet pillars —
              Art, Athleticism and Altruism — and the belief that giving,
              done well, is itself a craft.
            </p>
          </div>

          {/* PILLAR STRIP */}
          <div
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`group relative flex flex-col items-center text-center px-4 ${
                    i > 0 ? "lg:border-l lg:border-ink/10" : ""
                  }`}
                >
                  <Icon className="h-10 w-10 text-ink" strokeWidth={1.5} />
                  <div className="mt-2 h-px w-8 bg-ink/50" />
                  <h3
                    className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink">
                    {p.blurb}
                  </p>
                  <Link
                    to={p.to}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-all hover:bg-ink/5"
                  >
                    Learn More
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAGLINE BANNER */}
      <section className="border-y border-border/70 bg-cream/70">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <span className="text-ink text-xl" aria-hidden>❦</span>
          <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-ink sm:text-sm sm:tracking-[0.4em]">
            Creating Opportunities. Inspiring Change. Serving Humanity.
          </p>
          <span className="text-ink text-xl" aria-hidden>❦</span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
