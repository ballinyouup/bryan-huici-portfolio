import DownArrow from './down-arrow'

export default function Hero() {
    return (
        <div className="relative flex h-desktop flex-col items-center justify-center overflow-x-clip">
            <div className="z-20 flex h-full flex-col items-start justify-center gap-4 p-4 sm:p-6 md:p-4">
                <h3 className="-ml-1 grid w-full grid-flow-row text-8xl font-semibold md:grid-flow-col">
                    <span>BRYAN</span>
                    <span className="hidden text-5xl md:flex">&nbsp;</span>
                    <span>HUICI</span>
                </h3>
                <p className="grid w-fit grid-flow-row text-3xl font-semibold md:grid-flow-col">
                    <span>Front-End</span>
                    <span className="hidden md:flex">/</span>
                    <span>Full-Stack</span>
                    <span className="hidden text-base md:flex">&nbsp;</span>
                    <span>Software Engineer</span>
                </p>
            </div>
            <div className="absolute -left-1/4 top-1/2 z-10 flex h-full w-full translate-x-1/4 flex-col items-start gap-4 blur-xl -translate-y-1/2 justify-center">
                <div className="h-full w-full rounded-full bg-accent !blur-[96px] !brightness-125 md:!blur-[128px]" />
            </div>
            <DownArrow />
        </div>
    )
}
