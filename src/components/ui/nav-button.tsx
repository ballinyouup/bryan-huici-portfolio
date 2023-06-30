'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
interface NavButtonProps {
    href: string
    name: string
    children?: React.ReactNode
    title?: boolean
    variant?:
        | 'ghost'
        | 'link'
        | 'outline'
        | 'default'
        | 'destructive'
        | 'secondary'
        | null
        | undefined
    className?: string
    full?: boolean
}

const NavButton: React.FC<NavButtonProps> = ({
    href,
    name,
    children,
    title = false,
    variant,
    className,
    full = false
}) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Link href={href} className={`${title ? 'text-2xl font-bold' : ''} ${full ? "w-full" : ""}`}>
            <Button
                variant={variant ?? 'ghost'}
                className={cn(
                    'flex items-center gap-2 text-lg font-bold uppercase',
                    full ? "w-full" : "",
                    className
                )}
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
                <span>{name}</span>
            </Button>
        </Link>
    )
}

export default NavButton
