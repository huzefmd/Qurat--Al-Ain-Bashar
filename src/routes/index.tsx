import { createFileRoute, Link } from "@tanstack/react-router";
import { Palette, Activity, HandHeart, Users } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/hero-teaching.jpg";

import { motion } from "framer-motion";

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
    blurb: "Building discipline, strength, and leadership to empower lives and nurture potential.",
  },
  {
    title: "Altruism",
    to: "/model",
    icon: HandHeart,
    blurb: "Serving with compassion and expertise to uplift communities and create real impact.",
  },
  {
    title: "Women-Led",
    to: "/leadership",
    icon: Users,
    blurb: "Proudly founded, led, and operated by women to empower women and transform society.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background mt-26">
      <Nav transparentOnTop />

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Subtle paper texture using a radial wash so the page feels warm and crafted */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(200,160,98,0.10), transparent 60%)",
          }}
        />

        <img
          src={hero}
          alt="A hijabi woman teacher guiding young children through a lesson"
          className="absolute inset-0 h-full w-full object-contain object-[60%] sm:object-right"
        />
        {/* Left-side warm wash so headline stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/55 to-ivory/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/10 via-transparent to-ivory/70" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-32 pb-24 sm:px-8 lg:px-8">
          <div className="max-w-2xl">
           

           

            {/* Foundation name — bigger, widely tracked */}
            {/* <p
              className="mt-5 font-serif text-[13px] sm:text-3xl uppercase tracking-[0.35em] text-ink/80 font-semibold animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Qurat-Al-Ain Bashar
              <span className="mt-10">
                <div className="mt-2"></div>
              </span>

              <span className="tracking-[0.990em] text-center py-10 text-3xl text-center"> Foundation</span>
            </p> */}


            <div
              className="mt-5 font-serif text-[13px] sm:text-3xl uppercase tracking-[0.35em] text-ink/80 font-semibold animate-fade-up "
              style={{ animationDelay: "100ms" }}
            >
              <div>Qurat-Al-Ain Bashar</div>

              <div className="mt-3  mx-16 tracking-[0.8em] text-3xl text-[#C8A086]">
                Foundation
              </div>
            </div>

            {/* Headline */}
            {/* <h1
              className="mt-5   px-40 font-serif text-[44px] leading-[1.05] tracking-[-0.01em] text-[#C8A086] sm:text-xl md:text-[23px] md:leading-[1.02] animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              The <span className="italic font-light text-[#C8A086]">art</span> of
              giving
            </h1> */}

            {/* Italic accent line */}
            {/* <div
              className="mt-7 flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <span className="h-px w-14 bg-ink/60" />
              <p className="font-script text-2xl text-ink sm:text-3xl">
                Together, we create lasting change.
              </p>
            </div> */}

            {/* Body */}
            <p
              className="mt-6 max-w-xl font-serif text-[16px] leading-[1.9] text-ink/80 sm:text-[17px] md:max-w-xl animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              A women-led NGO that transforms the Art of Giving into a purposeful movement, expressed through the transformative pillars—Art, Athleticism, and Altruism—where talent inspires, passion empowers, and compassion creates lasting change.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-ivory transition-all duration-300 hover:bg-[#1a1410] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
              >
                Discover Our Story
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-transparent px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.25em] text-ink transition-all duration-300 hover:border-[#C8A062] hover:text-[#A07A3A]"
              >
                Get Involved
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Scroll indicator */}
            {/* <div className="mt-16 hidden items-center gap-3 text-ink/40 sm:flex">
              <div className="h-8 w-px bg-ink/30" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* PILLAR STRIP */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8 lg:py-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* <p className="font-serif text-[20px] uppercase tracking-[0.5em] text-[#C8A062]">
            Our Pillars
          </p> */}
          {/* <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
            A craft of giving,
            <br className="hidden sm:block" /> built on three quiet pillars.
          </h2> */}
          {/* <div className="mx-auto mt-7 flex items-center justify-center">
            <div className="h-px w-16 bg-[#C8A062]/60" />
            <div className="mx-3 h-1.5 w-1.5 rotate-45 border border-[#C8A062]/70" />
            <div className="h-px w-16 bg-[#C8A062]/60" />
          </div> */}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8"
        >
          {pillars.map((p) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-white/80 p-8 text-center shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C8A062]/40 hover:shadow-[0_25px_50px_-20px_rgba(160,122,58,0.25)] cursor-pointer"
              >
                {/* Soft warm glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-white/0 to-orange-50/0 transition-all duration-700 group-hover:from-amber-50/80 group-hover:via-white/60 group-hover:to-orange-50/60" />

                {/* Number marker */}
                <span className="absolute right-6 top-6 font-serif text-sm italic text-ink/15 transition-colors duration-500 group-hover:text-[#C8A062]/60">
                  0{pillars.indexOf(p) + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A062]/30 bg-ivory transition-all duration-500 group-hover:border-[#C8A062] group-hover:bg-[#C8A062]/10">
                  <Icon className="h-7 w-7 text-[#A07A3A] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>

                {/* Hairline divider */}
                <div className="relative z-10 mx-auto mt-6 h-px w-10 bg-[#C8A062]/40 transition-all duration-500 group-hover:w-16" />

                {/* Title */}
                <h3 className="relative z-10 mt-5 font-serif text-2xl text-ink">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-4 font-sans text-[14px] leading-7 text-ink/65">
                  {p.blurb}
                </p>

                {/* Link */}
                <div className="relative z-10 mt-7">
                  <Link
                    to={p.to}
                    className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-ink/70 transition-colors duration-300 group-hover:text-[#A07A3A]"
                  >
                    Learn more
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
