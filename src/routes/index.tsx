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
      <div className="min-h-screen bg-background mt-24">
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

          </div>
        </section>

        {/* PILLAR STRIP */}
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
          className="mt-20 mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className={`group relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-500 hover:shadow-2xl cursor-pointer ${i > 0 ? "lg:border-l lg:border-gray-200" : ""
                  }`}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100"
                >
                  <Icon
                    className="h-10 w-10 text-amber-700"
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="relative z-10 mx-auto mt-5 h-[2px] w-10 bg-amber-600"
                  whileHover={{
                    width: 80,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                {/* Title */}
                <h3 className="relative z-10 mt-5 text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-4 text-sm leading-7 text-gray-600">
                  {p.blurb}
                </p>

                {/* Button */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="relative z-10"
                >
                  <Link
                    to={p.to}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-700 px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 transition-colors duration-300 hover:bg-amber-700 hover:text-white"
                  >
                    Learn More

                    <motion.span
                      whileHover={{
                        x: 5,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Decorative Circle */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
              </motion.div>
            );
          })}
        </motion.div>

        <Footer />
      </div>
    );
  }
