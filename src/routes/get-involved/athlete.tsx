import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { RoleApplicationForm } from "@/components/site/RoleApplicationForm";
import { roles } from "@/components/site/roleConfig";

export const Route = createFileRoute("/get-involved/athlete")({
  head: () => ({
    meta: [
      { title: "Apply as Athlete — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "Apply to join Qurat-Al-Ain Bashar Foundation as an athlete and lead through discipline, sport, and physical empowerment.",
      },
      { property: "og:title", content: "Apply as Athlete — Qurat-Al-Ain Bashar Foundation" },
      { property: "og:url", content: "/get-involved/athlete" },
    ],
    links: [{ rel: "canonical", href: "/get-involved/athlete" }],
  }),
  component: AthleteApply,
});

function AthleteApply() {
  return (
    <section className="px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/get-involved"
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-terracotta sm:text-xs sm:tracking-[0.3em]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all roles
        </Link>

        <div className="mt-8 sm:mt-10">
          <RoleApplicationForm role={roles.athlete} />
        </div>
      </div>
    </section>
  );
}
