import Tag from "./Tag";

function Project({ headline, image, text, tags, link }: { headline: string, image: string, text: string, tags: string[], link: string }) {
    return (<a className="group block" href={link} aria-label={text}>
        <div className="project-card flex h-[28rem] flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg max-w-96 m-3 text-white">
            <img className="h-48 w-full object-cover rounded-t-lg" alt={text} src={image} />
            <div className="flex flex-1 flex-col p-4">
                <div className="text-xl font-medium mb-4">{headline}</div>
                <p className="project-text flex-1">{text}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {tags.map((item, index) =>
                        <li key={index} className="mr-1.5 mt-2"><Tag title={item} /></li>
                    )}
                </ul>
            </div>
        </div>
    </a>);
}

export default Project;