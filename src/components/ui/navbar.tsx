'use client'
import { Dribbble, FolderGit2, Home, ScrollText } from 'lucide-react'
import NavButton from './nav-button'
import MobileMenu from './mobile-menu'

export default function Navbar() {
    return (
        <nav className="absolute z-30 flex w-full place-content-between bg-background p-4 shadow shadow-black">
            <NavButton href="/" name="B" title>
                <Dribbble className="h-5 w-5" />
            </NavButton>
            <div className="hidden gap-2 md:flex">
                <NavButton href="/" name="Home">
                    <Home className="-mt-0.5 h-5 w-5" />
                </NavButton>
                <NavButton href="/projects" name="Projects">
                    <FolderGit2 className="-mt-0.5 h-5 w-5" />
                </NavButton>
                <NavButton href="/resume" name="Resumé">
                    <ScrollText className="-mt-0.5 h-5 w-5" />
                </NavButton>
            </div>
            <div className="flex md:hidden">
                <MobileMenu />
            </div>
        </nav>
    )
}
