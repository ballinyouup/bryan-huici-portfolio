import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="relative h-full">
            <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <span className="text-5xl">Not Found</span>
                <Link href="/projects" className="text-lg underline">
                    Return to Projects
                </Link>
            </div>
        </div>
    )
}
