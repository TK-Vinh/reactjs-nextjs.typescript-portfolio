import { useGlobalState } from "@/component/contexts/GlobalStateContext";

interface MenuItemProps {
    title: string;
    className?: string;
}

function MenuItem({ title, className = "" }: MenuItemProps) {

    const { exitMenu } = useGlobalState();

    return (
        <a
            href={"/#" + title}
            onClick={exitMenu}
            className={`inline-flex items-center justify-center gap-2 font-semibold text-slate-200 transition duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${className}`}
        >
            {title}
        </a>
    );
}

export default MenuItem;