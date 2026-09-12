export function SecondaryButton({ text }: { text: React.ReactNode }) {
    return (
        <button className="w-max h-auto text-lg bg-neutral-100 hover:bg-neutral-900 font-medium text-neutral-900 hover:text-neutral-100 px-9 py-4 rounded-full shadow-xs transition-all duration-300">
            {text}
        </button>
    )
}