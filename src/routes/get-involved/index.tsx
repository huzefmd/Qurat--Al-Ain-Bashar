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
    role: "Founding Member",
    gender: "male" as const,
    description:
      "Sarah brings 15 years of experience in NGO management and strategic planning, focusing on sustainable community development.",
  },
  {
    name: "Shabana Begum",
    role: "Founding Member",
    gender: "female" as const,
    description:
      "Omar specializes in educational initiatives and has successfully launched multiple literacy programs across rural areas.",
  },
  {
    name: "Huda Fathima",
    role: "Founding Member",
    gender: "female" as const,
    description:
      "Leila is an award-winning artist dedicated to using visual storytelling to raise awareness for social justice.",
  },
  {
    name: "Aisha Begum",
    role: "Founding Member",
    gender: "male" as const,
    description:
      "Zayn bridges the gap between the foundation and local communities, ensuring that aid reaches those who need it most.",
  },
  {
    name: "Sabiha Sultana",
    role: "Founding Member",
    gender: "male" as const,
    description:
      "Zayn bridges the gap between the foundation and local communities, ensuring that aid reaches those who need it most.",
  },
  {
    name: "Sameena Sultana",
    role: "Founding Member",
    gender: "male" as const,
    description:
      "Zayn bridges the gap between the foundation and local communities, ensuring that aid reaches those who need it most.",
  },
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
        rounded-3xl border text-center
        transition-all duration-500 ease-out
        ${isRoot
          ? `
              max-w-sm
              border-terracotta/50
              bg-card
              px-7 py-8
              shadow-[0_20px_60px_-20px_rgba(120,70,45,0.28)]
              ring-1 ring-terracotta/10
              hover:-translate-y-1
              hover:shadow-[0_25px_70px_-20px_rgba(120,70,45,0.35)]
            `
          : `
              max-w-[270px]
              cursor-pointer
              border-border/60
              bg-card/95
              px-6 py-7
              shadow-[0_10px_35px_-18px_rgba(0,0,0,0.25)]
              hover:-translate-y-2
              hover:border-terracotta/60
              hover:shadow-[0_20px_45px_-18px_rgba(120,70,45,0.3)]
            `
        }
      `}
    >
      {/* Decorative corner */}
      <div
        className={`
          pointer-events-none absolute right-4 top-4 h-8 w-8
          rounded-tr-2xl border-r border-t
          ${isRoot
            ? "border-terracotta/30"
            : "border-terracotta/15 group-hover:border-terracotta/35"
          }
        `}
      />

      <div
        className={`
          pointer-events-none absolute bottom-4 left-4 h-8 w-8
          rounded-bl-2xl border-b border-l
          ${isRoot
            ? "border-terracotta/30"
            : "border-terracotta/15 group-hover:border-terracotta/35"
          }
        `}
      />

      {/* Profile circle */}
      <div
        className={`
          relative mb-5 grid place-items-center rounded-full
          transition-all duration-500
          ${isRoot
            ? "h-24 w-24 bg-terracotta text-ivory shadow-lg shadow-terracotta/20 ring-8 ring-terracotta/10 group-hover:scale-105"
            : gender === "female"
              ? "h-16 w-16 bg-pink-50 text-pink-600 ring-4 ring-pink-100 group-hover:scale-110"
              : "h-16 w-16 bg-blue-50 text-blue-600 ring-4 ring-blue-100 group-hover:scale-110"
          }
        `}
      >
        {isRoot ? (
          <Crown className="h-10 w-10" strokeWidth={1.6} />
        ) : (
          <User className="h-7 w-7" strokeWidth={1.7} />
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

      {/* Founder label */}
      {isRoot && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-3 py-1">
          <Star className="h-3 w-3 fill-current text-terracotta" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-terracotta">
            Founder
          </span>
        </div>
      )}

      {/* Name */}
      <p
        className={`
          font-display leading-tight text-ink
          transition-colors duration-300
          group-hover:text-terracotta
          ${isRoot
            ? "text-2xl font-bold sm:text-3xl"
            : "text-lg font-semibold sm:text-xl"
          }
        `}
      >
        {name}
      </p>

      {/* Role */}
      {!isRoot && (
        <div className="mt-2 flex items-center gap-2">
          <span className="h-px w-5 bg-terracotta/30" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            {role}
          </p>

          <span className="h-px w-5 bg-terracotta/30" />
        </div>
      )}

      {/* Founder subtitle */}
      {/* {isRoot && (
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink/50">
          Qurat-Al-Ain Bashar Foundation
        </p>
      )} */}

      {/* Expand hint */}
      {description && !isRoot && (
        <p
          className={`
            mt-4 text-[9px] font-medium uppercase tracking-[0.2em]
            transition-opacity duration-300
            ${isExpanded ? "opacity-0" : "text-terracotta/60 opacity-100"}
          `}
        >
          Click to learn more
        </p>
      )}

      {/* Description */}
      {description && (
        <div
          className={`
            grid w-full transition-all duration-500 ease-in-out
            ${isExpanded
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div className="border-t border-terracotta/10 pt-4">
              <p className="text-sm leading-relaxed text-ink/65">
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
    <>
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
            Our NGO was established to empower people, support those in need,
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
                role="Founder"
                gender="female"
                isRoot
                description="Visionary leader and founder of the Qurat-Al-Ain Bashar Foundation, dedicated to global empowerment and sustainable impact."
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

            {/* Tree ending */}
            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-terracotta/15 bg-card/70 px-4 py-2 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Founding Leadership
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
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
              to="/contact"
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
    </>
  );
}