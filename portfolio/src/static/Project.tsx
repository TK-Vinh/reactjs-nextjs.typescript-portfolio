import { AccentPill, GlassCard, GradientTitle } from "@/component/ui/primitives";
import Tag from "./Tag";

function Project({ headline, image, text, tags, link }: { headline: string, image: string, text: string, tags: string[], link: string }) {
    return (
        <a className="group block" href={link} aria-label={text}>
            <GlassCard as="article" className="project-card flex w-full max-w-96 flex-col overflow-hidden bg-slate-900/60 text-white" hoverLift={false}>
                <div className="relative h-52 overflow-hidden">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt={text} src={image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" aria-hidden />
                    <AccentPill className="absolute left-4 top-4 bg-slate-900/70 text-[0.6rem] tracking-[0.4em] text-sky-100">Featured</AccentPill>
                </div>
                <div className="flex flex-1 flex-col p-6">
                    <GradientTitle className="text-2xl leading-tight">{headline}</GradientTitle>
                    <p className="project-text mt-4 text-base leading-relaxed text-slate-200">{text}</p>
                    <ul className="mt-6 flex flex-wrap gap-2 text-sm text-sky-200/80" aria-label="Technologies used:">
                        {tags.map((item, index) =>
                            <li key={index}>
                                <Tag title={item} />
                            </li>
                        )}
                    </ul>
                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6 text-sm font-semibold text-sky-200">
                        <span className="flex items-center gap-2 tracking-wide">
                            View project
                            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                        </span>
                        <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Case Study</span>
                    </div>
                </div>
            </GlassCard>
        </a>
    );
}

export default Project;