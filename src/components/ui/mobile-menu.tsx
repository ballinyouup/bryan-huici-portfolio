'use client'

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './sheet'
import Link from 'next/link'
import { FolderGit2, Home, Menu, ScrollText, FileType2 } from 'lucide-react'
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
            <SheetContent className="flex w-full flex-col text-3xl font-bold uppercase">
                <SheetTitle className="text-[10vw]">Bryan Huici</SheetTitle>
                <Link
                    href="/"
                    className="flex items-center gap-4"
                    onClick={handleOpen}
                >
                    <Home className="h-6 w-6" />
                    <span>Home</span>
                </Link>
                <Link
                    href="/blog"
                    className="flex items-center gap-4"
                    onClick={handleOpen}
                >
                    <FileType2 className="h-6 w-6" />
                    <span>Blog</span>
                </Link>
                <Link
                    href="/projects"
                    className="flex items-center gap-4"
                    onClick={handleOpen}
                >
                    <FolderGit2 className="h-6 w-6" />
                    <span>Projects</span>
                </Link>
                <Link
                    href="/resume"
                    className="flex items-center gap-4"
                    onClick={handleOpen}
                >
                    <ScrollText className="h-6 w-6" />
                    <span>Resumé</span>
                </Link>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
