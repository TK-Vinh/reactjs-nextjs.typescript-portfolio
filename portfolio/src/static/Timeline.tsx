import { GlassCard, GradientTitle } from "@/component/ui/primitives";
import timelineData from "../../public/data/timeline.json";
import Tag from "./Tag";

function Timeline() {
  return (
    <ol className="relative border-l border-white/10 pl-8">
      {timelineData.data.map((item, index) => (
        <li key={`W${index}`} className="relative mb-10 last:mb-0">
          <span className="absolute -left-[1.6rem] flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-xs font-semibold uppercase tracking-[0.3em] text-sky-100 shadow-lg shadow-slate-900/50">
            {item.year}
          </span>
          <GlassCard className="bg-slate-900/60 p-6" spotlight={false}>
            <GradientTitle className="text-lg">
              {item.title}
              <span className="ml-2 text-sm font-semibold text-sky-200">@ {item.company}</span>
            </GradientTitle>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.tasks}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used:">
              {item.tags.map((tag, tagIndex) => (
                <li key={`L${tagIndex}`}>
                  <Tag title={tag} />
                </li>
              ))}
            </ul>
          </GlassCard>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
