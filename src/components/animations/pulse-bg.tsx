'use client';
import { motion } from 'framer-motion'

export default function PulseBg({reverse = false}: {reverse: boolean}) {
    const variants = {
        hidden: { x: reverse ? "100%" : "-100%" },
        visible: { x: reverse ? "-100%" : "100%" },
    }
    return (
        <>
            <motion.div
                initial={'hidden'}
                animate={'visible'}
                exit={'exit'}
                transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
                variants={variants}
                className='w-full bg-gradient-to-r from-background via-secondary to-background h-full z-20 absolute'
            />
            <div className="overlay"></div>
            <div className="overlay-2 rotate-90"></div>
        </>
    );
}
