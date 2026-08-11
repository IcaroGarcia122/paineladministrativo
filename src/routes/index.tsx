import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { GuestSiteView } from "@/components/views/GuestSiteView";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return <GuestSiteView onAdminLogin={() => navigate({ to: "/admin" })} />;
}
