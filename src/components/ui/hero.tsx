import DownArrow from './down-arrow'

export default function Hero() {
    return (
        <div className="relative flex h-phone flex-col items-center justify-center overflow-x-clip md:h-desktop">
            <div className="z-30 flex h-full flex-col justify-center gap-4 p-8 items-start sm:p-6 md:p-4">
                <h3 className="-ml-1 grid w-full grid-flow-row text-[20vw] font-semibold sm:text-8xl md:grid-flow-col">
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
            <div className="absolute left-1/4 top-1/2 z-20 h-full w-full -translate-y-1/2 translate-x-1/4 gap-4 opacity-90">
                <div className="h-full w-full animate-pulse rounded-full bg-accent !blur-[96px] !brightness-200" />
            </div>
            <DownArrow />
        </div>
    )
}
