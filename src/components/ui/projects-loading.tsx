import { Skeleton } from './skeleton'
export default function ProjectsLoading() {
    return (
        <div className="flex h-desktop w-full flex-col items-center gap-8 bg-gray-900 p-12">
            <span className="text-6xl font-bold">PROJECTS</span>
            <div className="flex w-full flex-col items-center p-5 text-white">
                <div className="flex h-fit w-full max-w-5xl gap-4 border border-white bg-accent p-4">
                    <Skeleton className="h-[320px] w-[320px] min-w-[320px]" />
                    <div className="flex w-full flex-col gap-2">
                        <Skeleton className="h-9 w-64" />
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-11/12" />
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-11/12" />
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-11/12" />
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-6 w-11/12" />
                    </div>
                </div>
            </div>
        </div>
    )
}
