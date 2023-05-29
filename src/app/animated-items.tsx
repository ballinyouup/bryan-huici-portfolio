'use client'
import { motion } from 'framer-motion'
const AnimatedItems = () => {
    return (
        <>
            <motion.div
                animate={{
                    width: ['0%', '110%'],
                }}
                transition={{
                    duration: 3,
                    ease: 'linear',
                }}
                className="absolute -left-10 top-[0%] z-10 h-1/5 bg-primary"
            />
            <motion.div
                animate={{
                    width: ['0%', '110%'],
                }}
                transition={{
                    duration: 3,
                    delay: 0.25,
                    ease: 'linear',
                }}
                className="absolute -left-10 top-[20%] z-10 h-1/5 bg-primary"
            />
            <motion.div
                animate={{
                    width: ['0%', '110%'],
                }}
                transition={{
                    duration: 3,
                    delay: 0.5,
                    ease: 'linear',
                }}
                className="absolute -left-10 top-[40%] z-10 h-1/5 bg-primary"
            />
            <motion.div
                animate={{
                    width: ['0%', '110%'],
                }}
                transition={{
                    duration: 3,
                    delay: 0.75,
                    ease: 'linear',
                }}
                className="absolute -left-10 top-[60%] z-10 h-1/5 bg-primary"
            />
            <motion.div
                animate={{
                    width: ['0%', '110%'],
                }}
                transition={{
                    duration: 3,
                    delay: 1,
                    ease: 'linear',
                }}
                className="absolute -left-10 top-[80%] z-10 h-1/5 bg-primary"
            />
            <motion.span
                animate={{
                    opacity: [0, 1],
                    left: ['0%', '25%'],
                }}
                transition={{
                    delay: 2,
                    duration: 2,
                }}
                className="absolute left-1/4 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold uppercase text-primary-foreground"
            >
                Front-end
                <br />
                Full stack
            </motion.span>
            <motion.div
                animate={{
                    left: ['0%', '100%'],
                }}
                transition={{
                    delay: 2,
                    duration: 3,
                }}
                className="absolute z-20 h-40 w-40 bg-accent"
            />
        </>
    )
}

export default AnimatedItems
