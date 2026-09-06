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

      { property: "og:title", content: "Our Model — Qurat-Al-Ain Bashar Foundation" },

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

// 

function Pillar({
  eyebrow,
  title,
  image,
  reverse,
  belowImage,
  children,
}: {
  eyebrow: string;
  title: string;
  image: string;
  reverse?: boolean;
  belowImage?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-18">
      <div className="mx-auto grid max-w-7xl items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="lg:sticky lg:top-28">

            <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-[#A07A3A]">
              {eyebrow}
            </p>

            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-ink sm:text-4xl md:text-5xl">
              {title}
            </h2>

            <img
              src={image}
              alt=""
              className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg sm:mt-8"
              loading="lazy"
            />

            {/* CARD BELOW IMAGE */}
            {belowImage && (
              <div className="mt-6">
                {belowImage}
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`space-y-5 font-serif text-[15px] leading-[1.8] text-ink sm:space-y-6 sm:text-[16px] sm:leading-[1.85] [&>p+p]:mt-6 [&>ul]:my-6 [&>ul]:space-y-3 [&_blockquote]:my-8 ${reverse ? "lg:order-1" : ""
            }`}
        >
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

        image={heroImg}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Prose>
          <p>
            The Qurat-Al-Ain Bashar Foundation, we do not rely on public donations or charitable contributions.
          </p>

          <p>
            Instead, we follow a self-sustaining social enterprise model.
          </p>
          <p>
            At our foundation, we believe that lasting social change is built on purpose, collaboration, and sustainability.
            Rather than relying primarily on donations, we have created a model where talent becomes opportunity,
            opportunity creates value, and that value fuels community impact.
          </p>
          
          <p className="border-l-4 border-terracotta pl-4 font-display text-lg italic text-ink sm:pl-6 sm:text-2xl">
            Our philosophy is simple:
          </p>
          <p className="border-l-4 border-terracotta pl-4 font-display text-lg italic text-ink sm:pl-6 sm:text-2xl">
             We create value first, then use that value to create meaningful social impact.
          </p>
          <p>
            This approach empowers our members to contribute through their skills and professions while
            ensuring that our work remains sustainable and community-driven.
          </p>
        </Prose>
      </section>

      <section className="bg-cream/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">

          <div className="not-prose">
            <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.45em] text-[#A07A3A]">
              Why
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-[1.2] tracking-tight text-[#2C2118] sm:text-4xl md:text-3xl">
              We Do Not Rely Primarily on Donations
            </h2>

            <div className="mt-6 h-px w-16 bg-[#C8A062]/60" />
          </div>

          <div className="mt-10 space-y-6 text-[15px] leading-[1.8] text-ink font-serif sm:text-[16px] sm:leading-[1.85]">
            <p>
              Donations have long played an important role in supporting nonprofit organizations, and we deeply value everyone who chooses to support social causes.
            </p>
            <p>However, our foundation is built on a different philosophy.</p>
            <p>
              We believe that the most sustainable form of impact comes from creating value through meaningful work. By encouraging our members to use their talents professionally and contribute a portion of what they earn, we create a self-sustaining model that strengthens both the individual and the community.
            </p>
            <p className="pt-2">This approach allows us to:</p>
            <ul className="space-y-3 pl-1">
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
              A mutually agreed portion of their earnings is voluntarily contributed to the Foundation. These contributions fund our humanitarian projects, women's empowerment initiatives, educational programs, and community welfare activities. This creates a sustainable cycle where talent fuels social impact.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8F1E5] px-8 py-8 text-center text-ivory sm:mt-12 sm:px-8 sm:py-10 md:px-2">
            <p className="text-xs uppercase tracking-[0.2em] text-black sm:tracking-[0.3em]">Our Model</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 pxx-2 sm:mt-12 sm:gap-4 sm:px-0">
              
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A07A3A] font-semibold sm:text-[11px] sm:tracking-[0.45em]">
                Talent → Meaningful Work <span className="text-[#C8A062]">•</span> → Professional Income → {" "}
                <span className="text-[#C8A062]">•</span> Shared Purpose → Community Impact
              </p>
              
            </div>
            {/* <p className="mt-4 font-display text-lg leading-relaxed sm:text-xl md:text-2xl">
              Talent → Meaningful Work → Professional Income → Shared Purpose → Community Impact
            </p> */}
          </div>

          <div className="mt-10 space-y-6 text-[15px] leading-[1.8] text-ink font-serif sm:text-[16px] sm:leading-[1.85]">
            <p>
              This is more than a funding model.
            </p>
            <p>
              It is a philosophy of responsibility, collaboration, and sustainable change.
            </p>
            <p>
              We believe that every creative idea, every lesson taught, every training session delivered,
              every performance, every act of service, and every opportunity created has the power to improve lives.
            </p>
            <p>Because lasting change is not only funded.</p>
            {/* <p className="pt-2 font-display text-lg italic text-ink sm:text-2xl">
              "Join our mission by creating value."
            </p> */}

            <p>
              It is created.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 pxx-2 sm:mt-12 sm:gap-4 sm:px-0">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A07A3A] font-semibold sm:text-[14px] sm:tracking-[0.45em]">
                Join our mission<span className="text-[#C8A062]"> </span>by {" "}
                <span className="text-[#C8A062]"> </span> creating value
              </p>

            </div>

           
           
          </div>
        </div>
      </section>

      <div className="text-center text-2xl font-serif font-medium mt-15">
        <p className="pt-2">Here's how our Foundation achieves its mission</p>
      </div>

      {/* <Pillar eyebrow="Creativity that Inspires" title="Art" image={artImg}>
        <p>
          Artists have the unique ability to communicate emotions, ideas, and stories in ways that transcend language and cultural boundaries. Through their creativity, they can inspire hope, encourage dialogue, preserve culture, and motivate communities to take positive action.
        </p>
        <p>
          Through exhibitions, performances, workshops, design, music, theatre, literature, photography, digital media, and other creative services, artists create both cultural and economic value.
        </p>
        <p>
          At the heart of our Foundation lies the belief that creativity has the power to transform challenges into opportunities for positive change. One of the most impactful ways we bring this vision to life is through sustainable art and design initiatives led by artists and creative thinkers from diverse backgrounds.
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
            <div key={h} className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">{h}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">{b}</p>
            </div>
          ))}
        </div>

        <p>
          At our foundation, every brushstroke, every performance, every story, every photograph, every melody, and every creative idea has the potential to inspire change, strengthen communities, and build a better future.
        </p>
        <p className="border-l-4 border-terracotta pl-4 font-display text-lg italic text-ink sm:pl-5 sm:text-xl">
          We believe that when artists create with purpose, their work becomes more than art—it becomes hope in action.
        </p>
      </Pillar> */}

      <Pillar
        eyebrow="Creativity that Inspires"
        title="Art"
        image={artImg}
        belowImage={
          <div className="space-y-4">

            {/* Card 1 */}
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Empower Future Generations
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Mentoring aspiring artists, teaching creative skills, and encouraging
                young people to use art as a tool for innovation, confidence, and
                self-expression.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Preserve Culture and Identity
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Celebrating local traditions, indigenous knowledge, and diverse
                cultural expressions while encouraging creativity that reflects
                both heritage and contemporary society.
              </p>
            </div>

          </div>
        }
      >
        <p>
          Artists have the unique ability to communicate emotions, ideas, and stories
          in ways that transcend language and cultural boundaries. Through their
          creativity, they can inspire hope, encourage dialogue, preserve culture,
          and motivate communities to take positive action.
        </p>

        <p>
          Through exhibitions, performances, workshops, design, music, theatre,
          literature, photography, digital media, and other creative services,
          artists create both cultural and economic value.
        </p>

        <p>
          At the heart of our Foundation lies the belief that creativity has the power to
          transform challenges into opportunities for positive change. One of the
          most impactful ways we bring this vision to life is through sustainable art
          and design initiatives led by artists and creative thinkers from diverse
          backgrounds.
        </p>

        <p>
          We empower artists to use their talents to create meaningful social impact
          by:
        </p>

        <div className="space-y-4">
          {[
            [
              "Inspire Through Creativity",
              "Creating artworks, performances, music, films, literature, theatre, photography, and digital media that encourage empathy, awareness, and positive social change.",
            ],
            [
              "Educate Through Art",
              "Using creative expression to simplify complex social issues, promote learning, preserve cultural heritage, and inspire curiosity among people of all ages.",
            ],
            [
              "Build Communities",
              "Organizing exhibitions, workshops, cultural events, collaborative projects, and public art initiatives that bring people together and strengthen community connections.",
            ],
          
          ].map(([h, b]) => (
            <div
              key={h}
              className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
            >
              <p className="font-display text-base text-ink sm:text-lg">
                {h}
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                {b}
              </p>
            </div>
          ))}
        </div>

        
      </Pillar>
{/* 
      <p>
        At our foundation, every brushstroke, every performance, every story,
        every photograph, every melody, and every creative idea has the potential
        to inspire change, strengthen communities, and build a better future.
      </p>

      <p className="border-l-4 border-terracotta pl-4 font-display text-lg italic text-ink sm:pl-5 sm:text-xl">
        We believe that when artists create with purpose, their work becomes more
        than art—it becomes hope in action.
      </p> */}


      <div className="mt-2 space-y-8 text-center">

        <p className="mx-auto max-w-3xl font-serif text-[15px] leading-8 text-ink/80 sm:text-base sm:leading-9">
          At our foundation, every brushstroke, every performance, every story,
          every photograph, every melody, and every creative idea has the potential
          to inspire change, strengthen communities, and build a better future.
        </p>

        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-5 h-px w-12 bg-terracotta/50" />

          <p className="font-serif text-xl  leading-relaxed text-ink sm:text-2xl md:text-1xl mb-10">
            “We believe that when artists create with purpose, their work becomes
            more than art—it becomes hope in action.”
          </p>

          
        </div>

      </div>


      <div className="border-t border-border/60" />

      <Pillar eyebrow="Discipline that Empowers"
        title="Athleticism"
        image={athImg}
        reverse
        belowImage={
          <div className="space-y-4">

            {/* Card 1 */}
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Skill Development & Training
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Athletes conduct free training sessions and sports camps, teaching
                children and youth the fundamentals of various sports. Beyond
                physical skills, these sessions instill discipline, focus,
                perseverance, and teamwork—qualities that translate into life
                skills.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Inclusive Play & Participation
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                We create safe and inclusive playgrounds and activity zones where
                girls, specially-abled children, and marginalized groups can
                participate. Every initiative is designed to ensure equal
                opportunity, making sports a tool for empowerment and
                confidence-building.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Health, Fitness & Wellness Awareness
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Athletes lead wellness drives, fitness workshops, and awareness campaigns on nutrition, mental well-being,
                and healthy lifestyles. These initiatives equip communities with knowledge to make healthier life choices.
              </p>
            </div>

          </div>
        }>
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
          Athletes are more than role models—they are agents of empowerment and community transformation. At our Foundation, we bring together athletes from diverse sports backgrounds—football, basketball, athletics, martial arts, swimming, yoga, and more—who dedicate their skills and passion to serve underprivileged communities.
        </p>
        <p>Through their involvement, we achieve multiple layers of impact:</p>

        <div className="space-y-4">
          {[
            ["Mentorship & Motivation", "Through mentorship programs, athletes inspire youth to dream bigger, overcome challenges, and build self-confidence. Their stories of discipline, hard work, and perseverance serve as living examples of what is possible with dedication."],
            ["Community Engagement & Social Awareness", "Athletes actively participate in community events, awareness campaigns, and charity matches, using their visibility and influence to raise awareness for social causes, mobilize support, and inspire volunteerism."],
          ].map(([h, b]) => (
            <div key={h} className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">{h}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">{b}</p>
            </div>
          ))}
        </div>

       
      
      </Pillar>

      <div className="mt-2 mx-auto max-w-3xl text-center">

        <p className="mx-auto max-w-3xl font-serif text-[15px] leading-8 text-ink/80 sm:text-base sm:leading-9">
          By channeling their physical skills, mental resilience, and passion for service, athletes in our Foundation help transform sports into a powerful tool for social upliftment, bridging gaps, inspiring hope, and nurturing talent in communities that need it most.
        </p>
        <p className="mx-auto my-10 max-w-3xl font-serif text-[15px] leading-8 text-ink/80 sm:text-base sm:leading-9">
          At our foundation, every training session, every lesson, every competition, and every act of mentorship becomes an opportunity to inspire confidence, strengthen communities, and create lasting social impact.
        </p>

        <div>
          <div className="mx-auto mb-5 h-px w-12 bg-terracotta/50" />
          <p className="font-serif text-xl  leading-relaxed text-ink sm:text-2xl md:text-1xl mb-10">
            “We believe that when athletes lead with purpose, every victory extends
            beyond the field—it becomes a victory for society.”
          </p>
        </div>

      </div>

 
      <div className=" mt-6 border-t border-border/60" />
      <Pillar
        eyebrow="Compassion that Serves"
        title="Altruism"
        image={altImg}
        belowImage={
          <div className="space-y-4">

            {/* Card 1 */}
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Educational Support
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Scholarships, mentorship programs, and skill development
                opportunities for underprivileged youth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Community Engagement:
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Food drives, clothing distribution, medical camps, and emergency
                relief efforts that provide immediate support to communities in need.
              </p>
            </div>


            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <p className="font-display text-base text-ink sm:text-lg">
                Direct Humanitarian Support
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                Spreading kindness and awareness through
                events, campaigns, and grassroots initiatives.
              </p>
            </div>

          </div>
        }
      >
        <p>
          Altruists contribute their knowledge, experience, and compassion through
          education, mentoring, professional services, humanitarian initiatives,
          research, community development, environmental action, and social welfare
          projects.
        </p>

        <p>
          By offering their expertise, they create meaningful value while directly
          improving the lives of others.
        </p>

        <p>
          At our foundation, we believe that altruism is the heart of meaningful
          change. It is the selfless commitment to improving the lives of others
          through compassion, service, and purposeful action.
        </p>

        <p>
          Altruists come in as educators, mentors, volunteer to address the needs of
          individuals and communities. Whether through education, healthcare,
          environmental stewardship, mentorship, or humanitarian initiatives, they
          help create opportunities that empower people to thrive.
        </p>

        <ul className="space-y-3">
          <Bullet>
            <b>Serve with Compassion:</b> Supporting individuals and communities
            through humanitarian efforts, social welfare initiatives, and acts of
            service that promote dignity, inclusion, and well-being.
          </Bullet>

          <Bullet>
            <b>Share Knowledge and Expertise:</b> Professionals, educators,
            mentors, and volunteers contribute their skills and experience to
            educate, guide, and empower others, creating opportunities for lifelong
            growth and development.
          </Bullet>

          <Bullet>
            <b>Strengthen Communities:</b> By working alongside local communities,
            altruists help identify challenges, develop sustainable solutions, and
            build stronger, more resilient societies.
          </Bullet>

          <Bullet>
            <b>Champion Social Responsibility:</b> Altruists inspire individuals
            and organizations to embrace kindness, ethical leadership, civic
            responsibility, and a culture of giving back through meaningful action.
          </Bullet>

          <Bullet>
            <b>Volunteer Mobilization:</b> Bringing together changemakers—students,
            professionals, and communities—to give time and skills for impactful
            projects.
          </Bullet>

        </ul>



        {/* Closing Quote */}
        {/* <div className="mt-10 mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-[#C8A062]/60" />

          <p className="font-display text-xl font-light italic leading-relaxed text-ink sm:text-2xl md:text-3xl">
            “When compassion is transformed into action, it creates hope, empowers
            communities, and inspires lasting change.”
          </p>
        </div> */}
      </Pillar>



      <div className="mt-2 mx-auto max-w-3xl text-center">

        <p className="mx-auto max-w-3xl font-serif text-[15px] leading-8 text-ink/80 sm:text-base sm:leading-9">
          Altruism fuels every effort, ensuring that creativity and athleticism are
          always directed toward genuine human need.     </p>
        
        <p className="mx-auto mb-8  max-w-3xl font-serif text-[15px] leading-8 text-ink/80 sm:text-base sm:leading-9">
          At our foundation, every act of kindness, every lesson shared, every hour
          volunteered, and every initiative undertaken becomes an investment in a
          better future.        </p>

        <div>
          <div className="mx-auto mb-5 h-px w-12 bg-terracotta/50" />
          <p className="font-serif text-xl  leading-relaxed text-ink sm:text-2xl md:text-1xl mb-10">
            “When compassion is transformed into action, it creates hope, empowers
            communities, and inspires lasting change.”
          </p>
        </div>

      </div>
{/* 

      <div className="mt-2 mb-20 mx-auto max-w-3xl text-center">

        <p>
          Altruism fuels every effort, ensuring that creativity and athleticism are
          always directed toward genuine human need.
        </p>

        <p>
          At our foundation, every act of kindness, every lesson shared, every hour
          volunteered, and every initiative undertaken becomes an investment in a
          better future.
        </p>

        <div>

          <p className="font-display text-xl font-light italic leading-relaxed text-ink sm:text-2xl md:text-3xl">
            “When compassion is transformed into action, it creates hope, empowers
            communities, and inspires lasting change.”
          </p>

        </div>

      </div> */}

      <section className="relative overflow-hidden bg-[#F6EDDE] px-4 py-20 text-center text-black sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A07A3A] font-semibold sm:text-[15px] sm:tracking-[0.45em]  pb-10">
          Art inspires. Athleticism empowers. <span className="text-[#A07A3A]">Altruism transforms.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-black sm:text-base md:text-lg font-serif">
          Together, these three forces create a holistic ecosystem of change—one that uplifts individuals, strengthens communities, and inspires the world.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-black sm:mt-8 sm:text-base  md:text-lg  font-serif">
          We achieve our mission through our 

          <span className=" px-2 font-sans text-[10px] uppercase tracking-[0.25em] text-[#A07A3A] font-semibold sm:text-[15px] sm:tracking-[0.50em]">Bashar Art Houz</span>
          a vibrant space where creativity, learning, collaboration, and purpose come together.
        </p>
        <Link
          to="https://www.bashararthouz.com/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-xs font-medium text-black transition-colors hover:bg-gold hover:text-ink sm:mt-10 sm:px-6 sm:py-3 sm:text-sm"
        >
          Learn more about our Bashar Art Houz
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}
