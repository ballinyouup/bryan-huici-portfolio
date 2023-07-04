"use client";
import { motion } from 'framer-motion';

export default function PulseBg() {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: [0, 0.15, 0] }
    };
    return (
        <motion.div
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            transition={{ ease: "linear", duration: 4, repeat: Infinity }}
            variants={variants}
        >
            <div className="overlay"></div>
            <div className="overlay-2 rotate-90"></div>
        </motion.div>
    );
}
