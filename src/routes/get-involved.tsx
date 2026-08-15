import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Prose } from "@/components/site/PageShell";
import { ArrowRight, Palette, Dumbbell, HandHeart, GraduationCap, Sparkles, Users, Compass, Handshake } from "lucide-react";
import heroImg from "@/assets/hero-involved.jpg";

export const Route = createFileRoute("/get-involved")({
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

const roles = [
  { label: "Artist", Icon: Palette },
  { label: "Athlete", Icon: Dumbbell },
  { label: "Altruist", Icon: HandHeart },
  { label: "Educator", Icon: GraduationCap },
  { label: "Creative Thinker", Icon: Sparkles },
  { label: "Volunteer", Icon: Users },
  { label: "Mentor", Icon: Compass },
  { label: "Partner", Icon: Handshake },
];

function GetInvolved() {
  return (
    <PageShell transparentNav>
      <PageHero
        eyebrow="Join the movement"
        title="Get Involved"
        subtitle="A more compassionate and equitable world begins with the people who choose to build it."
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

          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {roles.map(({ label, Icon }) => (
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
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-all hover:opacity-90 sm:px-8 sm:py-4 sm:text-sm"
            >
              Application Form
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
