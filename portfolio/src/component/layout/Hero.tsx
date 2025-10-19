"use client"

import { AccentPill, GlassCard, GradientTitle } from "@/component/ui/primitives";
import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="Hero"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-slate-100 desktop:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 desktop:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          <AccentPill className="bg-white/10 text-xs tracking-[0.4em] text-sky-100">
            Portfolio Refresh
          </AccentPill>
          <div className="space-y-4">
            <GradientTitle className="text-4xl leading-tight desktop:text-6xl">
              Greetings, I&apos;m Vinh
            </GradientTitle>
            <p className="text-lg leading-relaxed text-slate-200 desktop:text-xl">
              I craft immersive web experiences that balance performance and personality.
              From design systems to launch day, I partner with teams to ship products users
              love.
            </p>
            <p className="text-base text-slate-300">
              Currently exploring <span className="font-semibold text-sky-200"><Typing /></span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#Projects"
              className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-sky-900/40 transition hover:-translate-y-1 hover:shadow-xl"
            >
              View Featured Work
            </Link>
            <Link
              href="/#Services"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-100 transition hover:-translate-y-1 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
          <div className="hidden desktop:block">
            <SocialMedia size={200} />
          </div>
        </div>

        <div className="relative flex justify-center">
          <GlassCard className="w-full max-w-lg bg-slate-900/40 p-8 text-center">
            <div className="relative mx-auto h-52 w-52">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/30 to-indigo-600/30 blur-xl" />
              <img
                className="relative z-10 h-full w-full rounded-full border border-white/10 object-cover object-top shadow-2xl shadow-slate-900/60"
                src="/potraitdummy.webp"
                alt="Portrait"
              />
            </div>
            <GradientTitle className="mt-8 text-2xl">Fullstack Developer</GradientTitle>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Building human-centered products with TypeScript, React, and Next.js. I enjoy
              translating complex ideas into clear interfaces and thoughtfully scaling design
              systems.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-left text-xs uppercase tracking-widest text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl font-bold text-sky-200">20+</span>
                <p className="mt-2 text-[0.7rem] text-slate-300">Projects launched</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl font-bold text-sky-200">3</span>
                <p className="mt-2 text-[0.7rem] text-slate-300">Years of building</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl font-bold text-sky-200">∞</span>
                <p className="mt-2 text-[0.7rem] text-slate-300">Curiosity &amp; growth</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl font-bold text-sky-200">24h</span>
                <p className="mt-2 text-[0.7rem] text-slate-300">Avg. deploy turnaround</p>
              </div>
            </div>
          </GlassCard>
          <div className="absolute -bottom-6 right-6 hidden rounded-full bg-white/10 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-100 backdrop-blur desktop:flex">
            Open for collaborations
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex justify-center desktop:hidden">
        <SocialMedia size={120} />
      </div>

      <div className="relative z-10 mt-24 flex justify-center">
        <Link href="/#About" aria-label="About" className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-1 hover:border-sky-400/60 hover:text-sky-200">
          <Arrow />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
