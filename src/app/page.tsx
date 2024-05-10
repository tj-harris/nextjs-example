import { TooltipProvider } from "@/components/ui/tooltip";
import { Dashboard } from "./Dashboard";

export default function Home() {
  return (
    <TooltipProvider>
      <Dashboard />
    </TooltipProvider>
  );
}
