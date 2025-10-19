import type { ElementType, HTMLAttributes } from "react";

const baseCardClasses =
  "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-slate-900/30 transition-all duration-500 [mask-image:radial-gradient(circle_at_top,white,transparent_190%)]";

export interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  spotlight?: boolean;
  hoverLift?: boolean;
}

export function GlassCard({
  as: Component = "div",
  className = "",
  children,
  spotlight = true,
  hoverLift = true,
  ...props
}: GlassCardProps) {
  const combinedClassName = [
    baseCardClasses,
    spotlight
      ? "before:absolute before:inset-0 before:-translate-y-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 before:transition before:duration-700 hover:before:translate-y-0 hover:before:opacity-100"
      : "",
    hoverLift ? "hover:-translate-y-2 hover:shadow-3xl" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}

export interface GradientTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function GradientTitle({ children, className = "", ...props }: GradientTitleProps) {
  return (
    <h3
      className={`bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-500 bg-clip-text font-semibold tracking-tight text-transparent ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export interface AccentPillProps extends HTMLAttributes<HTMLSpanElement> {}

export function AccentPill({ children, className = "", ...props }: AccentPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-100 shadow-inner shadow-slate-500/20 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
