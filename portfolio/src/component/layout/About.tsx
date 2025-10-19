import { AccentPill, GradientTitle } from "@/component/ui/primitives";
import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";

function About() {
  return (
    <section
      id="About"
      className="relative overflow-hidden bg-slate-950 py-24 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="text-center">
          <AccentPill className="mx-auto bg-white/10 text-xs tracking-[0.4em] text-sky-100">
            Story &amp; Path
          </AccentPill>
          <GradientTitle className="mt-4 text-3xl desktop:text-5xl">
            A developer rooted in curiosity
          </GradientTitle>
          <p className="mt-4 text-base text-slate-300 desktop:text-lg">
            From early experimentation to professional delivery, I translate ideas into delightful
            digital journeys and collaborate across disciplines to keep products evolving.
          </p>
        </div>

        <div className="grid gap-10 desktop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Summary />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-slate-900/30">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
