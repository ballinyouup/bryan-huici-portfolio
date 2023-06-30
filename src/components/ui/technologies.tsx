import Image from 'next/image'
import DownArrow from './down-arrow'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './tooltip'

import { Popover, PopoverContent, PopoverTrigger } from './popover'
const Technologies = () => {
    const tech = [
        {
            src: '/typescript.svg',
            alt: 'Typescript',
        },
        {
            src: '/javascript.svg',
            alt: 'Javascript',
        },
        {
            src: '/python.svg',
            alt: 'Python',
        },
        {
            src: '/java.svg',
            alt: 'Java',
        },
        {
            src: '/nextjs.svg',
            alt: 'NextJS',
            invert: true,
        },
        {
            src: '/react.svg',
            alt: 'React',
        },
        {
            src: '/html.svg',
            alt: 'HTML',
        },
        {
            src: '/css.svg',
            alt: 'CSS',
        },
        {
            src: '/tailwind.svg',
            alt: 'Tailwind',
        },
        {
            src: '/docker.svg',
            alt: 'Docker',
        },
        {
            src: '/cloudrun.svg',
            alt: 'Cloud Run',
        },
        {
            src: '/cloudbuild.svg',
            alt: 'Cloud Build',
        },
        {
            src: '/git.svg',
            alt: 'Git',
        },
        {
            src: '/cicd.svg',
            alt: 'CI/CD',
            invert: true,
        },
        {
            src: '/artifact.svg',
            alt: 'Artifact Registry',
        },
        {
            src: '/actions.svg',
            alt: 'GH Actions',
            invert: true,
        },
        {
            src: '/nextauth.png',
            alt: 'NextAuth',
            padding: true
        },
        {
            src: '/reactquery.svg',
            alt: 'React Query',
        },
        {
            src: '/trpc.svg',
            alt: 'tRPC',
        },
        {
            src: '/prisma.svg',
            alt: 'Prisma',
            invert: true,
        },
    ]
    //If I need to manipulate the image, div above tooltiptrigger
    //[&>:first-child]:hover:!grayscale-0
    return (
        <div className="relative z-20 flex h-full min-h-phone w-full items-start justify-center pb-40 sm:h-desktop sm:pb-0">
            <div className="flex w-fit flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-[10vw] md:text-6xl">TECHNOLOGIES</h3>
                <div className="hidden w-full max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:flex">
                    <TooltipProvider>
                        {tech.map((item) => (
                            <Tooltip delayDuration={0} key={item.src}>
                                <div className="z-20 h-24 w-24 overflow-hidden rounded-2xl border-4 border-transparent transition-transform hover:z-10 hover:-translate-y-2 hover:scale-105 hover:border-teal-400 hover:shadow-xl hover:shadow-slate-700">
                                    <TooltipTrigger className="relative flex h-full w-full cursor-default items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            className={`${item.invert ? 'invert' : ''} ${item.padding ? 'p-2' : ''} object-cover`}
                                            fill
                                            sizes="(max-width: 1024px) 96px, 120px"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.alt}</p>
                                    </TooltipContent>
                                </div>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </div>
                {/** MOBILE TECH */}
                <div className="flex w-full h-phone flex-wrap items-center justify-center gap-1.5 p-4 sm:hidden">
                    <span>These are the technologies I've used to create my projects</span>
                    {tech.map((item) => (
                        <Popover key={item.src}>
                            <div className="z-20 h-20 w-20 overflow-hidden rounded-2xl">
                                <PopoverTrigger className="relative flex h-full w-full items-center justify-center">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        className={`${item.invert ? 'invert' : ''} ${item.padding ? 'p-2' : ''} object-cover`}
                                        height={70}
                                        width={70}
                                    />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <p>{item.alt}</p>
                                </PopoverContent>
                            </div>
                        </Popover>
                    ))}
                </div>
            </div>
            <DownArrow />
        </div>
    )
}

export default Technologies
