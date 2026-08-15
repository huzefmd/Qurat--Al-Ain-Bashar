import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedLayout,
});

function GetInvolvedLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}
