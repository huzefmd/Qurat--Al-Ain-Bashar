import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Prose } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-about.jpg";
import letterImg from "@/assets/founder-letter.jpg";
import { motion } from "framer-motion";

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
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-500 hover:border-terracotta/40 hover:shadow-2xl"
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
        subtitle="Purpose-driven. Women-led. Committed to lasting social impact through Art, Athleticism, and Altruism."
        image={heroImg}
      />

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Prose>
          <p>
            Qurat-Al-Ain Bashar Foundation is purpose-driven, women-led, and women-operated NGO
            committed to creating lasting social impact through the combined power of Art,
            Athleticism, and Altruism.
          </p>
          <p>
            Our organization serves as a collaborative platform where artists, athletes, and
            altruists come together to inspire communities, promote positive change, and provide
            humanitarian and social welfare support. We believe that talent, skill, and service can
            become powerful tools for sustainable social transformation.
          </p>
          <p>
            The NGO that blends the transformative power of art, athleticism, and altruism to create
            meaningful social impact. Our organization serves as a collaborative platform where
            artists, athletes, altruists unite to raise awareness, inspire change, and deliver
            direct humanitarian and social welfare support.
          </p>
          <p>
            Through art exhibitions, sports events, volunteer-led initiatives, and community-driven
            projects, the organization raises awareness of pressing social issues, channels
            resources toward humanitarian aid, and empowers individuals to take part in positive
            change.
          </p>
          <p>
            By acting as a collaborative platform for artists, athletes, altruists the NGO
            transforms passion into purpose — inspiring communities, fostering unity, and delivering
            direct impact where it is needed most.
          </p>
        </Prose>
      </section>

      <section className="bg-cream/60 px-4 py-24 sm:px-6 lg:px-8">
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

            <motion.h2
              variants={itemVariants}
              className="mt-3 font-display text-4xl font-light text-ink sm:text-5xl"
            >
              Creativity. Discipline. Compassion.
            </motion.h2>

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

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 font-serif">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="border-l-2 border-terracotta pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-ink">A Women-Led Organization</p>
            <div className="mt-4 space-y-5 text-[17px] leading-[1.85] text-ink font-serif ">
              <p>
                Our NGO is proudly managed entirely by women and operated exclusively by women.
                Women have immense potential to lead, create, innovate, and serve. This organization
                exists because we believe in what women can build together.
              </p>
              <p>
                We are committed to creating leadership opportunities for women while building an
                inclusive ecosystem where women drive social innovation, community development, and
                sustainable change.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Founder's Letter */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-ivory to-cream px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="mb-20 text-center">

            <p className="text-xl text-left uppercase px-2 tracking-[0.8em] text-gold">
              FROM THE
            </p>

            <h2 className="mt-4  text-left font-display text-6xl uppercase tracking-[0.45em] text-ink sm:text-7xl">
              FOUNDER
            </h2>

            <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-ink/70 font-serif">
              A personal message from our Founder sharing the vision,
              values, purpose, and inspiration behind the
              <span className="font-semibold text-terracotta font-serif">
                {" "}Qurat-Al-Ain Bashar Foundation.
              </span>
            </p>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-14"
          >

            {/* Your paragraphs start here */}

            <motion.p
              variants={fadeUp}
              className="first-letter:float-left first-letter:mr-4 first-letter:font-display first-letter:text-8xl first-letter:leading-none first-letter:text-gold font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              I'm Shifa Sultana, the founder of Qurat-Al-Ain Bashar Foundation.
              My vision for this organization wasn't driven by the idea of solving
              a problem—but rather by a belief.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="relative my-14"
            >

              <span className="absolute -left-2 -top-8 font-display text-8xl text-gold/60">
                “
              </span>

              <blockquote className="px-10 text-center font-serif font-display text-4xl italic leading-relaxed text-terracotta">

                I did not establish this organization because I saw limitations.
                <br />
                I founded it because I saw possibilities.

              </blockquote>

              <span className="absolute -right-2 bottom-0 font-display text-8xl text-gold/60">
                ”
              </span>

            </motion.div>

            {/* Foundation Story */}

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              This Foundation was born from a simple yet powerful belief:
              <span className="font-semibold text-terracotta">
                {" "}
                every individual has the ability to create positive change when talent is
                guided by purpose and compassion.
              </span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="my-10 flex justify-center"
            >
              <div className="h-px w-24 bg-gold/40"></div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              Throughout history, women have been creators, caregivers, innovators,
              athletes, artists, professionals, and community builders. Yet many continue
              to face barriers that limit their opportunities to lead, earn, and be
              recognized for their contributions.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              I wanted to create a space where women are not merely included, but where
              they stand confidently at the center of leadership, innovation, and impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border-l-4 border-gold bg-gold/5 px-8 py-8"
            >
              <p className="font-display text-3xl italic leading-relaxed text-terracotta">
                This NGO was built to become that space—
                where purpose meets possibility.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              It is a platform where women express their creativity as artists, inspire
              resilience as athletes, and dedicate themselves to humanitarian service as
              altruists.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              Here, talent is valued, leadership is encouraged, and every woman has the
              opportunity to contribute to something greater than herself.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="my-10 flex justify-center"
            >
              <div className="h-px w-24 bg-gold/40"></div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              I dreamed of creating more than an NGO. I envisioned a community where
              creativity, discipline, and compassion work together to produce lasting
              social impact.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              A place where artists inspire through their creativity, athletes empower
              through dedication, and altruists serve with selfless purpose—each
              contributing their unique strengths to improve lives and strengthen
              communities.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl bg-ink px-10 py-10"
            >
              <blockquote className="text-center font-display text-3xl italic leading-relaxed text-gold">
                "When women come together with a shared purpose,
                they create opportunities that extend far beyond
                themselves and transform entire communities."
              </blockquote>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              This foundation is proudly women-founded, women-led, and women-operated
              because I believe that when women unite with a shared vision,
              collaboration thrives, opportunities multiply, and communities flourish.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              Our mission has never been about limiting who we serve.
              Rather, it has always been about demonstrating what women can build
              when they lead with integrity, empathy, and purpose.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="my-10 flex justify-center"
            >
              <div className="h-px w-24 bg-gold/40"></div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              We also wanted to reimagine how an organization creates impact.
              Rather than relying solely on donations, we chose to build a sustainable
              model rooted in dignity, value creation, and shared responsibility.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              Through art, athleticism, education, professional expertise, and acts of
              service, our members transform their talents into meaningful work.
              A portion of that value is reinvested into our mission, creating a
              continuous cycle of opportunity, empowerment, and lasting community impact.
            </motion.p>

            {/* Closing */}

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              This organization is more than an NGO. It is a community of women who
              believe that creativity, discipline, compassion, and purpose can transform
              lives. Every initiative we undertake is rooted in the belief that
              sustainable change begins when women are empowered to lead, collaborate,
              and uplift one another.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 p-10"
            >
              <blockquote className="text-center font-display text-3xl italic leading-relaxed text-terracotta">
                Hope is not something we wait for.
                <br />
                It is something we create through our actions,
                our values, and our commitment to one another.
              </blockquote>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              My hope is that every woman who joins this journey discovers not only a
              place to contribute, but also a place to grow, to lead, and to inspire
              others.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              Together, we are proving that when women support women, the impact extends
              far beyond our organization—it strengthens families, transforms
              communities, and builds a more compassionate and equitable future.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-[20px] leading-[2.1] tracking-[0.01em] text-ink"
            >
              This is the legacy we strive to create, and I warmly invite every woman
              who shares this vision to become part of it.
            </motion.p>

            {/* Signature */}

            <motion.div
              variants={fadeUp}
              className="pt-12"
            >
              <div className="mb-8 h-px w-40 bg-gold/40"></div>

              <p className="italic text-xl text-ink">
                With purpose and hope,
              </p>

              <h3 className="mt-6 font-display text-5xl text-terracotta">
                Shifa Sultana
              </h3>

              <p className="mt-3 uppercase tracking-[0.45em] text-sm text-gold">
                Founder
              </p>
            </motion.div>

            {/* Vision / Mission / Belief */}

            <motion.div
              variants={fadeUp}
              className="mt-24 space-y-8"
            >

              {/* Vision */}

              <div className="group rounded-3xl border border-gold/25 bg-ink px-10 py-12 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_25px_70px_rgba(212,175,55,0.18)]">

                <h3 className="font-display text-5xl text-gold">
                  Our Vision
                </h3>

                <div className="mx-auto my-6 h-px w-20 bg-gold/40"></div>

                <p className="mx-auto max-w-4xl text-2xl  font-serif leading-10 text-ivory/80">
                  To build a world where creativity inspires,
                  athleticism empowers,
                  and altruism transforms lives,
                  creating self-sustaining communities led by women.
                </p>

              </div>

              {/* Mission */}

              <div className="group rounded-3xl border border-gold/25 bg-ink px-10 py-12 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_25px_70px_rgba(212,175,55,0.18)]">

                <h3 className="font-display text-5xl text-gold">
                  Our Mission
                </h3>

                <div className="mx-auto my-6 h-px w-20 bg-gold/40"></div>

                <p className="mx-auto max-w-4xl text-2xl  font-serif  leading-10 text-ivory/80">
                  To unite artists, athletes, and altruists through one collaborative
                  platform that transforms professional talent into meaningful social
                  impact while promoting women's leadership, education, health,
                  humanitarian service, and sustainable community development.
                </p>

              </div>

              {/* Belief */}

              <div className="group rounded-3xl border border-gold/25 bg-ink px-10 py-12 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_25px_70px_rgba(212,175,55,0.18)]">

                <h3 className="font-display text-5xl text-gold">
                  Our Belief
                </h3>

                <div className="mx-auto my-6 h-px w-20 bg-gold/40"></div>

                <blockquote className="mx-auto max-w-4xl font-display text-2xl  font-serif  leading-relaxed text-ivory/80">
                  "Talent is more than a gift—it is a responsibility.
                  When creativity, discipline, and compassion come together,
                  they become a force for lasting social change."
                </blockquote>

              </div>

            </motion.div>

            {/* Close containers */}

          </motion.div>
        </div>
      </section>
     
    </PageShell>
  );
}
