'use client'
import { Dribbble, FolderGit2, Home, ScrollText } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import NavButton from './nav-button'
export default function Navbar() {
    return (
        <nav className="relative z-30 flex w-full place-content-between p-4 shadow shadow-black">
            <div className="flex items-center gap-2">
                <Dribbble className="h-6 w-6" />
                <h1 className="text-2xl font-bold uppercase">Bryan Huici</h1>
            </div>
            <div className="flex gap-2">
                <ThemeToggle />
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
        </nav>
    )
}
