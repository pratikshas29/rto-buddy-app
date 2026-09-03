import { Link } from "@tanstack/react-router";
import { AlertCircle, Check, FileQuestion, Info } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function DemoNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-xl border border-warning/40 bg-warning-soft px-3 py-2 text-xs leading-relaxed text-warning-foreground",
        className,
      )}
    >
      <Info className="mt-0.5 size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export function StatusPill({
  tone,
  children,
  className,
}: {
  tone: "success" | "warning" | "danger" | "info" | "neutral";
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<string, string> = {
    success: "bg-success-soft text-success border-success/25",
    warning: "bg-warning-soft text-warning-foreground border-warning/35",
    danger: "bg-destructive-soft text-destructive border-destructive/25",
    info: "bg-info-soft text-info border-info/25",
    neutral: "bg-muted text-muted-foreground border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">{eyebrow}</span>
        )}
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "primary",
}: {
  label: string;
  value: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: "primary" | "success" | "warning" | "info";
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary-soft text-primary",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning-foreground",
    info: "bg-info-soft text-info",
  };
  return (
    <Card className="gap-0 p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={cn("flex size-9 items-center justify-center rounded-xl", tones[tone])}>
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-3 text-display text-2xl font-bold">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </Card>
  );
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
  icon: Icon = FileQuestion,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: ComponentProps<typeof Link>["to"];
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="items-center gap-0 border-dashed p-10 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionLabel && actionTo && (
        <Button asChild className="mt-5" size="sm">
          <Link to={actionTo}>{actionLabel}</Link>
        </Button>
      )}
    </Card>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <Card className="items-center gap-0 border-destructive/30 bg-destructive-soft p-10 text-center">
      <AlertCircle className="size-8 text-destructive" />
      <h3 className="mt-4 text-base font-semibold">Something went wrong</h3>
      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" className="mt-5" onClick={onRetry}>
          Try again
        </Button>
      )}
    </Card>
  );
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="gap-3 p-5">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="mt-2 h-9 w-28" />
        </Card>
      ))}
    </div>
  );
}

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
            {i !== steps.length - 1 && (
              <span
                className={cn(
                  "absolute top-8 left-[15px] h-[calc(100%-2rem)] w-0.5",
                  done ? "bg-success" : "bg-border",
                )}
              />
            )}
            <span
              className={cn(
                "z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold",
                done && "border-success bg-success text-success-foreground",
                active && "border-primary bg-primary-soft text-primary",
                !done && !active && "border-border bg-card text-muted-foreground",
              )}
            >
              {done ? <Check className="size-4" /> : i + 1}
            </span>
            <div className="pt-1">
              <p className={cn("text-sm font-semibold", !done && !active && "text-muted-foreground")}>
                {step}
              </p>
              <p className="text-xs text-muted-foreground">
                {done ? "Completed" : active ? "In progress" : "Pending"}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
