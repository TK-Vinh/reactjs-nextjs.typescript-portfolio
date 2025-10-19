"use client";

import { useState } from "react";

import { AccentPill, GradientTitle } from "@/component/ui/primitives";
import Project from "@/static/Project";
import projectData from "../../../public/data/projects.json";

function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return <section id="Projects" className="relative overflow-hidden bg-slate-900 py-24">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-slate-900 opacity-50" aria-hidden />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 opacity-90" aria-hidden />
        <div className="pointer-events-none absolute right-[-10%] top-20 -z-10 h-96 w-96 rounded-full bg-sky-500/25 blur-[120px]" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <AccentPill className="mx-auto text-[0.65rem] tracking-[0.45em] text-sky-100/90">Featured work</AccentPill>
                <GradientTitle className="mt-6 text-4xl leading-tight sm:text-5xl">Where strategy, craft, and polish intersect</GradientTitle>
                <p className="mt-4 text-lg text-slate-300">
                    A curated mix of case studies that blend strong narratives, visual systems, and fast iteration—each one anchored in real product wins.
                </p>
            </div>

            <ul className="mt-14 grid list-none gap-10 sm:grid-cols-2 xl:grid-cols-3" role="list">
                {projectData.data.map((item, index) => {
                    const isHovered = hoveredIndex === index;

                    return <li
                        key={index}
                        className="relative min-h-[28rem] pb-16"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                    >
                        <Project
                            headline={item.title}
                            image={item.image}
                            text={item.text}
                            tags={item.tags}
                            link={item.link}
                            isHovered={isHovered}
                        />
                    </li>;
                })}
            </ul>
        </div>
    </section>;
}

export default Projects;