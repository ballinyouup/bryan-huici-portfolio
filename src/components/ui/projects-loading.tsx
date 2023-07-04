import { Skeleton } from './skeleton';
export default function ProjectsLoading() {
    return (
        <div className="flex w-full flex-col items-center text-white gap-10">
            <div className="flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 p-4 md:flex-row md:items-start md:justify-start bg-accent/40 rounded-xl !z-40">
                <Skeleton className="h-[320px] w-full min-w-[320px]" />
                <div className="flex w-full md:w-[480px] flex-col gap-2">
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
            <div className="flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 p-4 md:flex-row md:items-start md:justify-start bg-accent/40 rounded-xl !z-40">
                <Skeleton className="h-[320px] w-full min-w-[320px]" />
                <div className="flex w-full md:w-[480px] flex-col gap-2">
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
    );
}
