'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useId } from 'react'

export default function SnapContainer({
    children,
    index = 0,
}: {
    children?: React.ReactNode
    index?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    }
    return (
        <AnimatePresence>
            <motion.div
                animate={isInView ? 'visible' : 'hidden'}
                exit={'hidden'}
                transition={{
                    duration: 0.1,
                    ease: 'easeOut',
                    delay: index * 0.05,
                }}
                variants={variants}
                ref={ref}
                key={useId()}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
