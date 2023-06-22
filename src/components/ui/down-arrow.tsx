'use client'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
export default function DownArrow() {
    return (
        <div>
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute bottom-20 left-1/2 z-10"
            >
                <ChevronDown className="h-8 w-8 rounded-full" />
            </motion.div>
        </div>
    )
}
