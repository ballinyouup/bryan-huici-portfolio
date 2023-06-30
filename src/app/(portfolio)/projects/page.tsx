import ProjectsLoading from '@/components/ui/projects-loading'
import { Suspense } from 'react'
import Projects from '@/components/ui/projects'
import type { Image as SanityImage } from 'sanity'
import { client } from '../../../../sanity/lib/client.mts'
import Image from 'next/image'
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
                <div className="flex h-full w-full flex-col items-center gap-8 p-8 lg:h-desktop lg:p-12">
                    <div className="flex w-full max-w-5xl">
                        <span className="text-[10vw] font-bold sm:text-6xl">
                            PROJECTS
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-center gap-10 text-white">
                        {projects.map((project) => {
                            return (
                                <div
                                    className="flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 lg:flex-row lg:items-start p-4 lg:justify-start bg-accent rounded-xl"
                                    key={project.slug}
                                >
                                    <div className="h-80 overflow-hidden rounded-xl w-full">
                                        {project.image ? (
                                            <Image
                                                src={urlForImage(project.image)
                                                    .width(1600)
                                                    .height(1600)
                                                    .fit('max')
                                                    .auto('format')
                                                    .url()}
                                                alt={
                                                    project.image.alt as string
                                                }
                                                width={1024}
                                                height={1024}
                                            />
                                        ) : null}
                                    </div>
                                    <div className="flex w-full flex-col place-content-between gap-2 lg:h-full lg:w-1/2 bg-secondary/40 p-4 rounded-xl">
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
                                                        .slice(0, 4)
                                                        .map((keyword) => {
                                                            return (
                                                                <Badge
                                                                    key={
                                                                        keyword
                                                                    }
                                                                >
                                                                    {keyword}
                                                                </Badge>
                                                            )
                                                        })}
                                                </div>
                                            ) : null}

                                            <PortableTextComponent
                                                value={
                                                    project.description ?? {}
                                                }
                                                onMissingComponent={false}
                                                key={project.description}
                                            />
                                        </div>
                                        <div className="hidden flex-row flex-wrap items-start gap-2 whitespace-nowrap lg:flex">
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
                                                href={
                                                    `/projects/${project.slug}` ??
                                                    ''
                                                }
                                                name="Learn More"
                                            >
                                                <ArrowRightToLine className="h-5 w-5" />
                                            </NavButton>
                                        </div>
                                        <div className="flex w-full flex-col items-start gap-2 lg:hidden">
                                            <NavButton
                                                href={project.link ?? ''}
                                                name="Site"
                                                variant={'default'}
                                                className="w-full"
                                                full
                                            >
                                                <Globe className="h-5 w-5" />
                                            </NavButton>
                                            <NavButton
                                                href={project.github ?? ''}
                                                name="Github"
                                                variant={'default'}
                                                className="w-full"
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
                                                className="w-full"
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
                </div>
            </Suspense>
        </div>
    )
}
