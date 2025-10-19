import * as React from "react";

declare interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spotlight?: boolean;
  hoverLift?: boolean;
}

declare function GlassCard(props: GlassCardProps): React.ReactElement;

declare interface GradientTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

declare function GradientTitle(props: GradientTitleProps): React.ReactElement;

declare interface AccentPillProps extends React.HTMLAttributes<HTMLSpanElement> {}

declare function AccentPill(props: AccentPillProps): React.ReactElement;

export { GlassCard, GradientTitle, AccentPill };
