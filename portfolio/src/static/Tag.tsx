function Tag({ title }: { title: string }) {
    return (<span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-slate-900/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-200">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
        {title}
    </span>);
}

export default Tag;