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
                className="absolute bottom-20 left-[49%] z-10"
            >
                <ChevronDown
                    className="h-10 w-10 rounded-full"
                    strokeWidth={'4px'}
                />
            </motion.div>
        </div>
    )
}
