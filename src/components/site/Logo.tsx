import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <ShieldCheck className="size-5" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-display text-[15px] font-bold">RTO Assist</span>
          <span className="block text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
            Independent Platform
          </span>
        </span>
      )}
    </Link>
  );
}
