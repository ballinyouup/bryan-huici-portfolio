'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react'

export function GradualSpacing() {
    const text = 'Bryan Huici'
    const gradual = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    }
    const ref = useRef(null);
    const isInView = useInView(ref)
    return (
        <AnimatePresence>
            <div className="z-30 -ml-1 grid w-full grid-flow-row md:grid-flow-col" ref={ref}>
            <div className="flex">
                {text
                    .split(' ')[0]
                    .split('')
                    .map((char, i) => {
                        return (
                            <motion.h3
                                key={i}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                exit="hidden"
                                variants={gradual}
                                transition={{ duration: isInView ? 0.5 : 0, delay: isInView ? (i * 0.1) : 0 }}
                                className="font-display text-6xl text-[20vw] font-bold uppercase drop-shadow-sm sm:text-8xl"
                            >
                                {char}
                            </motion.h3>
                        )
                    })}
            </div>
                <div className="hidden md:flex">
                <motion.h3
                    key={text.indexOf(' ')}
                    initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    exit="hidden"
                    variants={gradual}
                    transition={{
                        duration: isInView ? 0.5 : 0,
                        delay: isInView ? (text.indexOf(' ') * 0.1) : 0,
                    }}
                    className="font-display text-6xl text-[20vw] font-bold uppercase drop-shadow-sm sm:text-8xl"
                >
                    &nbsp;
                </motion.h3>
            </div>
            <div className="flex">
                {text
                    .split(' ')[1]
                    .split('')
                    .map((char, i) => {
                        return (
                            <motion.h3
                                key={i}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                exit="hidden"
                                variants={gradual}
                                transition={{
                                    duration: isInView ? 0.5 : 0,
                                    delay: isInView ? ((i + text.indexOf(' ') + 1) * 0.1) : 0,
                                }}
                                className="font-display text-6xl text-[20vw] font-bold uppercase drop-shadow-sm sm:text-8xl"
                            >
                                {char}
                            </motion.h3>
                        )
                    })}
            </div>
        </div>
        </AnimatePresence>
    )
}
