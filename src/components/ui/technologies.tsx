import Image from 'next/image'
import DownArrow from './down-arrow'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './tooltip'
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
            src: '/django.svg',
            alt: 'Django',
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
        },
        {
            src: '/artifacts.svg',
            alt: 'Artifact Registry',
        },
        {
            src: '/actions.png',
            alt: 'Github Actions',
        },
        {
            src: '/nextauth.svg',
            alt: 'NextAuth',
        },
        {
            src: '/reactquery.svg',
            alt: 'React Query',
        },
        {
            src: '/prisma.svg',
            alt: 'Prisma',
        },
    ]
    return (
        <div className="relative z-20 flex h-phone w-full items-start justify-center sm:h-desktop">
            <div className="flex w-fit flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-[10vw] md:text-6xl">TECHNOLOGIES</h3>
                <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-3 p-8">
                    <TooltipProvider>
                        {tech.map((item) => (
                            <Tooltip delayDuration={0} key={item.src}>
                                <div className="z-20 h-[76px] w-[76px] overflow-hidden rounded-lg bg-white transition-all duration-200 hover:z-10 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-slate-700">
                                    <TooltipTrigger>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            height={76}
                                            width={76}
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
            </div>
            <DownArrow />
        </div>
    )
}

export default Technologies
