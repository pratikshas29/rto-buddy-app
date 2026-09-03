import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "RTO Services", to: "/rto-services" },
  { label: "Vehicle Services", to: "/vehicle-services" },
  { label: "Driving Licence", to: "/driving-licence" },
  { label: "RTO Calculator", to: "/calculators" },
  { label: "RTO Offices", to: "/rto" },
  { label: "FAQ", to: "/faq" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="flex h-8 items-center justify-center bg-primary px-4 text-[11px] font-medium text-primary-foreground">
        <Phone className="mr-2 size-3" />
        Demo prototype — independent RTO assistance platform, not a government website
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-primary-soft text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/providers">Get RTO Assistance</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
            <div className="border-b p-5">
              <Logo />
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-primary-soft text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/find-my-rto-work">Find My RTO Work</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
