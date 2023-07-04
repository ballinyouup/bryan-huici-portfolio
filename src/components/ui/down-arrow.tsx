import { ChevronDown } from 'lucide-react'
export default function DownArrow({ section }: { section: number }) {
    return (
        <>
            <button

                className="absolute bottom-20 animate-bounce duration-1000 left-1/2 z-40 hidden rounded-xl border-2 border-transparent transition-transform hover:border-white md:flex"
                onClick={() =>
                    scrollTo({ top: 960 * section, behavior: 'smooth' })
                }
            >
                <ChevronDown className="h-10 w-10" strokeWidth={'4px'} />
            </button>
            <button

                className="absolute animate-bounce bottom-20 left-1/2 z-40 flex rounded-xl border-2 border-transparent transition-transform duration-1000 hover:border-white md:hidden"
                onClick={() =>
                    scrollTo({ top: 704 * section, behavior: 'smooth' })
                }
            >
                <ChevronDown className="h-10 w-10" strokeWidth={'4px'} />
            </button>
        </>
    )
}
