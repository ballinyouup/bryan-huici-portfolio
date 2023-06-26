import Image from 'next/image'
import { client } from '../../../sanity/lib/client.mts'
import { urlForImage } from '../../../sanity/lib/image'
import type { Image as SanityImage } from 'sanity'
interface Projects {
    title?: string
    image?: SanityImage
    author?: string
    slug?: string
    body?: string
    alt?: string
}

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Projects() {
    await wait(5000)
    const projects: Projects[] = await client.fetch(`*[_type == "projects"]{
		"author": author->name, "slug": slug.current, "body": body[0].children[0].text, title, "image": mainImage, "alt": mainImage.alt
	  }`)
    return (
        <div className="flex h-desktop w-full flex-col items-center gap-8  p-12">
            <span className="text-6xl font-bold">PROJECTS</span>
            <div className="flex h-full w-full flex-col items-center p-5 text-white">
                {projects.map((project) => {
                    return (
                        <div
                            className="flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:items-start sm:justify-start"
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
                            <div className="flex w-full flex-col items-start">
                                <h4 className="font-bold uppercase">
                                    {project.title}
                                </h4>
                                <span className="text-xl">
                                    By: {project.author}
                                </span>
                                <div className="text-ellipsis text-xl">
                                    <span>{project.body}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
