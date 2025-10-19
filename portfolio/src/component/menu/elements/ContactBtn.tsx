'use client'

import { useGlobalState } from "@/component/contexts/GlobalStateContext";
import { useEffect } from "react";

interface ContactBtnProps {
    title: string;
    className?: string;
}

const ContactBtn = ({ title, className = "" }: ContactBtnProps) => {

    const { isModalOpen, toggleModal, exitMenu } = useGlobalState();

    const handleClick = () => {
        exitMenu();
        toggleModal();
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isModalOpen]);

    return (
        <button
            type="button"
            aria-label={title}
            onClick={handleClick}
            className={`group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-sky-500/80 to-indigo-500/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-slate-900/40 transition duration-300 hover:-translate-y-1 hover:shadow-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${className}`}
        >
            <span>{title}</span>
            <span aria-hidden className="h-2 w-2 rounded-full bg-white/80 transition group-hover:bg-sky-100" />
        </button>
    );
}

export default ContactBtn;