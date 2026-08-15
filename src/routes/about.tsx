import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Prose } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-about.jpg";
import { motion } from "framer-motion";

import { Eye, Target, Quote } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "Purpose-driven, women-led NGO uniting artists, athletes and altruists for lasting social impact.",
      },
      { property: "og:title", content: "About — Qurat-Al-Ain Bashar Foundation" },
      {
        property: "og:description",
        content:
          "Purpose-driven, women-led NGO uniting artists, athletes and altruists for lasting social impact.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function Pillar({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-500 hover:border-terracotta/40 hover:shadow-2xl"
    >
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-gradient-to-r from-terracotta to-gold transition-transform duration-500 group-hover:scale-x-100" />

      <p className="text-xs uppercase tracking-[0.28em] text-ink transition-colors duration-300 group-hover:text-terracotta">
        {kicker}
      </p>

      <h3 className="mt-3 font-display text-2xl text-ink transition-colors duration-300 group-hover:text-terracotta">
        {title}
      </h3>

      <p className="mt-5 text-[15px] leading-8 text-ink/90">{children}</p>
    </motion.div>
  );
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function About() {
  return (
    <PageShell transparentNav>
      <PageHero
        eyebrow="Our Story"
        title="About"
        image={heroImg}
      />

      <section className="px-4 py-20 sm:px-6 sm:py-15 lg:px-8">
        <Prose>
          <p>
            Qurat-Al-Ain Bashar Foundation is a purpose-driven, women-led, and women-operated NGO
            committed to creating lasting social impact through the combined power of Art,
            Athleticism, and Altruism.
          </p>
          <p>
           Our organization serves as a collaborative platform where
            artists, athletes, and altruists come together to inspire communities, promote positive
            change, and provide humanitarian and social welfare support. We believe that talent,
            skill, and service can become powerful tools for sustainable social transformation.
          </p>
          <p>
            The NGO that blends the transformative power of art, athleticism, and altruism to create meaningful social impact. Our organization serves as a collaborative platform where artists, athletes, altruists unite
            to raise awareness, inspire change, and deliver direct humanitarian and social welfare support.
          </p>
          <p>
            Through art exhibitions, sports events, volunteer-led initiatives, and community-driven
            projects, the organization raises awareness of pressing social issues, channels
            resources toward humanitarian aid, and empowers individuals to take part in positive
            change.
          </p>
          <p>
           By acting as a collaborative platform for artists, athletes, and altruists, the
            NGO transforms passion into purpose — inspiring communities, fostering unity, and
            delivering direct impact where it is needed most.
          </p>

          <p>
            By acting as a collaborative platform for artists, athletes, altruists the NGO transforms passion into purpose — inspiring communities, fostering unity, and delivering direct impact where it is needed most.
          </p>
        </Prose>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-16 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.3em] text-ink"
            >
              The Three Pillars
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-terracotta to-transparent"
            />
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Pillar kicker="Creativity for Change" title="Artists">
              Artists contribute their creativity, imagination, and artistic talents to educate,
              inspire, and raise awareness about important social issues. Through visual arts,
              music, dance, theatre, storytelling, and other creative expressions, they empower
              communities and spark meaningful conversations.
            </Pillar>

            <Pillar kicker="Discipline for Growth" title="Athletes">
              Athletes promote the values of discipline, resilience, teamwork, leadership, and
              healthy living. Through sports, fitness programs, and mentorship, they inspire
              individuals—especially girls and women—to build confidence, develop life skills, and
              achieve their full potential.
            </Pillar>

            <Pillar kicker="Service with Compassion" title="Altruists">
              Altruists are the heart of our humanitarian efforts. They dedicate their time,
              expertise, and compassion to community service, education, healthcare, environmental
              initiatives, disaster relief, women empowerment, and social welfare programs that
              directly improve lives.
            </Pillar>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 sm:py-12 lg:px-8 font-serif">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-ink"
          >
            Our Identity
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-terracotta to-transparent"
          />

          {/* Heading — single line */}
          <h2 className="mt-7 font-serif text-4xl leading-[1.15] text-ink sm:text-5xl">
            A <span className="italic font-light text-[#A07A3A]">Women-Led</span> Organization
          </h2>

          {/* Body — flowing paragraphs, easy to read */}
          <div className="mx-auto mt-8 max-w-3xl space-y-7 text-left font-serif text-[17px] leading-[1.9] text-ink/80 sm:text-[18px]">
            <p>
              Our NGO is proudly managed entirely by women and operated exclusively by women.
              Women have immense potential to lead, create, innovate, and serve, and this
              organization exists because we believe in what women can build together.
            </p>
            <p>
              We are committed to creating leadership opportunities for women while building an
              inclusive ecosystem where women drive social innovation, community development, and
              sustainable change.
            </p>
          </div>

          {/* Closing label */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C8A062]/60" />
            <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-[#A07A3A] font-semibold">
              Women <span className="text-[#C8A062]">•</span> Leadership{" "}
              <span className="text-[#C8A062]">•</span> Change
            </p>
            <div className="h-px w-10 bg-[#C8A062]/60" />
          </div>
        </motion.div>
      </section>

      {/* Founder's Letter */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-ivory to-cream px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="mb-10 ">

            <p className="text-l  uppercase tracking-[0.8em] text-gold">
              From the
            </p>

            <h2 className="mt-4 -ml-1 font-display text-4xl uppercase tracking-[0.45em] text-ink sm:text-7xl">
              Founder
            </h2>

            <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />


          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-serif text-[18px] leading-[1.95] text-ink/85"
          >
            <motion.p variants={fadeUp} className="mb-1 first-letter:float-left first-letter:mr-4 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.9] first-letter:text-gold">
              I'm Shifa Sultana, the founder of Qurat-Al-Ain Bashar Foundation. My vision for
              this organization wasn't driven by the idea of solving a problem — but rather by a
              belief.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">

              I did not establish this organization because I saw limitations. I founded it because I saw possibilities.

            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">

              This Foundation was born from a simple yet powerful
              belief: every individual has the ability to create positive change when talent is
              guided by purpose and compassion.

            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">

              That belief became the foundation of this organization.

            </motion.p>
            <motion.p variants={fadeUp} className="mb-2">

              This Foundation was born from a simple yet powerful belief: that every individual has the ability to create positive change when talent is guided by purpose and compassion.

            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">

              That belief became the foundation of this organization.
            </motion.p>


            <motion.p variants={fadeUp} className="mb-2">
              Throughout history, women have been creators, caregivers, innovators, athletes,
              artists, professionals, and community builders — yet many continue to face
              barriers that limit their opportunities to lead, earn, and be recognized for their
              contributions. I wanted to create a space where women are not merely included, but
              where they stand confidently at the center of leadership, innovation, and impact.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">
              This NGO was built to become that space
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">
             It is a
              platform where women express their creativity as artists, inspire resilience as
              athletes, and dedicate themselves to humanitarian service as altruists. Here, talent
              is valued, leadership is encouraged, and every woman has the opportunity to
              contribute to something greater than herself.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">
              I dreamed of creating more than an NGO. I envisioned a community where creativity,
              discipline, and compassion work together to produce lasting social impact — a
              place where artists inspire through their creativity, athletes empower through
              dedication, and altruists serve with selfless purpose, each contributing their
              unique strengths to improve lives and strengthen communities. 
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">
              At the heart of this foundation is another belief that is deeply personal to me: the power of women to lead with vision, integrity, empathy, and resilience.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">
              This foundation is proudly women-founded, women-led, and women-operated because I believe that when women come together with a shared purpose, they create environments where collaboration thrives, opportunities grow, and communities flourish. This has never been about limiting who we serve—it has always been about demonstrating what women can build when they are united by a common vision. While women lead our organization, our mission is to serve society as a whole.
            </motion.p>


            <motion.p variants={fadeUp} className="mb-2">
              I also wanted to reimagine how an organization creates impact. Instead of relying primarily on donations, we chose to build a model rooted in dignity, sustainability, and shared responsibility. We believe that lasting change begins by creating value. Through art, athleticism, education, professional expertise, and acts of service, our members transform their talents into meaningful work. A portion of that value is
              then reinvested into our mission, creating a continuous cycle of opportunity, empowerment, and community impact.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-2">
              This organization is more than an NGO. It is a community of women who believe that
              creativity, discipline, compassion, and purpose can transform lives. Every
              initiative we undertake is rooted in the belief that sustainable change begins when
              women are empowered to lead, collaborate, and uplift one another. Hope is not
              something we wait for; it is something we create through our actions, our values,
              and our commitment to one another.
            </motion.p>


            <motion.p variants={fadeUp} className="mb-2">

              My hope is that every woman who joins this journey discovers not only a place to
              contribute, but also a place to grow, to lead, and to inspire others. Together, we
              are proving that when women support women, the impact extends far beyond our
              organization — it strengthens families, transforms communities, and builds a more
              compassionate and equitable future.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-10">
              This is the legacy we strive to create, and I
              warmly invite every woman who shares this vision to become part of it.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-4 font-cinzel text-lg uppercase tracking-[0.65em] text-gold"
            >
              With purpose and hope,
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-3 font-Cinzel text-4xl font-medium tracking-wide text-foreground md:text-5xl"
            >
              Shifa Sultana
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-xs uppercase font-Cinzel tracking-[0.5em] text-muted-foreground"
            >
              Founder
            </motion.p>
    
            {/* <motion.div variants={fadeUp} className="mt-20 space-y-6">

              <div className="rounded-2xl border border-gold/25 bg-ink p-10 text-center">
                <h3 className="font-display text-3xl text-gold">Our Vision</h3>
                <div className="mx-auto my-5 h-px w-16 bg-gold/40" />
                <p className="font-serif text-lg leading-9 text-ivory/85">
                  To build a world where creativity inspires, athleticism empowers, and altruism
                  transforms lives — creating self-sustaining communities led by women.
                </p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-ink p-10 text-center">
                <h3 className="font-display text-3xl text-gold">Our Mission</h3>
                <div className="mx-auto my-5 h-px w-16 bg-gold/40" />
                <p className="font-serif text-lg leading-9 text-ivory/85">
                  To unite artists, athletes, and altruists through one collaborative platform
                  that transforms professional talent into meaningful social impact while
                  promoting women's leadership, education, health, humanitarian service, and
                  sustainable community development.
                </p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-ink p-10 text-center">
                <h3 className="font-display text-3xl text-gold">Our Belief</h3>
                <div className="mx-auto my-5 h-px w-16 bg-gold/40" />
                <p className="font-display text-xl italic leading-9 text-ivory/85">
                  "Talent is more than a gift — it is a responsibility. When creativity,
                  discipline, and compassion come together, they become a force for lasting
                  social change."
                </p>
              </div>

            </motion.div> */}
            <motion.div variants={fadeUp} className="mt-20">

              {/* Section Heading */}
              <div className="mb-16 max-w-3xl">
                <p className="mb-5 font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-[#B87920]">
                  Vision · Mission · Belief
                </p>

                <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-[#2C2118] md:text-5xl lg:text-6xl">
                  Lasting change is not only funded.{" "}
                  <span className="text-[#B87920]">
                    It is created.
                  </span>
                </h2>
              </div>


            <motion.div
              variants={fadeUp}
              className="mt-20 grid grid-cols-1 gap-12 border-t border-[#D8CBB8] pt-8 md:grid-cols-3 md:gap-10"
            >
              {/* OUR VISION */}
              <div className="text-left">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C88A2B] text-[#FBF5EA]">
                  <Eye className="h-5 w-5" />
                </div>

                <h3 className="mb-4 font-cinzel text-xs font-semibold uppercase tracking-[0.18em] text-[#B87920]">
                  Our Vision
                </h3>

                <p className="font-serif text-xl leading-[1.7] text-[#2C2118]">
                  To build a world where creativity inspires, athleticism empowers,
                  and altruism transforms lives — creating self-sustaining communities
                  led by women.
                </p>
              </div>

              {/* OUR MISSION */}
              <div className="text-left">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C88A2B] text-[#FBF5EA]">
                  <Target className="h-5 w-5" />
                </div>

                <h3 className="mb-4 font-cinzel text-xs font-semibold uppercase tracking-[0.18em] text-[#B87920]">
                  Our Mission
                </h3>

                <p className="font-serif text-xl leading-[1.7] text-[#2C2118]">
                  To unite artists, athletes, and altruists through one collaborative
                  platform that transforms professional talent into meaningful social
                  impact while promoting women's leadership, education, health,
                  humanitarian service, and sustainable community development.
                </p>
              </div>

              {/* OUR BELIEF */}
              <div className="text-left">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C88A2B] text-[#FBF5EA]">
                  <Quote className="h-5 w-5" />
                </div>

                <h3 className="mb-4 font-cinzel text-xs font-semibold uppercase tracking-[0.18em] text-[#B87920]">
                  Our Belief
                </h3>

                <p className="font-serif text-xl leading-[1.7] text-[#2C2118]">
                  Talent is more than a gift — it is a responsibility. When creativity,
                  discipline, and compassion come together, they become a force for
                  lasting social change.
                </p>
              </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </PageShell>
  );
}
