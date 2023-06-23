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
            <div className="absolute top-1/2 z-10 flex h-full w-full -translate-y-1/4 translate-x-1/4 flex-col items-start justify-start gap-4 blur-xl md:-translate-y-1/2 md:justify-center">
                <div className="h-1/2 w-1/2 rounded-full bg-accent !blur-[96px] !brightness-200 md:!blur-[196px]" />
            </div>
            <DownArrow />
        </div>
    )
}
