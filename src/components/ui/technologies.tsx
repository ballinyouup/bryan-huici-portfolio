import Image from 'next/image';
import DownArrow from './down-arrow';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './tooltip';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import SnapContainer from '../animations/snap-container';
import PulseBg from '../animations/pulse-bg';
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
            src: '/go.svg',
            alt: 'Go',
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
            padding: true,
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
            src: '/git.svg',
            alt: 'Git',
        },
        {
            src: '/gcp.svg',
            alt: 'GCP',
        },
        {
            src: '/aws.svg',
            alt: 'AWS',
            invert: true
        },
        {
            src: '/nextauth.png',
            alt: 'NextAuth',
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
    ];
    //If I need to manipulate the image, div above tooltiptrigger
    //[&>:first-child]:hover:!grayscale-0
    return (
        <div className="relative flex h-full min-h-phone w-full snap-start items-start justify-center pb-40 sm:h-desktop sm:pb-0">
            <div className="flex flex-col w-fit h-fit items-center justify-center gap-8">
                <div className="flex w-fit flex-col items-center justify-center gap-2 p-4 text-center z-40">
                    <div className="flex flex-col">
                        <h3 className="text-[10vw] md:text-6xl">TECHNOLOGIES</h3>
                        <span className="font-medium">
                            These are the technologies I&apos;ve used to create my
                            projects
                        </span>
                    </div>

                    <div className="hidden w-full max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:flex">
                        <TooltipProvider>
                            {tech.map((item, index) => (
                                <Tooltip delayDuration={0} key={item.src}>
                                    <SnapContainer index={index} key={item.src}>
                                        <div className="z-20 h-24 w-24 overflow-hidden rounded-2xl transition-transform hover:z-10 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-slate-700">
                                            <TooltipTrigger className="relative flex h-full w-full cursor-default items-center justify-center overflow-hidden">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className={cn(
                                                        item.invert ? 'invert' : '',
                                                        item.padding ? 'p-1.5' : '',
                                                        'object-cover'
                                                    )}
                                                    fill
                                                    sizes="(max-width: 1024px) 96px, 120px"
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.alt}</p>
                                            </TooltipContent>
                                        </div>
                                    </SnapContainer>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>

                    {/** MOBILE TECH */}
                    <div className="flex flex-col gap-2 sm:hidden">
                        <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
                            {tech.map((item, index) => (
                                <Popover key={item.src}>
                                    <SnapContainer index={index} key={item.alt}>
                                        <div className="z-20 h-20 w-20 overflow-hidden rounded-2xl">
                                            <PopoverTrigger className="relative flex h-full w-full items-center justify-center">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className={cn(
                                                        item.invert ? 'invert' : '',
                                                        item.padding ? 'p-1.5' : '',
                                                        'object-cover'
                                                    )}
                                                    height={70}
                                                    width={70}
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <p>{item.alt}</p>
                                            </PopoverContent>
                                        </div>
                                    </SnapContainer>
                                </Popover>
                            ))}
                        </div>
                    </div>

                </div>
                <DownArrow section={2} />
            </div>
            <PulseBg reverse={true} />

        </div>
    );
};

export default Technologies;
