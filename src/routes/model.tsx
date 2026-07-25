import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Prose } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-model.jpg";
import artImg from "@/assets/pillar-art.jpg";
import athImg from "@/assets/pillar-athleticism.jpg";
import altImg from "@/assets/pillar-altruism.jpg";

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Our Model — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "A self-sustaining social enterprise model where talent becomes opportunity, and opportunity fuels community impact.",
      },
      { property: "og:title", content: "Our Model — Qurat-Al-Ain Bashar Foundation" },
      {
        property: "og:description",
        content:
          "A self-sustaining social enterprise model where talent becomes opportunity, and opportunity fuels community impact.",
      },
      { property: "og:url", content: "/model" },
    ],
    links: [{ rel: "canonical", href: "/model" }],
  }),
  component: Model,
});

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-[1.75] text-ink">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
      <span>{children}</span>
    </li>
  );
}

function Pillar({
  index,
  eyebrow,
  title,
  image,
  reverse,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  image: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="sticky top-28">
            <p className="font-display text-[120px] font-light leading-none text-ink/20 sm:text-[160px]">
              {index}
            </p>
            <p className="-mt-4 text-xs uppercase tracking-[0.3em] text-ink">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              {title}
            </h2>
            <img
              src={image}
              alt=""
              className="mt-8 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
        <div className={`space-y-5 text-[16px] leading-[1.85] text-ink ${reverse ? "lg:order-1" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

function Model() {
  return (
    <PageShell transparentNav>
      <PageHero
        eyebrow="Our Self-Sustaining Model"
        title="Our Model"
        subtitle="We create value first, then use that value to create meaningful social impact."
        image={heroImg}
      />

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Prose>
          <p>
            The Qurat-Al-Ain Bashar Foundation, we do not rely on public donations or charitable contributions. Instead, we follow a self-sustaining social enterprise model.
          </p>
          <p>
            At our foundation, we believe that lasting social change is built on purpose, collaboration, and sustainability. Rather than relying primarily on donations, we have created a model where talent becomes opportunity, opportunity creates value, and that value fuels community impact.
          </p>
          <p className="border-l-4 border-terracotta pl-6 font-display text-2xl italic text-ink">
            Our philosophy is simple: We create value first, then use that value to create meaningful social impact.
          </p>
          <p>
            This approach empowers our members to contribute through their skills and professions while ensuring that our work remains sustainable and community-driven.
          </p>
        </Prose>
      </section>

      <section className="bg-cream/60 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-ink">Why</p>
          <h2 className="mt-3 font-display text-3xl font-light text-ink sm:text-4xl">
            Why We Do Not Rely Primarily on Donations
          </h2>

          <div className="mt-10 space-y-5 text-[16px] leading-[1.85] text-ink">
            <p>
              Donations have long played an important role in supporting nonprofit organizations, and we deeply value everyone who chooses to support social causes.
            </p>
            <p>However, our foundation is built on a different philosophy.</p>
            <p>
              We believe that the most sustainable form of impact comes from creating value through meaningful work. By encouraging our members to use their talents professionally and contribute a portion of what they earn, we create a self-sustaining model that strengthens both the individual and the community.
            </p>
            <p className="pt-2">This approach allows us to:</p>
            <ul className="space-y-2 pl-1">
              <Bullet>Build long-term sustainability.</Bullet>
              <Bullet>Encourage ownership and shared responsibility.</Bullet>
              <Bullet>Create lasting impact without depending solely on external funding.</Bullet>
              <Bullet>Build financial sustainability without depending on donations.</Bullet>
              <Bullet>Empower professionals to create social impact through their work.</Bullet>
              <Bullet>Ensure transparency and accountability in funding.</Bullet>
              <Bullet>Demonstrate that talent and purpose can become powerful forces for social change.</Bullet>
              <Bullet>Create a cycle where talent generates opportunity, and opportunity creates positive change.</Bullet>
            </ul>
            <p className="pt-4">
              Artists, athletes, and altruists collaborate with our organization by practicing and showcasing their respective talents and professions. They generate income through activities such as performances, workshops, coaching, exhibitions, training programs, consulting, creative services, and other professional engagements.
            </p>
            <p>
              A mutually agreed portion of their earnings is voluntarily contributed to the NGO. These contributions fund our humanitarian projects, women's empowerment initiatives, educational programs, and community welfare activities. This creates a sustainable cycle where talent fuels social impact.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-ink px-8 py-10 text-center text-ivory sm:px-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Model</p>
            <p className="mt-4 font-display text-xl leading-relaxed sm:text-2xl">
              Talent → Meaningful Work → Professional Income → Shared Purpose → Community Impact
            </p>
          </div>

          <div className="mt-10 space-y-5 text-[16px] leading-[1.85] text-ink">
            <p>
              This is more than a funding model. It is a philosophy of responsibility, collaboration, and sustainable change.
            </p>
            <p>
              We believe that every creative idea, every lesson taught, every training session delivered, every performance, every act of service, and every opportunity created has the power to improve lives.
            </p>
            <p>Because lasting change is not only funded. It is created.</p>
            <p className="pt-2 font-display text-2xl italic text-ink">
              "Join our mission by creating value."
            </p>
            <p className="pt-2">Here's how our NGO achieves its mission</p>
          </div>
        </div>
      </section>

      <Pillar index="01" eyebrow="Creativity that Inspires" title="Art" image={artImg}>
        <p>
          Artists have the unique ability to communicate emotions, ideas, and stories in ways that transcend language and cultural boundaries. Through their creativity, they can inspire hope, encourage dialogue, preserve culture, and motivate communities to take positive action.
        </p>
        <p>
          Through exhibitions, performances, workshops, design, music, theatre, literature, photography, digital media, and other creative services, artists create both cultural and economic value.
        </p>
        <p>
          At the heart of our NGO lies the belief that creativity has the power to transform challenges into opportunities for positive change. One of the most impactful ways we bring this vision to life is through sustainable art and design initiatives led by artists and creative thinkers from diverse backgrounds.
        </p>
        <p>We empower artists to use their talents to create meaningful social impact by:</p>

        <div className="space-y-4">
          {[
            ["Inspire Through Creativity", "Creating artworks, performances, music, films, literature, theatre, photography, and digital media that encourage empathy, awareness, and positive social change."],
            ["Educate Through Art", "Using creative expression to simplify complex social issues, promote learning, preserve cultural heritage, and inspire curiosity among people of all ages."],
            ["Build Communities", "Organizing exhibitions, workshops, cultural events, collaborative projects, and public art initiatives that bring people together and strengthen community connections."],
            ["Empower Future Generations", "Mentoring aspiring artists, teaching creative skills, and encouraging young people to use art as a tool for innovation, confidence, and self-expression."],
            ["Preserve Culture and Identity", "Celebrating local traditions, indigenous knowledge, and diverse cultural expressions while encouraging creativity that reflects both heritage and contemporary society."],
          ].map(([h, b]) => (
            <div key={h} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-display text-lg text-ink">{h}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{b}</p>
            </div>
          ))}
        </div>

        <p>
          At our foundation, every brushstroke, every performance, every story, every photograph, every melody, and every creative idea has the potential to inspire change, strengthen communities, and build a better future.
        </p>
        <p className="border-l-4 border-terracotta pl-5 font-display text-xl italic text-ink">
          We believe that when artists create with purpose, their work becomes more than art—it becomes hope in action.
        </p>
      </Pillar>

      <div className="border-t border-border/60" />

      <Pillar index="02" eyebrow="Discipline that Empowers" title="Athleticism" image={athImg} reverse>
        <p>
          Athletes inspire through discipline, perseverance, teamwork, leadership and channel their discipline, resilience, and influence into programs that empower communities.
        </p>
        <p>
          At our foundation, we believe that athletics is more than physical performance—it is a powerful platform for building character, confidence, and community.
        </p>
        <p>
          Athletes inspire others not only through their achievements but through the values they represent: discipline, perseverance, teamwork, resilience, integrity, and respect. These qualities have the power to transform lives far beyond the playing field.
        </p>
        <p>
          They contribute by conducting coaching sessions, sports training, fitness programs, motivational talks, community events, mentorship, and wellness initiatives.
        </p>

        <ul className="space-y-3">
          <Bullet><b>Sports for Empowerment:</b> Organizing workshops, training camps, and fitness drives for children and youth, fostering teamwork, confidence, and leadership.</Bullet>
          <Bullet><b>Role Model Influence:</b> Athletes use their voice and recognition to raise awareness and mobilize support for social causes.</Bullet>
          <Bullet><b>Build Stronger Communities:</b> Sports have the unique ability to bring people together regardless of age, culture, or background. Through community events, tournaments, and outreach programs, athletes foster unity, inclusion, and teamwork.</Bullet>
        </ul>

        <p>
          By uniting passion for sports with community service, athleticism becomes a vehicle for inspiration, discipline, and opportunity.
        </p>
        <p>
          Athletes are more than role models—they are agents of empowerment and community transformation. At our NGO, we bring together athletes from diverse sports backgrounds—football, basketball, athletics, martial arts, swimming, yoga, and more—who dedicate their skills and passion to serve underprivileged communities.
        </p>
        <p>Through their involvement, we achieve multiple layers of impact:</p>

        <div className="space-y-4">
          {[
            ["Skill Development & Training", "Athletes conduct free training sessions and sports camps, teaching children and youth the fundamentals of various sports. Beyond physical skills, these sessions instill discipline, focus, perseverance, and teamwork—qualities that translate into life skills."],
            ["Inclusive Play & Participation", "We create safe and inclusive playgrounds and activity zones where girls, specially-abled children, and marginalized groups can participate. Every initiative is designed to ensure equal opportunity, making sports a tool for empowerment and confidence-building."],
            ["Health, Fitness & Wellness Awareness", "Athletes lead wellness drives, fitness workshops, and awareness campaigns on nutrition, mental well-being, and healthy lifestyles. These initiatives equip communities with knowledge to make healthier life choices."],
            ["Mentorship & Motivation", "Through mentorship programs, athletes inspire youth to dream bigger, overcome challenges, and build self-confidence. Their stories of discipline, hard work, and perseverance serve as living examples of what is possible with dedication."],
            ["Community Engagement & Social Awareness", "Athletes actively participate in community events, awareness campaigns, and charity matches, using their visibility and influence to raise awareness for social causes, mobilize support, and inspire volunteerism."],
          ].map(([h, b]) => (
            <div key={h} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-display text-lg text-ink">{h}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{b}</p>
            </div>
          ))}
        </div>

        <p>
          By channeling their physical skills, mental resilience, and passion for service, athletes in our NGO help transform sports into a powerful tool for social upliftment, bridging gaps, inspiring hope, and nurturing talent in communities that need it most.
        </p>
        <p>
          At our foundation, every training session, every lesson, every competition, and every act of mentorship becomes an opportunity to inspire confidence, strengthen communities, and create lasting social impact.
        </p>
        <p className="border-l-4 border-terracotta pl-5 font-display text-xl italic text-ink">
          We believe that when athletes lead with purpose, every victory extends beyond the field—it becomes a victory for society.
        </p>
      </Pillar>

      <div className="border-t border-border/60" />

      <Pillar index="03" eyebrow="Compassion that Serves" title="Altruism" image={altImg}>
        <p>
          Altruists contribute their knowledge, experience, and compassion through education, mentoring, professional services, humanitarian initiatives, research, community development, environmental action, and social welfare projects.
        </p>
        <p>
          By offering their expertise, they create meaningful value while directly improving the lives of others.
        </p>
        <p>
          At our foundation, we believe that altruism is the heart of meaningful change. It is the selfless commitment to improving the lives of others through compassion, service, and purposeful action.
        </p>
        <p>
          Altruists come in as educators, mentors, volunteer to address the needs of individuals and communities. Whether through education, healthcare, environmental stewardship, mentorship, or humanitarian initiatives, they help create opportunities that empower people to thrive.
        </p>

        <ul className="space-y-3">
          <Bullet><b>Serve with Compassion:</b> Supporting individuals and communities through humanitarian efforts, social welfare initiatives, and acts of service that promote dignity, inclusion, and well-being.</Bullet>
          <Bullet><b>Share Knowledge and Expertise:</b> Professionals, educators, mentors, and volunteers contribute their skills and experience to educate, guide, and empower others, creating opportunities for lifelong growth and development.</Bullet>
          <Bullet><b>Educational Support:</b> Scholarships, mentorship programs, and skill development for underprivileged youth.</Bullet>
          <Bullet><b>Strengthen Communities:</b> By working alongside local communities, altruists help identify challenges, develop sustainable solutions, and build stronger, more resilient societies.</Bullet>
          <Bullet><b>Direct Humanitarian Support:</b> Food drives, clothing distribution, medical camps, and emergency relief efforts.</Bullet>
          <Bullet><b>Champion Social Responsibility:</b> Altruists inspire individuals and organizations to embrace kindness, ethical leadership, civic responsibility, and a culture of giving back through meaningful action.</Bullet>
          <Bullet><b>Volunteer Mobilization:</b> Bringing together changemakers—students, professionals, and communities—to give time and skills for impactful projects.</Bullet>
          <Bullet><b>Community Engagement:</b> Spreading kindness and awareness through events, campaigns, and grassroots initiatives.</Bullet>
        </ul>

        <p>
          Altruism fuels every effort, ensuring that creativity and athleticism are always directed toward genuine human need.
        </p>
        <p>
          At our foundation, every act of kindness, every lesson shared, every hour volunteered, and every initiative undertaken becomes an investment in a better future.
        </p>
        <p className="border-l-4 border-terracotta pl-5 font-display text-xl italic text-ink">
          We believe that when compassion is transformed into action, it creates hope, empowers communities, and inspires lasting change.
        </p>
      </Pillar>

      <section className="relative overflow-hidden bg-ink px-4 py-24 text-center text-ivory sm:px-6 sm:py-28 lg:px-8">
        <h2 className="font-display text-3xl font-light leading-tight sm:text-5xl">
          Art inspires. Athleticism empowers. <span className="text-gold">Altruism transforms.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          Together, these three forces create a holistic ecosystem of change—one that uplifts individuals, strengthens communities, and inspires the world.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ivory/85">
          We achieve our mission through our Bashar Art Houz a vibrant space where creativity, learning, collaboration, and purpose come together.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-gold hover:text-ink"
        >
          Learn more about our Art Houz
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}
