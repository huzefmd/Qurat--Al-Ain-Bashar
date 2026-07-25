import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Prose } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-leadership.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Women's Leadership — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "Women-Led. Women-Driven. Women-Empowered. Built by women, led by women, serving humanity.",
      },
      { property: "og:title", content: "Women's Leadership — Qurat-Al-Ain Bashar Foundation" },
      {
        property: "og:description",
        content:
          "Women-Led. Women-Driven. Women-Empowered. Built by women, led by women, serving humanity.",
      },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: Leadership,
});

function Leadership() {
  return (
    <PageShell transparentNav>
      <PageHero
        eyebrow="Women-Led. Women-Driven. Women-Empowered."
        title="Women's Leadership"
        image={heroImg}
      />

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Prose>
          <p>
            As a women-founded organization, we intentionally created a space where women can lead with confidence, contribute their talents, and build meaningful careers while making a positive impact on society. Every aspect of our organization—from leadership and decision-making to planning, execution, and community engagement—is managed and operated entirely by women.
          </p>
          <p>
            This is more than an organizational structure; it is our commitment to creating opportunities where women are trusted as leaders, innovators, artists, athletes, mentors, and changemakers.
          </p>
          <p>
            We recognize that many talented women face barriers to leadership, financial independence, and professional growth. Our organization exists to help break those barriers by providing a collaborative platform where women can develop their skills, earn through their work, support one another, and collectively create sustainable social impact.
          </p>
          <p>
            By empowering women to lead today, we inspire the next generation of girls to believe that they too can create, lead, and transform their communities.
          </p>
          <p>
            Our vision is not to exclude others, but to intentionally cultivate a space where women can thrive, support one another, and demonstrate the extraordinary impact of women-led leadership.
          </p>
          <p>
            We are women-led organization by belief, not by circumstance. We didn't create this organization because women needed a space. We created it because we believe women can create an extraordinary space—one that leads with purpose, empowers through action, and serves society as a whole.
          </p>
        </Prose>
      </section>

      <section className="bg-terracotta px-4 py-16 text-center text-ivory sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-2xl font-light italic leading-relaxed sm:text-3xl">
            When women rise, families grow stronger. Communities become more resilient. Society moves forward.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ivory/85">
            Women-led, women-managed, and primarily operated by women.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-ink">Why We Chose</p>
          <h2 className="mt-3 font-display text-3xl font-light text-ink sm:text-4xl">
            Why We Chose to Build This Organization for Women
          </h2>
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              When I envisioned this organization, my goal was never to create a space that excluded others. My goal was to create a space that intentionally included women.
            </p>
            <p>
              Women have always been at the heart of families, communities, and society. They nurture, create, educate, heal, lead, and inspire. Yet despite their immense contributions, many women continue to encounter barriers to economic independence, leadership opportunities, professional recognition, and access to supportive networks.
            </p>
            <p>
              I wanted to build an organization that responds to these challenges—not with sympathy, but with opportunity.
            </p>
            <p>
              We bring together women from diverse backgrounds—artists, athletes, educators, professionals, entrepreneurs, social workers, and volunteers—because we believe every woman has a unique talent that can become a force for positive change.
            </p>
            <p>
              Our vision extends far beyond today's projects. We hope to inspire future generations of girls to grow up believing that leadership is not determined by gender, that creativity can become a career, that compassion can build communities, and that women have the power to shape a more equitable and sustainable future.
            </p>
            <p>
              This organization stands as a testament to what becomes possible when women are trusted, supported, and given the space to lead with purpose.
            </p>
            <p>
              By creating a women-led and women-operated platform, we are cultivating a culture of collaboration, creativity, accountability, and service. Every decision, every initiative, and every project reflects the values we strive to uphold: empathy, excellence, integrity, resilience, and community.
            </p>
            <p>
              Our focus is not on limiting participation to women because others cannot contribute. Rather, it is on intentionally creating an environment where women can lead, innovate, mentor, and build something that reflects their collective strengths and vision.
            </p>
            <p>
              While women are at the heart of our leadership and operations, the impact of our work is for everyone. Every program we design, every initiative we undertake, and every life we touch is driven by a simple belief:
            </p>
            <p className="border-l-4 border-terracotta pl-6 font-display text-2xl italic text-ink">
              When women lead with purpose, entire communities flourish.
            </p>
            <p>
              Our mission is not to separate ourselves from society but to contribute to it through the unique strengths, perspectives, and leadership of women. We are building a space where women can create opportunities, support one another, and transform their talents into lasting social impact.
            </p>
            <p>This is not simply an organization managed by women.</p>
            <p>
              It is an organization inspired by what women can achieve together—and dedicated to creating a better future for all.
            </p>
          </Prose>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-24 text-center text-ivory sm:px-6 sm:py-32 lg:px-8">
        <h2 className="font-display text-4xl font-light leading-[1.1] text-ivory text-balance sm:text-6xl lg:text-7xl">
          Built by Women. <br className="hidden sm:block" />
          Led by Women. <br className="hidden sm:block" />
          <span className="text-gold">Serving Humanity.</span>
        </h2>
      </section>
    </PageShell>
  );
}
