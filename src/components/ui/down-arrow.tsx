'use client'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
export default function DownArrow({ section }: { section: number }) {
    return (
        <>
            <motion.button
                initial={{
                    x: -36,
                }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute bottom-20 left-1/2 z-40 hidden rounded-xl border-2 border-transparent transition-all duration-300 hover:border-white md:flex"
                onClick={() =>
                    scrollTo({ top: 960 * section, behavior: 'smooth' })
                }
            >
                <ChevronDown className="h-10 w-10" strokeWidth={'4px'} />
            </motion.button>
            <motion.button
                initial={{
                    x: -36,
                }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute bottom-20 left-1/2 z-40 hidden rounded-xl border-2 border-transparent transition-all duration-300 hover:border-white md:flex"
                onClick={() =>
                    scrollTo({ top: 704 * section, behavior: 'smooth' })
                }
            >
                <ChevronDown className="h-10 w-10" strokeWidth={'4px'} />
            </motion.button>
        </>
    )
}
