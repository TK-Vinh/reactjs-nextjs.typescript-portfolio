import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Services</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service hl="Business proposals with diagrams" desc="Craft persuasive business proposals that highlight deliverables with clear supporting diagrams" img="/icons/proposal.svg" />
            <Service hl="Creating user-friendly UI" desc="Design intuitive, accessible interfaces so every interaction feels effortless" img="/icons/ui.svg" />
            <Service hl="Deploy fast" desc="Ship features quickly using reliable automation and streamlined workflows" img="/icons/deploy.svg" />
        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <ContactBtn title={"Contact Me"} />

    </div>
}

export default Services;
