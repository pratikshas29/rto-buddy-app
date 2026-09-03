import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "RTO Services",
    links: [
      { label: "Vehicle Transfer", to: "/rto-services/vehicle-transfer" },
      { label: "Duplicate RC", to: "/rto-services/duplicate-rc" },
      { label: "NOC", to: "/rto-services/noc" },
      { label: "Green Tax", to: "/rto-services/green-tax" },
      { label: "Road Tax", to: "/rto-services/road-tax" },
      { label: "Hypothecation Removal", to: "/rto-services/hypothecation-removal" },
      { label: "Vehicle Scrapping", to: "/rto-services/vehicle-scrapping" },
    ],
  },
  {
    title: "RTO Directory",
    links: [
      { label: "All RTO Offices", to: "/rto" },
      { label: "Maharashtra", to: "/rto/maharashtra" },
      { label: "Pune", to: "/rto/maharashtra/pune" },
      { label: "MH12 Pune RTO", to: "/rto/maharashtra/pune/mh12" },
    ],
  },
  {
    title: "Calculators",
    links: [
      { label: "Road Tax", to: "/calculators/road-tax" },
      { label: "Green Tax", to: "/calculators/green-tax" },
      { label: "Vehicle Transfer", to: "/calculators/vehicle-transfer" },
      { label: "Re-registration", to: "/calculators/re-registration" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Blog", to: "/blog" },
      { label: "Commercial Vehicle", to: "/commercial-vehicle" },
      { label: "Driving Licence", to: "/driving-licence" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(5,minmax(0,1fr))]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Understand what RTO work you need, what documents to carry, and what it may cost — before you
              stand in a queue.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-wide uppercase">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-warning/40 bg-warning-soft p-4 text-[13px] leading-relaxed text-warning-foreground">
          <strong className="font-semibold">Disclaimer:</strong> This is an independent information and
          assistance platform and is not a government website or government department. All fees, timelines,
          offices and records shown here are demo data created for this prototype.
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RTO Assist (demo). All content is fictional.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/provider" className="hover:text-primary">
              Provider Portal
            </Link>
            <Link to="/admin" className="hover:text-primary">
              Admin Portal
            </Link>
            <Link to="/login" className="hover:text-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
