import { AccentPill, GlassCard, GradientTitle } from "@/component/ui/primitives";

function Summary() {
  return (
    <GlassCard className="h-full bg-slate-900/40 p-8 text-left">
      <GradientTitle className="text-2xl">About me</GradientTitle>
      <p className="mt-4 text-base leading-relaxed text-slate-200">
        I&apos;m a fullstack developer currently pursuing a bachelor&apos;s degree in Computer Science.
        My journey is rooted in curiosity—experimenting with new tools, pairing with designers,
        and delivering polished experiences that solve real problems for people.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-200">
        I thrive in collaborative environments where strategy, storytelling, and execution come
        together. Whether I&apos;m facilitating workshops, crafting UI flows, or optimizing deployment
        pipelines, I bring an empathetic, systems-minded approach to every project.
      </p>
      <div className="mt-8 grid gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            What drives my work
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <AccentPill className="mt-1 bg-white/10 px-2 py-0.5 text-[0.6rem]">Craft</AccentPill>
              Designing purposeful interactions that make complexity approachable.
            </li>
            <li className="flex items-start gap-3">
              <AccentPill className="mt-1 bg-white/10 px-2 py-0.5 text-[0.6rem]">Velocity</AccentPill>
              Iterating quickly with reliable tooling so teams can learn and adapt faster.
            </li>
            <li className="flex items-start gap-3">
              <AccentPill className="mt-1 bg-white/10 px-2 py-0.5 text-[0.6rem]">Impact</AccentPill>
              Measuring success through the outcomes we unlock for users and partners.
            </li>
          </ul>
        </div>
      </div>
    </GlassCard>
  );
}

export default Summary;
