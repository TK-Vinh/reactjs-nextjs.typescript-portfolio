import Link from "next/link";

import ContactBtn from "@/component/menu/elements/ContactBtn";
import { AccentPill, GlassCard, GradientTitle } from "@/component/ui/primitives";
import SocialMedia from "@/static/SocialMedia";

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-slate-900 opacity-40" />
                <div className="absolute -top-32 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/25 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-indigo-600/25 blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 desktop:px-20">
                <div className="flex flex-col gap-8 desktop:flex-row desktop:items-center desktop:justify-between">
                    <div className="space-y-4 desktop:max-w-xl">
                        <AccentPill className="bg-white/10 text-xs tracking-[0.4em] text-sky-100">
                            Stay connected
                        </AccentPill>
                        <GradientTitle className="text-3xl desktop:text-4xl">
                            Let&apos;s build your next experience
                        </GradientTitle>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Partner with a developer who blends visual storytelling with reliable delivery.
                            Share the ideas you&apos;re exploring and we&apos;ll sketch a plan to bring them to life.
                        </p>
                    </div>

                    <GlassCard className="w-full max-w-md bg-slate-900/60 p-6 text-sm text-slate-200">
                        <p className="leading-relaxed">
                            Ready when you are. Describe your project&apos;s goals, timelines, or team structure and I&apos;ll reply with a
                            tailored approach.
                        </p>
                        <ContactBtn title="Start a project" className="mt-6 w-full justify-center px-6 py-3 text-[0.65rem]" />
                        <a
                            href="mailto:khanhvinhtran2003@gmail.com"
                            className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-sky-100 transition hover:text-sky-300"
                        >
                            <span className="h-2 w-2 rounded-full bg-sky-300" aria-hidden />
                            khanhvinhtran2003@gmail.com
                        </a>
                    </GlassCard>
                </div>

                <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-8 desktop:flex-row desktop:justify-between">
                    <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/40 to-indigo-600/50 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-inner shadow-slate-900/40">
                            VT
                        </span>
                        <div className="text-left">
                            <p className="text-sm font-semibold text-slate-100">Vinh Tran</p>
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Fullstack developer</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-[0.65rem] uppercase tracking-[0.4em] text-slate-400">
                        <Link href="/#About" className="transition hover:text-white">
                            About
                        </Link>
                        <Link href="/#Projects" className="transition hover:text-white">
                            Projects
                        </Link>
                        <Link href="/#Services" className="transition hover:text-white">
                            Services
                        </Link>
                        <Link href="/#Timeline" className="transition hover:text-white">
                            Timeline
                        </Link>
                    </div>

                    <SocialMedia size={36} />
                </div>

                <p className="text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Vinh Tran. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
