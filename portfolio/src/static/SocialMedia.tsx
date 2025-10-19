import Image from 'next/image';

function SocialMedia({ size }: { size: number }) {
    const paddingClass = size > 96 ? "p-6" : size > 64 ? "p-4" : "p-3";

    return (
        <div className="flex justify-center gap-3 pb-4" style={{ pointerEvents: 'auto' }}>
            <a
                aria-label="LinkedIn"
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 ${paddingClass} text-slate-100 shadow-lg shadow-slate-900/40 transition transform hover:-translate-y-1 hover:border-sky-400/60 hover:bg-white/10`}
                href="https://www.linkedin.com/in/tran-khanh-vinh-272b29221/"
                rel="noreferrer"
                target="_blank"
            >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={size} height={size} />
            </a>
            <a
                aria-label="GitHub"
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 ${paddingClass} text-slate-100 shadow-lg shadow-slate-900/40 transition transform hover:-translate-y-1 hover:border-sky-400/60 hover:bg-white/10`}
                href="https://github.com/TK-Vinh"
                rel="noreferrer"
                target="_blank"
            >
                <Image src="/icons/github.svg" alt="GitHub" width={size} height={size} />
            </a>
            <a
                aria-label="Facebook"
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 ${paddingClass} text-slate-100 shadow-lg shadow-slate-900/40 transition transform hover:-translate-y-1 hover:border-sky-400/60 hover:bg-white/10`}
                href="https://www.facebook.com/tkvinh2003/"
                rel="noreferrer"
                target="_blank"
            >
                <Image src="/icons/facebook.svg" alt="Facebook" width={size} height={size} />
            </a>
        </div>
    );
}

export default SocialMedia;
