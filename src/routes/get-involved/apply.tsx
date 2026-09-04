import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { RoleApplicationForm } from "@/components/site/RoleApplicationForm";
import { roles } from "@/components/site/roleConfig";

export const Route = createFileRoute("/get-involved/apply")({
  head: () => ({
    meta: [
      { title: "Apply to Join — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "Apply to join Qurat-Al-Ain Bashar Foundation and contribute your skills to our mission of empowerment and social impact.",
      },
      { property: "og:title", content: "Apply to Join — Qurat-Al-Ain Bashar Foundation" },
      { property: "og:url", content: "/get-involved/apply" },
    ],
    links: [{ rel: "canonical", href: "/get-involved/apply" }],
  }),
  component: GeneralApply,
});

function GeneralApply() {
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
          <RoleApplicationForm role={roles.general} />
        </div>
      </div>
    </section>
  );
}
