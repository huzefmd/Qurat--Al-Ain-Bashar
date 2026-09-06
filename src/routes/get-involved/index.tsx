import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Palette,
  Dumbbell,
  HandHeart,
  GraduationCap,
  Sparkles,
  Users,
  Compass,
  Handshake,
  User,
  ChevronDown,
  ChevronUp,
  Crown,
  Network,
  Star,
} from "lucide-react";
import { useState } from "react";
import { PageHero, Prose } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-involved.jpg";

/* -------------------------------------------------------------------------- */
/*                                  ROUTE                                     */
/* -------------------------------------------------------------------------- */

export const Route = createFileRoute("/get-involved/")({
  head: () => ({
    meta: [
      {
        title: "Get Involved — Qurat-Al-Ain Bashar Foundation",
      },
      {
        name: "description",
        content:
          "Join as an artist, athlete, altruist, educator, mentor, volunteer, creative thinker, or partner.",
      },
      {
        property: "og:title",
        content: "Get Involved — Qurat-Al-Ain Bashar Foundation",
      },
      {
        property: "og:description",
        content:
          "Join as an artist, athlete, altruist, educator, mentor, volunteer, creative thinker, or partner.",
      },
      {
        property: "og:url",
        content: "/get-involved",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/get-involved",
      },
    ],
  }),

  component: GetInvolved,
});

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const primaryRoles = [
  {
    label: "Artist",
    Icon: Palette,
    to: "/get-involved/artist",
    blurb: "Inspire through creativity, art, and performance.",
  },
  {
    label: "Athlete",
    Icon: Dumbbell,
    to: "/get-involved/athlete",
    blurb: "Lead through discipline, sport, and empowerment.",
  },
  {
    label: "Altruist",
    Icon: HandHeart,
    to: "/get-involved/altruist",
    blurb: "Serve with expertise, mentorship, and compassion.",
  },
];

const otherRoles = [
  {
    label: "Educator",
    Icon: GraduationCap,
  },
  {
    label: "Creative Thinker",
    Icon: Sparkles,
  },
  {
    label: "Volunteer",
    Icon: Users,
  },
  {
    label: "Mentor",
    Icon: Compass,
  },
  {
    label: "Partner",
    Icon: Handshake,
  },
];

/* -------------------------------------------------------------------------- */
/*                           FOUNDING COUNCIL DATA                             */
/* -------------------------------------------------------------------------- */

const councilMembers = [
  {
    name: "Ar. Aamina Muqaddus",
    role: "Artist \n Founding Member",
    gender: "female" as const,
    description:
      "Ar. Aamina Muqaddus is an architect and artist whose work reflects the beautiful intersection of space, form, imagination, and artistic expression. As an artist within the foundation, Aamina Muqaddus brings her architectural perspective into the creative community, contributing ideas, artistic expression, and design thinking to projects that connect creativity with purpose.",
  },

  {
    name: "Huda Fathima",
    role: "Athlete \n Founding Member",
    gender: "female" as const,
    description:
      "Huda Fathima is an athlete whose journey through swimming and marathon running reflects the power of discipline, endurance and perseverance.As an athlete within the foundation, Huda Fathima represents the spirit of resilience, commitment and healthy living.Through her passion for sport, she inspires others to discover their own strength, develop discipline and approach challenges with confidence.",
  },
  {
    name: "Shabana Begum",
    role: "Altruist \n Founding Member",
    gender: "female" as const,
    description:
      "Shabana Begum is an educator whose journey is rooted in knowledge, compassion and a deep sense of responsibility towards others.As an altruist, Shabana Begum brings a spirit of selfless service, empathy and kindness to the foundation.She believes that knowledge becomes truly meaningful when it is shared and used to make a positive difference in the lives of others.",
  },

  {
    name: "Aisha Begum",
    role: "Founding Member",
    gender: "female" as const,
    description:
      "Aisha Begum is a Founding Member of the foundation and part of the early collective that helped bring its vision to life. As a founding member, Aisha begum stands alongside the foundation’s founding team in building a community where people can share their talents, ideas and abilities for meaningful social impact.",
  },
  {
    name: "Sabiha Sultana",
    role: "Founding Member",
    gender: "female" as const,
    description:
      "Sabiha Sultana is a Founding Member of the foundation and a strong believer in the limitless potential of women. As a founding member, Sabiha Sultana brings this belief into the foundation’s journey, supporting a vision where women are encouraged to dream boldly, rise with confidence and shine through their own unique talents and contributions.",
  },
  {
    name: "Sameena Sultana",
    role: "Founding Member",
    gender: "female" as const,
    description:
      "Saameena Sultana is a Founding Member of the foundation, bringing together leadership, experience and a deep belief in the transformative power of education. As a founding member, Sameena Sultana brings her perspective as an educator and leader to the foundation’s vision, supporting an environment where knowledge, creativity and purpose come together to inspire positive change.",
  },
];

