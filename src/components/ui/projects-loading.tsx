import { Skeleton } from './skeleton'
export default function ProjectsLoading() {
    return (
        <div className="flex h-full w-full flex-col items-center gap-8">
            <div className="flex w-full flex-col items-center gap-10 text-white">
                <div className="!z-40 flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-xl bg-accent/40 p-4 md:flex-row md:items-start md:justify-start">
                    <Skeleton className="h-[320px] w-full min-w-[320px]" />
                    <div className="flex w-full flex-col gap-2 md:w-[480px]">
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
                <div className="!z-40 flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-xl bg-accent/40 p-4 md:flex-row md:items-start md:justify-start">
                    <Skeleton className="h-[320px] w-full min-w-[320px]" />
                    <div className="flex w-full flex-col gap-2 md:w-[480px]">
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
