import DownArrow from './down-arrow'
import { GradualSpacing } from '../animations/hero-text'
import PulseBg from '../animations/pulse-bg';
export default function Hero() {
    return (
        <div className="relative flex h-phone snap-start flex-col items-center justify-center overflow-x-clip md:h-desktop">
            <div className="z-30 flex h-fit flex-col items-start justify-center gap-4 p-8 sm:p-6 md:p-4">
                <GradualSpacing />
                <p className="grid w-fit grid-flow-row text-3xl font-semibold md:grid-flow-col">
                    <span>Front-End</span>
                    <span className="hidden md:flex">/</span>
                    <span>Full-Stack</span>
                    <span className="hidden text-base md:flex">&nbsp;</span>
                    <span>Software Engineer</span>
                </p>
            </div>
            <PulseBg reverse={false}/>
            <DownArrow section={1} />
        </div>
    )
}
