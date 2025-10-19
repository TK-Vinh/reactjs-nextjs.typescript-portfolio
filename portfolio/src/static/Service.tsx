import { GlassCard, GradientTitle, AccentPill } from "@portfolio/ui-primitives";
import { ServiceData } from "@/component/types/types.d";

function Service({ hl, desc, img, bullets = [], badge }: ServiceData) {
    return (
        <GlassCard as="article" className="flex h-full flex-col justify-between gap-6 bg-slate-950/40 p-8 text-left" hoverLift={false} role="listitem">
            <div>
                <div className="flex items-start justify-between gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-sky-400/10 to-indigo-500/10 text-sky-200 ring-1 ring-white/10 shadow-lg shadow-sky-500/20">
                        <img className="h-10 w-10" src={img} alt={hl} />
                        <span aria-hidden className="pointer-events-none absolute inset-0 animate-pulse-slow rounded-2xl bg-sky-400/15" />
                    </div>
                    {badge && <AccentPill className="text-[0.65rem] tracking-[0.35em] text-sky-100/90">{badge}</AccentPill>}
                </div>
                <GradientTitle className="mt-8 text-2xl leading-tight">{hl}</GradientTitle>
                <p className="mt-4 text-base leading-relaxed text-slate-200">{desc}</p>
            </div>
            {bullets.length > 0 && (
                <ul className="mt-2 space-y-3 text-sm text-slate-300">
                    {bullets.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span aria-hidden className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
                            <span className="leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-sky-200/70">
                <span>Deliverables</span>
                <span>Premium</span>
            </div>
        </GlassCard>
    );
}

export default Service;
