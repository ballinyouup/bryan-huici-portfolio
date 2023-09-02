import { client } from '../../../sanity/lib/client.mts'
import type { Image as SanityImage } from 'sanity'
import NavButton from '@/components/ui/nav-button'
import { GithubIcon, Globe, ArrowRightToLine } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import PortableTextComponent from './portable-text-component'
import ModalImage from './modal-image'
import UpArrow from './up-arrow'
import { wait } from '@/lib/utils'

interface Projects {
    title?: string
    image?: SanityImage
    author?: string
    slug?: string
    alt?: string
    description?: string
    link?: string
    github?: string
    keywords?: string[]
}

export default async function HomeProjects() {
    await wait(5000)
    const projects: Projects[] = await client.fetch(`*[_type == "projects"]{
		"author": author->name, "slug": slug.current, "description": description, title, "image": mainImage, "alt": mainImage.alt, link, github, "keywords": keywords[]->title
	  }`)
    return (
        <div className="flex h-full w-full snap-start flex-col items-center gap-8 p-8 lg:p-12">
            <div className="z-30 flex w-full max-w-5xl">
                <span className="text-[10vw] font-bold sm:text-6xl">
                    PROJECTS
                </span>
            </div>
            <div className="flex w-full flex-col items-center gap-10 text-white">
                {projects
                    .reverse()
                    .slice(0, 2)
                    .map((project) => {
                        return (
                            <div
                                className="relative z-30 flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-xl bg-accent p-4 lg:flex-row lg:items-start lg:justify-start"
                                key={project.slug}
                            >
                                <span className="absolute left-2 top-2 !z-50 flex h-5 w-5">
                                    <span className="absolute inline-flex h-full w-full animate-ping-2 rounded-full bg-sky-400"></span>
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400"></span>
                                </span>
                                {project.image ? (
                                    <ModalImage
                                        image={project.image}
                                        alt={project.alt as string}
                                    />
                                ) : null}

                                <div className="flex w-full flex-col place-content-between gap-2 rounded-xl bg-secondary/40 p-4 lg:h-80 lg:w-1/2">
                                    <div className="flex w-full flex-col items-start gap-4 lg:h-full">
                                        <div className="flex w-full flex-col">
                                            <h4 className="font-bold uppercase">
                                                {project.title}
                                            </h4>
                                            <span className="text-xl">
                                                By: {project.author}
                                            </span>
                                        </div>
                                        {project.keywords ? (
                                            <div className="flex gap-2">
                                                {project.keywords
                                                    .slice(0, 3)
                                                    .map((keyword) => {
                                                        return (
                                                            <Badge
                                                                key={keyword}
                                                            >
                                                                {keyword}
                                                            </Badge>
                                                        )
                                                    })}
                                            </div>
                                        ) : null}

                                        <PortableTextComponent
                                            value={project.description ?? {}}
                                            onMissingComponent={false}
                                            key={project.description}
                                        />
                                    </div>
                                    <div className="hidden flex-row flex-wrap items-start whitespace-nowrap lg:flex">
                                        <NavButton
                                            href={project.link ?? ''}
                                            name="Site"
                                        >
                                            <Globe className="h-5 w-5" />
                                        </NavButton>
                                        <NavButton
                                            href={project.github ?? ''}
                                            name="GH"
                                        >
                                            <GithubIcon className="h-5 w-5" />
                                        </NavButton>
                                        <NavButton
                                            href={
                                                `/projects/${project.slug}` ??
                                                ''
                                            }
                                            name="More"
                                        >
                                            <ArrowRightToLine className="h-5 w-5" />
                                        </NavButton>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 lg:hidden">
                                        <NavButton
                                            href={project.link ?? ''}
                                            name="Site"
                                            variant={'default'}
                                            full
                                        >
                                            <Globe className="h-5 w-5" />
                                        </NavButton>
                                        <NavButton
                                            href={project.github ?? ''}
                                            name="Github"
                                            variant={'default'}
                                            full
                                        >
                                            <GithubIcon className="h-5 w-5" />
                                        </NavButton>
                                        <NavButton
                                            href={
                                                `/projects/${project.slug}` ??
                                                ''
                                            }
                                            name="Learn More"
                                            variant={'default'}
                                            full
                                        >
                                            <ArrowRightToLine className="h-5 w-5" />
                                        </NavButton>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

            <NavButton
                href="/projects"
                name="See More"
                variant={'default'}
                className="w-full"
            >
                <ArrowRightToLine className="h-5 w-5" />
            </NavButton>
            <UpArrow />
        </div>
    )
}
