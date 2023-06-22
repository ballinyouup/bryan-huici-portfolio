import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './button'
import Link from 'next/link'

interface NavButtonProps {
    href: string
    name: string
    children?: React.ReactNode
    title?: boolean
}

const NavButton: React.FC<NavButtonProps> = ({
    href,
    name,
    children,
    title = false,
}) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Button
            variant={'ghost'}
            className="flex items-center gap-2 text-lg font-bold uppercase"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{ y: isHovered ? [0, -3, 0] : 0 }}
                transition={{
                    duration: 0.25,
                }}
            >
                {children}
            </motion.div>
            <Link href={href} className={title ? 'text-2xl font-bold' : ''}>
                {name}
            </Link>
        </Button>
    )
}

export default NavButton
