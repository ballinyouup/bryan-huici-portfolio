'use client';
import { ChevronUp } from 'lucide-react';
export default function UpArrow() {
    return (
        <button
            className="z-40 relative animate-bounce w-fit rounded-xl border-2 border-transparent bg-accent transition-transform duration-1000 hover:border-white flex"
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <span className="absolute flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            </span>
            <ChevronUp className="h-10 w-10" strokeWidth={'4px'} />
        </button>
    );
}
