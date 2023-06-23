import DownArrow from './down-arrow'

export default function Hero() {
    return (
        <div className="relative flex h-phone md:h-desktop flex-col items-center justify-center overflow-x-clip">
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
            <div className="absolute left-1/4 top-1/2 z-20 h-full w-full -translate-y-1/4 translate-x-1/4 gap-4 opacity-30">
                <div className="h-1/2 w-full rounded-full bg-accent !blur-[64px] !brightness-200" />
            </div>
            <DownArrow />
        </div>
    )
}
