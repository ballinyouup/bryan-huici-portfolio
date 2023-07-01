'use client'
import { motion } from 'framer-motion'

export function GradualSpacing() {
    const text = 'Bryan Huici'
    const gradual = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div className="z-30 -ml-1 grid w-full grid-flow-row md:grid-flow-col">
            <div className="flex">
                {text
                    .split(' ')[0]
                    .split('')
                    .map((char, i) => {
                        return (
                            <motion.h3
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={gradual}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="font-display text-6xl text-[20vw] font-bold uppercase drop-shadow-sm sm:text-8xl"
                            >
                                {char}
                            </motion.h3>
                        )
                    })}
            </div>
            <div className="hidden sm:flex">
                <motion.h3
                    key={text.indexOf(' ')}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={gradual}
                    transition={{
                        duration: 0.5,
                        delay: text.indexOf(' ') * 0.1,
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
                                animate="visible"
                                exit="hidden"
                                variants={gradual}
                                transition={{
                                    duration: 0.5,
                                    delay: (i + text.indexOf(' ') + 1) * 0.1,
                                }}
                                className="font-display text-6xl text-[20vw] font-bold uppercase drop-shadow-sm sm:text-8xl"
                            >
                                {char}
                            </motion.h3>
                        )
                    })}
            </div>
        </div>
    )
}
