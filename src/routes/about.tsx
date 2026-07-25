import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Prose } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-about.jpg";
import letterImg from "@/assets/founder-letter.jpg";

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

function Pillar({ title, kicker, children }: { title: string; kicker: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
      <p className="text-xs uppercase tracking-[0.28em] text-ink">{kicker}</p>
      <h3 className="mt-3 font-display text-2xl text-ink">{title}</h3>
      <p className="mt-4 text-[15px] leading-[1.8] text-ink">{children}</p>
    </div>
  );
}

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
            Qurat-Al-Ain Bashar Foundation is purpose-driven, women-led, and women-operated NGO committed to creating lasting social impact through the combined power of Art, Athleticism, and Altruism.
          </p>
          <p>
            Our organization serves as a collaborative platform where artists, athletes, and altruists come together to inspire communities, promote positive change, and provide humanitarian and social welfare support. We believe that talent, skill, and service can become powerful tools for sustainable social transformation.
          </p>
          <p>
            The NGO that blends the transformative power of art, athleticism, and altruism to create meaningful social impact. Our organization serves as a collaborative platform where artists, athletes, altruists unite to raise awareness, inspire change, and deliver direct humanitarian and social welfare support.
          </p>
          <p>
            Through art exhibitions, sports events, volunteer-led initiatives, and community-driven projects, the organization raises awareness of pressing social issues, channels resources toward humanitarian aid, and empowers individuals to take part in positive change.
          </p>
          <p>
            By acting as a collaborative platform for artists, athletes, altruists the NGO transforms passion into purpose — inspiring communities, fostering unity, and delivering direct impact where it is needed most.
          </p>
        </Prose>
      </section>

      <section className="bg-cream/60 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink">The Three Pillars</p>
            <h2 className="mt-3 font-display text-4xl font-light text-ink sm:text-5xl">
              Creativity. Discipline. Compassion.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Pillar kicker="Creativity for Change" title="Artists">
              Artists contribute their creativity, imagination, and artistic talents to educate, inspire, and raise awareness about important social issues. Through visual arts, music, dance, theatre, storytelling, and other creative expressions, they empower communities and spark meaningful conversations.
            </Pillar>
            <Pillar kicker="Discipline for Growth" title="Athletes">
              Athletes promote the values of discipline, resilience, teamwork, leadership, and healthy living. Through sports, fitness programs, and mentorship, they inspire individuals—especially girls and women—to build confidence, develop life skills, and achieve their full potential.
            </Pillar>
            <Pillar kicker="Service with Compassion" title="Altruists">
              Altruists are the heart of our humanitarian efforts. They dedicate their time, expertise, and compassion to community service, education, healthcare, environmental initiatives, disaster relief, women empowerment, and social welfare programs that directly improve lives.
            </Pillar>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="border-l-2 border-terracotta pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-ink">A Women-Led Organization</p>
            <div className="mt-4 space-y-5 text-[17px] leading-[1.85] text-ink">
              <p>
                Our NGO is proudly managed entirely by women and operated exclusively by women. Women have immense potential to lead, create, innovate, and serve. This organization exists because we believe in what women can build together.
              </p>
              <p>
                We are committed to creating leadership opportunities for women while building an inclusive ecosystem where women drive social innovation, community development, and sustainable change.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink">Our Vision</p>
              <p className="mt-4 font-display text-xl leading-relaxed text-ink">
                To build a world where creativity inspires, athleticism empowers, and altruism transforms lives, creating self-sustaining communities led by women.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink">Our Mission</p>
              <p className="mt-4 font-display text-xl leading-relaxed text-ink">
                To unite artists, athletes, and altruists on a collaborative platform that transforms professional talent into meaningful social impact while promoting women's leadership, community development, education, health, and humanitarian service through a sustainable, donation-free model.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-ink px-8 py-12 text-center text-ivory sm:px-12 sm:py-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Belief</p>
            <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl font-light italic leading-relaxed sm:text-3xl">
              "Talent is more than a gift—it is a responsibility. When creativity, discipline, and compassion come together, they become a force for lasting social change."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder's Letter */}
      <section className="relative overflow-hidden bg-cream/70 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.3em] text-ink">From the Founder</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              A letter from Shifa Sultana
            </h2>
            <img
              src={letterImg}
              alt="Handwritten letter on cream paper"
              className="mt-8 aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-6 text-[17px] leading-[1.9] text-ink font-display font-normal">
            <p>
              I'm Shifa Sultana the founder of Qurat-Al-Ain Bashar Foundation. My vision for this organization wasn't driven by the idea of solving a problem—But rather was inspired by a belief.
            </p>
            <p className="relative rounded-lg border-l-4 border-terracotta bg-ivory/80 px-6 py-5 text-2xl italic leading-snug text-ink sm:text-3xl">
              I did not establish this organization because I saw limitations. I founded it because I saw possibilities.
            </p>
            <p>
              This Foundation was born from a simple yet powerful belief: that every individual has the ability to create positive change when talent is guided by purpose and compassion.
            </p>
            <p>That belief became the foundation of this organization.</p>
            <p>
              Throughout history, women have been creators, caregivers, innovators, athletes, artists, professionals, and community builders. Yet many continue to face barriers that limit their opportunities to lead, earn, and be recognized for their contributions. I wanted to create a space where women are not only included but are at the center of leadership, innovation, and impact.
            </p>
            <p>This NGO was built to be that space.</p>
            <p>
              It is a platform where women can express their creativity as artists, inspire discipline and resilience as athletes, and dedicate themselves to humanitarian service as altruists. Here, talent is valued, leadership is encouraged, and every woman has the opportunity to contribute to something greater than herself.
            </p>
            <p>
              I dreamed of creating more than an NGO. I wanted to build a community where creativity, discipline, and compassion come together to create lasting social impact. A place where artists inspire through their art, athletes empower through their dedication, and altruists serve with selfless purpose—each contributing their unique strengths to improve lives and strengthen communities.
            </p>
            <p>
              At the heart of this foundation is another belief that is deeply personal to me: the power of women to lead with vision, integrity, empathy, and resilience.
            </p>
            <p>
              This foundation is proudly women-founded, women-led, and women-operated because I believe that when women come together with a shared purpose, they create environments where collaboration thrives, opportunities grow, and communities flourish. This has never been about limiting who we serve—it has always been about demonstrating what women can build when they are united by a common vision. While women lead our organization, our mission is to serve society as a whole.
            </p>
            <p>
              I also wanted to reimagine how an organization creates impact. Instead of relying primarily on donations, we chose to build a model rooted in dignity, sustainability, and shared responsibility. We believe that lasting change begins by creating value. Through art, athleticism, education, professional expertise, and acts of service, our members transform their talents into meaningful work. A portion of that value is then reinvested into our mission, creating a continuous cycle of opportunity, empowerment, and community impact.
            </p>
            <p>
              This organization is more than an NGO. It is a community of women who believe that creativity, discipline, compassion, and purpose can transform lives. Every project we undertake is rooted in the belief that sustainable change begins when women are empowered to lead, collaborate, and uplift one another.
            </p>
            <p>
              To me, hope is not simply something we wish for—it is something we create through our actions, our values, and our commitment to one another.
            </p>
            <p>
              And my hope is that every woman who joins this journey discovers not only a place to contribute but also a place to grow, to lead, and to inspire others. Together, we are proving that when women support women, the impact reaches far beyond our organization—it strengthens families, transforms communities, and builds a more compassionate and equitable future.
            </p>
            <p>
              This is the legacy we strive to create, and I invite every woman who shares this vision to become a part of it.
            </p>
            <div className="border-t border-terracotta/30 pt-6">
              <p className="italic">With purpose and hope,</p>
              <p className="mt-2 font-display text-3xl text-ink">Shifa Sultana</p>
              <p className="text-sm uppercase tracking-[0.25em] text-ink">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
