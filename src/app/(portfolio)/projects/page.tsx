import ProjectsLoading from '@/components/ui/projects-loading'
import { Suspense } from 'react'
import Projects from '@/components/ui/projects'
import type { Image as SanityImage } from 'sanity'
import { client } from '../../../../sanity/lib/client.mts'
import Image from "next/image"
import { urlForImage } from '../../../../sanity/lib/image'
import { GithubIcon, Globe, ArrowRightToLine } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import PortableTextComponent from '@/components/ui/portable-text-component'
import NavButton from '@/components/ui/nav-button'

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

export default async function Page() {
    // await wait(5000)
    const projects: Projects[] = await client.fetch(`*[_type == "projects"]{
		"author": author->name, "slug": slug.current, "description": description, title, "image": mainImage, "alt": mainImage.alt, link, github, "keywords": keywords[]->title
	  }`)
    return (
        <div className="pt-20">
            <Suspense fallback={<ProjectsLoading />}>
            <div className="flex w-full flex-col items-center gap-8 p-8 md:h-desktop md:p-12">
            <div className="flex w-full max-w-5xl">
                <span className="text-[10vw] sm:text-6xl font-bold">PROJECTS</span>
            </div>
            <div className="flex w-full flex-col items-center text-white gap-10">
                {projects.map((project) => {
                    return (
                        <div
                            className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start"
                            key={project.slug}
                        >
                            {project.image ? (
                                <Image
                                    src={urlForImage(project.image)
                                        .width(320)
                                        .height(320)
                                        .minHeight(320)
                                        .minWidth(320)
                                        .fit('min')
                                        .auto('format')
                                        .url()}
                                    alt={project.image.alt as string}
                                    width={320}
                                    height={320}
                                />
                            ) : null}
                            <div className="flex w-full md:h-full flex-col place-content-between gap-2 md:w-1/2">
                                <div className="flex md:h-full w-full flex-col items-start gap-4">
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
                                                .slice(0, 4)
                                                .map((keyword) => {
                                                    return (
                                                        <Badge key={keyword}>
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
                                <div className="hidden flex-row flex-wrap items-start gap-2 whitespace-nowrap md:flex">
                                    <NavButton
                                        href={project.link ?? ''}
                                        name="Site"
                                    >
                                        <Globe className="h-5 w-5" />
                                    </NavButton>
                                    <NavButton
                                        href={project.github ?? ''}
                                        name="Github"
                                    >
                                        <GithubIcon className="h-5 w-5" />
                                    </NavButton>
                                    <NavButton
                                        href={`/projects/${project.slug}` ?? ''}
                                        name="Learn More"
                                    >
                                        <ArrowRightToLine className="h-5 w-5" />
                                    </NavButton>
                                </div>
                                <div className="flex w-full flex-col items-start gap-2 md:hidden">
                                    <NavButton
                                        href={project.link ?? ''}
                                        name="Site"
                                        variant={'default'}
                                        className="w-full"
                                    >
                                        <Globe className="h-5 w-5" />
                                    </NavButton>
                                    <NavButton
                                        href={project.github ?? ''}
                                        name="Github"
                                        variant={'default'}
                                        className="w-full"
                                    >
                                        <GithubIcon className="h-5 w-5" />
                                    </NavButton>
                                    <NavButton
                                        href={`/projects/${project.slug}` ?? ''}
                                        name="Learn More"
                                        variant={'default'}
                                        className="w-full"
                                    >
                                        <ArrowRightToLine className="h-5 w-5" />
                                    </NavButton>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
            </Suspense>
        </div>
    )
}
