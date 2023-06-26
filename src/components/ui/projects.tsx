'use client'
import Image from 'next/image'
import { client } from '../../../sanity/lib/client.mts'
import { urlForImage } from '../../../sanity/lib/image'
import type { Image as Image2 } from 'sanity'
interface Projects {
    title?: string
    image?: Image2
    author?: string
    slug?: string
    body?: string
    alt?: string
}

export default async function Projects() {
    const projects: Projects[] = await client.fetch(`*[_type == "projects"]{
		"author": author->name, "slug": slug.current, "body": body[0].children[0].text, title, "image": mainImage, "alt": mainImage.alt
	  }`)
    console.log(urlForImage(projects[0].image!))
    return (
        <div className="h-desktop w-full bg-gray-900">
            <div>
                {projects.map((project) => {
                    return (
                        <div key={project.slug} className="flex flex-col">
                            <span>{project.title}</span>
                            {project.image ? (
                                <Image
                                    src={urlForImage(project.image)
                                        .width(400)
                                        .fit('max')
                                        .auto('format')
                                        .url()}
                                    alt={project.image.alt as string}
                                    width={400}
                                    height={400}
                                />
                            ) : null}
                            <span>{project.author}</span>
                            <span>{project.body}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
