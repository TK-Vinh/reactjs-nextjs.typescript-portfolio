import { AccentPill, GlassCard, GradientTitle } from "@/component/ui/primitives";
import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return <section id="Services" className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-slate-900 opacity-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 opacity-80" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-500/30 blur-[140px]" aria-hidden />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl space-y-5">
                <AccentPill className="mx-auto text-[0.65rem] tracking-[0.45em] text-sky-100/90">Signature Services</AccentPill>
                <GradientTitle className="text-4xl leading-tight sm:text-5xl">
                    Design-first solutions that translate ideas into launch-ready products
                </GradientTitle>
                <p className="text-lg text-slate-300">
                    Each engagement is built on polished visuals, systems thinking, and an eye for speed—whether we are telling your story with diagrams, architecting seamless interfaces, or getting your launch pipeline humming.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3" role="list">
                <Service
                    badge="Strategy"
                    hl="Business proposals with diagrams"
                    desc="Craft persuasive proposals that distill your strategy into narrative arcs and easy-to-scan diagrams."
                    bullets={["Interactive executive summaries tailored to stakeholders", "Infographic-grade diagrams highlighting milestones", "Version-controlled deliverables for iterative refinement"]}
                    img="/icons/proposal.svg"
                />
                <Service
                    badge="Product"
                    hl="Creating user-friendly UI"
                    desc="Design human-centered product journeys with component-driven systems that keep your experience consistent."
                    bullets={["Accessibility-first wireframes and flows", "Component libraries mapped to your brand language", "Micro-interactions that reinforce clarity and delight"]}
                    img="/icons/ui.svg"
                />
                <Service
                    badge="Delivery"
                    hl="Deploy fast"
                    desc="Operationalize rapid releases with automation and observability baked into every sprint."
                    bullets={["CI/CD blueprints aligned to your stack", "Launch playbooks covering QA through success metrics", "Enablement sessions to keep your team shipping"]}
                    img="/icons/deploy.svg"
                />
            </div>

            <GlassCard className="mx-auto flex w-full flex-col items-center gap-6 bg-white/5 p-10 text-center sm:max-w-3xl sm:p-12" hoverLift={false}>
                <GradientTitle className="text-3xl">Have a vision that deserves momentum?</GradientTitle>
                <p className="text-base text-slate-200">
                    Let’s orchestrate the visuals, the interactions, and the deployment pipeline so your idea lands with impact. Drop me a line and we’ll shape a roadmap together.
                </p>
                <ContactBtn title={"Contact Me"} />
            </GlassCard>
        </div>
    </section>;
}

export default Services;
