'use client';
import { ChevronDown } from 'lucide-react';
export default function DownArrow({ section }: { section: number; }) {
    return (
        <div className="relative w-fit animate-bounce z-40 rounded-xl border-2 border-transparent bg-accent transition-transform duration-1000 hover:border-white">
            <button
                className='hidden md:flex'
                onClick={() =>
                    scrollTo({ top: 960 * section, behavior: 'smooth' })
                }
            >
                <span className="absolute flex -left-2 -top-2 h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                </span>
                <ChevronDown className="h-10 w-10" strokeWidth={'4px'} />
            </button>
            <button
                className='flex md:hidden'
                onClick={() =>
                    scrollTo({ top: 704 * section, behavior: 'smooth' })
                }
            >
                <span className="absolute flex -left-2 -top-2 h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                </span>
                <ChevronDown className="h-10 w-10" strokeWidth={'4px'} />
            </button>
        </div>
    )
}
