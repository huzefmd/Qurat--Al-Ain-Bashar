import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/PageShell";
import { ArrowRight, Palette, Dumbbell, HandHeart, GraduationCap, Sparkles, Users, Compass, Handshake } from "lucide-react";
import heroImg from "@/assets/hero-involved.jpg";

export const Route = createFileRoute("/get-involved/")({
  head: () => ({
    meta: [
      { title: "Get Involved — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "Join as an artist, athlete, altruist, educator, mentor, volunteer, creative thinker, or partner.",
      },
      { property: "og:title", content: "Get Involved — Qurat-Al-Ain Bashar Foundation" },
      {
        property: "og:description",
        content:
          "Join as an artist, athlete, altruist, educator, mentor, volunteer, creative thinker, or partner.",
      },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolved,
});

const primaryRoles = [
  { label: "Artist", Icon: Palette, to: "/get-involved/artist", blurb: "Inspire through creativity, art, and performance." },
  { label: "Athlete", Icon: Dumbbell, to: "/get-involved/athlete", blurb: "Lead through discipline, sport, and empowerment." },
  { label: "Altruist", Icon: HandHeart, to: "/get-involved/altruist", blurb: "Serve with expertise, mentorship, and compassion." },
];

const otherRoles = [
  { label: "Educator", Icon: GraduationCap },
  { label: "Creative Thinker", Icon: Sparkles },
  { label: "Volunteer", Icon: Users },
  { label: "Mentor", Icon: Compass },
  { label: "Partner", Icon: Handshake },
];

function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Join the movement"
        title="Get Involved"
        image={heroImg}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Prose>
          <p>
            Our NGO was established to empower people, support those in need, and build stronger, more resilient communities. We work alongside volunteers, partners, donors, and community members who share a common vision of a more compassionate and equitable world.
          </p>
          <p>
            Every project we undertake is driven by our commitment to integrity, transparency, and sustainable impact. Whether through education, healthcare, community development, or social support initiatives, our goal is to create opportunities that transform lives and inspire hope.
          </p>
          <p>
            I invite you to join us on this journey. Together, we can make a lasting difference and create a brighter future for generations to come.
          </p>
        </Prose>
      </section>

      <section className="bg-cream/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta sm:tracking-[0.3em]">Join as</p>
            <h2 className="mt-3 font-display text-3xl font-light text-ink sm:text-4xl md:text-5xl">
              Where will you contribute?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
            {primaryRoles.map(({ label, Icon, to, blurb }) => (
              <Link
                key={label}
                to={to}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-terracotta/30 bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta hover:shadow-lg sm:p-8"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-terracotta text-ivory transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="mt-4 font-display text-xl text-ink sm:mt-5 sm:text-2xl">{label}</p>
                <p className="mt-2 text-xs text-ink/70 sm:text-sm">{blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta sm:tracking-[0.3em]">
                  Apply
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-ink/60 sm:tracking-[0.3em]">
              Or contribute as
            </p>
            <div className="mx-auto mt-5 h-px w-12 bg-[#C8A062]/60" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {otherRoles.map(({ label, Icon }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta hover:shadow-md sm:p-6"
              >
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-ivory sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 font-display text-base text-ink sm:mt-4 sm:text-lg">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center sm:mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta/40 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-terracotta transition-all hover:bg-terracotta hover:text-ivory sm:px-8 sm:py-3.5 sm:text-sm"
            >
              General contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
