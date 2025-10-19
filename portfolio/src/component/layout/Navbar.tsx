'use client'

import Link from "next/link";

import useScrollPos from "@/hooks/useScrollPos";
import MenuItem from "../menu/elements/MenuItem";
import ContactBtn from "../menu/elements/ContactBtn";

function Navbar() {

    const isAtTop = useScrollPos();

    return (
        <header className="mobile:hidden pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-6 desktop:px-12">
            <div
                className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-slate-950/60 px-6 py-4 text-slate-200 shadow-2xl backdrop-blur transition-all duration-500 ${isAtTop ? "bg-slate-950/40" : "bg-slate-950/80 shadow-3xl ring-1 ring-sky-500/30"}`}
            >
                <Link
                    href="/#Hero"
                    className="flex items-center gap-3 text-slate-100 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/50 to-indigo-600/60 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-inner shadow-slate-900/40">
                        VT
                    </span>
                    <span className="hidden text-xs font-semibold uppercase tracking-[0.5em] text-slate-400 desktop:block">
                        Portfolio
                    </span>
                </Link>

                <nav className="flex items-center gap-2">
                    <MenuItem
                        title={"About"}
                        className="rounded-full border border-transparent px-4 py-2 text-[0.68rem] uppercase tracking-[0.35em] hover:border-white/20 hover:bg-white/10"
                    />
                    <MenuItem
                        title={"Projects"}
                        className="rounded-full border border-transparent px-4 py-2 text-[0.68rem] uppercase tracking-[0.35em] hover:border-white/20 hover:bg-white/10"
                    />
                    <MenuItem
                        title={"Services"}
                        className="rounded-full border border-transparent px-4 py-2 text-[0.68rem] uppercase tracking-[0.35em] hover:border-white/20 hover:bg-white/10"
                    />
                </nav>

                <div className="flex items-center gap-3">
                    <span className="hidden rounded-full border border-white/10 px-4 py-2 text-[0.6rem] font-medium uppercase tracking-[0.4em] text-slate-300/90 desktop:inline-flex">
                        Available for work
                    </span>
                    <ContactBtn title={"Contact"} className="px-7 py-3 text-[0.65rem]" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
