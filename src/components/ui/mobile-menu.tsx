'use client'

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './sheet'
import Link from 'next/link'
import { FolderGit2, Home, Menu, ScrollText } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { useState } from 'react'

const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(!open)
    }
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <Menu className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col text-2xl">
                <SheetTitle className="text-3xl">Bryan Huici</SheetTitle>
                <Link
                    href="/"
                    className="flex items-center gap-1 p-1"
                    onClick={handleOpen}
                >
                    <Home className="h-6 w-6" />
                    <span>Home</span>
                </Link>
                <Link
                    href="/projects"
                    className="flex items-center gap-1 p-1"
                    onClick={handleOpen}
                >
                    <FolderGit2 className="h-6 w-6" />
                    <span>Projects</span>
                </Link>
                <Link
                    href="/resume"
                    className="flex items-center gap-1 p-1"
                    onClick={handleOpen}
                >
                    <ScrollText className="h-6 w-6" />
                    <span>Resumé</span>
                </Link>
                <ThemeToggle variant={'default'} />
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
