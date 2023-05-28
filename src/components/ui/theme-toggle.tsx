'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button, type ButtonProps } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
export function ThemeToggle({ ...props }: ButtonProps) {
    const { setTheme, theme } = useTheme()
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Button
            {...props}
            variant={'ghost'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-1.5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{ rotate: isHovered ? [0, 360] : 0 }}
                transition={{
                    duration: 0.5,
                }}
                className="relative"
            >
                <Icons.moon className="h-7 w-7 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                <Icons.sun className="absolute bottom-0 left-0 right-0 top-0 m-auto h-7 w-7 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </motion.div>
        </Button>
    )
}