const communityMembers = [
  {
    name: "Mohammed Fakhruddin ", role: "Artleteist", gender: "male" as const, description: "Over the years, I have dedicated myself to honing a diverse set of passions—blending the roles of an artist, athlete, and altruist. These experiences have shaped who I am and inspired the creation of this space.As an artist, I value creativity, expression, and the beauty of ideas.My athletic background has taught me discipline, resilience, and a commitment to continuous growth.And as an altruist, I believe in giving back, fostering community, and making a positive impact on those around me." },
  { name: "", role: "Athlete", gender: "male" as const, description: "A professional sprinter dedicated to promoting youth sports." },
  { name: "", role: "Altruist", gender: "female" as const, description: "Community organizer focused on urban literacy programs." },
  { name: "", role: "Creative Thinker", gender: "male" as const, description: "Strategist bridging the gap between tech and social impact." },
  { name: "", role: "Educator", gender: "female" as const, description: "Passionate about inclusive pedagogy and early childhood education." },
  { name: "", role: "Mentor", gender: "male" as const, description: "Guiding young entrepreneurs in the social enterprise space." },
  { name: "", role: "Volunteer", gender: "female" as const, description: "Leading grassroots efforts for environmental sustainability." },
  { name: "", role: "Artist", gender: "female" as const, description: "Digital artist focused on social justice narratives." },
  { name: "", role: "Athlete", gender: "male" as const, description: "Martial arts expert advocating for mental discipline." },
  { name: "", role: "Altruist", gender: "female" as const, description: "Healthcare professional volunteering in rural clinics." },
  { name: "", role: "Partner", gender: "male" as const, description: "Corporate lead fostering CSR initiatives for local NGOs." },
  { name: "", role: "Creative Thinker", gender: "female" as const, description: "Designer creating accessible tools for disabled artists." },
];


/* -------------------------------------------------------------------------- */
/*                         COUNCIL MEMBER CARD                                */
/* -------------------------------------------------------------------------- */

function CouncilMemberCard({
  name,
  role,
  gender,
  description,
  isRoot = false,
}: {
  name: string;
  role: string;
  gender: "male" | "female";
  description?: string;
  isRoot?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => description && setIsExpanded((value) => !value)}
      className={`
        group relative flex w-full flex-col items-center
        rounded-[2rem] border text-center
        transition-all duration-500 ease-out
        ${isRoot
          ? `
              max-w-sm
              border-terracotta/40
              bg-gradient-to-b from-card to-cream/20
              px-8 py-10
              shadow-[0_20px_50px_-12px_rgba(120,70,45,0.3)]
              ring-1 ring-terracotta/20
              hover:-translate-y-2
              hover:shadow-[0_30px_60px_-12px_rgba(120,70,45,0.4)]
            `
          : `
              max-w-[280px]
              cursor-pointer
              border-border/40
              bg-card/80 backdrop-blur-sm
              px-7 py-8
              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]
              hover:-translate-y-2
              hover:border-terracotta/40
              hover:shadow-[0_20px_40px_-15px_rgba(120,70,45,0.2)]
            `
        }
      `}
    >
      {/* Glow effect on hover */}
      <div className={`
        absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500
        group-hover:opacity-100 pointer-events-none
        ${isRoot ? 'bg-gradient-to-tr from-terracotta/20 via-transparent to-terracotta/20' : 'bg-gradient-to-tr from-terracotta/10 via-transparent to-terracotta/10'}
      `} />

      {/* Decorative corner */}
      <div
        className={`
          pointer-events-none absolute right-4 top-4 h-8 w-8
          rounded-tr-2xl border-r border-t
          ${isRoot
            ? "border-terracotta/40"
            : "border-terracotta/20 group-hover:border-terracotta/40"
          }
        `}
      />

      <div
        className={`
          pointer-events-none absolute bottom-4 left-4 h-8 w-8
          rounded-bl-2xl border-b border-l
          ${isRoot
            ? "border-terracotta/40"
            : "border-terracotta/20 group-hover:border-terracotta/40"
          }
        `}
      />

      {/* Profile circle */}
      <div
        className={`
          relative mb-6 grid place-items-center rounded-full
          transition-all duration-500
          ${isRoot
            ? "h-28 w-28 bg-terracotta text-ivory shadow-xl shadow-terracotta/30 ring-8 ring-terracotta/10 group-hover:scale-105 group-hover:ring-terracotta/20"
            : gender === "female"
              ? "h-20 w-20 bg-pink-50 text-pink-600 ring-4 ring-pink-100 group-hover:scale-110 group-hover:ring-pink-200"
              : "h-20 w-20 bg-blue-50 text-blue-600 ring-4 ring-blue-100 group-hover:scale-110 group-hover:ring-blue-200"
          }
        `}
      >
        {isRoot ? (
          <User className="h-12 w-12" strokeWidth={1.5} />
        ) : (
          <User className="h-9 w-9" strokeWidth={1.6} />
        )}

        {description && !isRoot && (
          <div
            className={`
              absolute -bottom-1 -right-1
              grid h-6 w-6 place-items-center
              rounded-full border-2 border-card
              bg-terracotta text-ivory
              shadow-sm
              transition-transform duration-300
              ${isExpanded ? "rotate-180" : ""}
            `}
          >
            {isExpanded ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </div>
        )}
      </div>

      {/* Name */}
      <p
        className={`
          font-display leading-tight text-ink
          transition-colors duration-300
          group-hover:text-terracotta
          ${isRoot
            ? "text-2xl font-bold sm:text-3xl tracking-tight"
            : "text-lg font-semibold sm:text-xl tracking-tight"
          }
        `}
      >
        {name}
      </p>

      {/* Role */}
      <div className="mt-3 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="h-px w-4 bg-terracotta/30" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50 group-hover:text-ink/70 transition-colors whitespace-pre-line leading-relaxed">
            {role}
          </p>
          <span className="h-px w-4 bg-terracotta/30" />
          
        </div>
      </div>

      {/* Expand hint */}
      {description && !isRoot && (
        <p
          className={`
            mt-5 text-[9px] font-semibold uppercase tracking-[0.25em]
            transition-all duration-300
            ${isExpanded ? "opacity-0 translate-y-2" : "text-terracotta/60 opacity-100"}
          `}
        >
          Learn More 
        </p>
      )}

      {/* Description */}
      {description && (
        <div
          className={`
            grid w-full transition-all duration-500 ease-in-out 
            ${isExpanded
              ? "mt-6 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div className="border-t border-terracotta/10 pt-4">
              <p className="text-sm leading-relaxed text-ink/70  font-serif">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         TREE CONNECTOR                                     */
/* -------------------------------------------------------------------------- */

function TreeConnector() {
  return (
    <div className="relative mx-auto hidden h-20 w-full max-w-5xl md:block">
      {/* Main vertical trunk */}
      <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-terracotta/50 to-terracotta/30" />

      {/* Horizontal branch */}
      <div className="absolute left-[16.666%] right-[16.666%] top-10 h-px bg-terracotta/30" />

      {/* Vertical branches */}
      <div className="absolute left-[16.666%] top-10 h-10 w-px bg-terracotta/30" />
      <div className="absolute left-1/2 top-10 h-10 w-px -translate-x-1/2 bg-terracotta/30" />
      <div className="absolute right-[16.666%] top-10 h-10 w-px bg-terracotta/30" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         SECOND TREE CONNECTOR                               */
/* -------------------------------------------------------------------------- */

function LowerTreeConnector() {
  return (
    <div className="relative mx-auto hidden h-20 w-full max-w-5xl md:block">
      {/* Center trunk */}
      <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-terracotta/30" />

      {/* Horizontal branch */}
      <div className="absolute left-[16.666%] right-[16.666%] top-10 h-px bg-terracotta/25" />

      {/* Branches */}
      <div className="absolute left-[16.666%] top-10 h-10 w-px bg-terracotta/25" />
      <div className="absolute left-1/2 top-10 h-10 w-px -translate-x-1/2 bg-terracotta/25" />
      <div className="absolute right-[16.666%] top-10 h-10 w-px bg-terracotta/25" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN PAGE                                     */
/* -------------------------------------------------------------------------- */

function GetInvolved() {
  const firstLevel = councilMembers.slice(0, 3);
  const secondLevel = councilMembers.slice(3, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <PageHero
        eyebrow="Join the movement"
        title="Get Involved"
        image={heroImg}
      />

      {/* ------------------------------------------------------------------ */}
      {/* INTRODUCTION                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Prose>
          <p>
            Our Foundation was established to empower people, support those in need,
            and build stronger, more resilient communities. We work alongside
            volunteers, partners, donors, and community members who share a
            common vision of a more compassionate and equitable world.
          </p>

          <p>
            Every project we undertake is driven by our commitment to
            integrity, transparency, and sustainable impact. Whether through
            education, healthcare, community development, or social support
            initiatives, our goal is to create opportunities that transform
            lives and inspire hope.
          </p>

          <p>
            I invite you to join us on this journey. Together, we can make a
            lasting difference and create a brighter future for generations to
            come.
          </p>
        </Prose>

        {/* ---------------------------------------------------------------- */}
        {/* FOUNDING MEMBERS COUNCIL                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="relative mt-24 overflow-hidden rounded-[2.5rem] border border-terracotta/10 bg-gradient-to-b from-cream/40 via-background to-background px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-terracotta/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#C8A062]/10 blur-3xl" />

          {/* Heading */}
          <div className="relative z-10 mb-14 text-center sm:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-terracotta/30 sm:w-16" />

              <Network className="h-5 w-5 text-terracotta" />

              <span className="h-px w-10 bg-terracotta/30 sm:w-16" />
            </div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-terracotta">
              Leadership • Vision • Service
            </p>

            <h2 className="font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
              Founding Members Council
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
              The people whose vision, commitment, and service helped shape the
              foundation and its journey forward.
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* TREE STRUCTURE                                                   */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* ROOT / FOUNDER */}
            <div className="flex flex-col items-center">
              <CouncilMemberCard
                name="Shifa Sultana"
                gender="female"
                role="Founder"
                isRoot
                description={`Shifa Sultana is an educator, Zoologist, creative thinker and founder with academic backgrounds in Science and Education, holding a B.Sc., M.Sc. and B.Ed., Shifa believes that education extends far beyond classrooms and textbooks.\\n\\nThrough her creative work and initiatives, Shifa Sultana brings together her different passions—education, artistry, design and social purpose—creating spaces where people can learn, create, participate and contribute.`}
              />

              {/* Mobile connector */}
              <div className="h-10 w-px bg-terracotta/30 md:hidden" />

              {/* Desktop tree connector */}
              <TreeConnector />
            </div>

            {/* FIRST LEVEL */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              {firstLevel.map((member) => (
                <div
                  key={member.name}
                  className="relative flex w-full justify-center"
                >
                  {/* Mobile connector */}
                  <div className="absolute -top-8 h-8 w-px bg-terracotta/25 sm:hidden" />

                  <CouncilMemberCard
                    name={member.name}
                    role={member.role}
                    gender={member.gender}
                    description={member.description}
                  />
                </div>
              ))}
            </div>

            {/* LEVEL 1 → LEVEL 2 */}
            <div className="flex flex-col items-center">
              {/* Mobile */}
              <div className="my-8 h-10 w-px bg-terracotta/25 sm:hidden" />

              {/* Desktop */}
              <LowerTreeConnector />
            </div>

            {/* SECOND LEVEL */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              {secondLevel.map((member) => (
                <div
                  key={member.name}
                  className="relative flex w-full justify-center"
                >
                  <CouncilMemberCard
                    name={member.name}
                    role={member.role}
                    gender={member.gender}
                    description={member.description}
                  />
                </div>
              ))}
            </div>

            {/* Community Members Section */}
            <div className="mt-32 text-center">
              <div className="mb-12 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-terracotta/30 sm:w-16" />
                  <Users className="h-5 w-5 text-terracotta" />
                  <span className="h-px w-10 bg-terracotta/30 sm:w-16" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-terracotta">
                  Our Growing Circle
                </p>
                <h3 className="font-display text-3xl text-ink sm:text-4xl">
                  Community Members
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
                  The passionate individuals who bring their unique skills and heart to the foundation's mission.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {communityMembers.map((member) => (
                  <div key={member.name} className="flex justify-center">
                    <CouncilMemberCard
                      name={member.name}
                      role={member.role}
                      gender={member.gender}
                      description={member.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* JOIN AS                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-cream/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xl uppercase tracking-[0.2em] text-terracotta sm:tracking-[0.3em]">
              Join as
            </p>

            <div className="mx-auto mt-4 h-px w-12 bg-[#C8A062]/60" />
          </div>

          {/* Primary Roles */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {primaryRoles.map(({ label, Icon, to, blurb }) => (
              <Link
                key={label}
                to={to}
                className="
                  group relative flex flex-col items-center
                  overflow-hidden rounded-2xl
                  border border-terracotta/30
                  bg-card p-6 text-center
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-terracotta
                  hover:shadow-lg
                  sm:p-8
                "
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-terracotta/5 blur-2xl transition-all group-hover:bg-terracotta/10" />

                {/* Icon */}
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-terracotta text-ivory transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Title */}
                <p className="relative mt-4 font-display text-xl text-ink sm:mt-5 sm:text-2xl">
                  {label}
                </p>

                {/* Description */}
                <p className="relative mt-2 text-xs text-ink/70 sm:text-sm">
                  {blurb}
                </p>

                {/* Apply */}
                <span className="relative mt-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta sm:tracking-[0.3em]">
                  Apply

                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 sm:mt-16">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-ink/60 sm:tracking-[0.3em]">
              Or contribute as
            </p>

            <div className="mx-auto mt-5 h-px w-12 bg-[#C8A062]/60" />
          </div>

          {/* Other Roles */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {otherRoles.map(({ label, Icon }) => (
              <div
                key={label}
                className="
                  group relative overflow-hidden
                  rounded-2xl border border-border/60
                  bg-card p-4 text-center
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-terracotta
                  hover:shadow-md
                  sm:p-6
                "
              >
                <div
                  className="
                    mx-auto grid h-11 w-11 place-items-center
                    rounded-full bg-terracotta/10 text-terracotta
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:bg-terracotta
                    group-hover:text-ivory
                    sm:h-12 sm:w-12
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-3 font-display text-base text-ink sm:mt-4 sm:text-lg">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact / Apply Button */}
          <div className="mt-12 text-center sm:mt-14">
            <Link
              to="/get-involved/apply"
              className="
                group inline-flex items-center gap-2
                rounded-full
                border border-terracotta/40
                bg-transparent
                px-6 py-3
                text-xs font-medium uppercase
                tracking-[0.2em]
                text-terracotta
                transition-all duration-300
                hover:bg-terracotta
                hover:text-ivory
                sm:px-8 sm:py-3.5 sm:text-sm
              "
            >
              Apply

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
