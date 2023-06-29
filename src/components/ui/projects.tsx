import Image from 'next/image';
import { client } from '../../../sanity/lib/client.mts';
import { urlForImage } from '../../../sanity/lib/image';
import type { Image as SanityImage } from 'sanity';
import PortableTextComponent from './portable-text-component';
import NavButton from '@/components/ui/nav-button';
import { GithubIcon, Globe, ArrowRightToLine } from 'lucide-react';
//import { wait } from '@/lib/utils';
interface Projects {
    title?: string;
    image?: SanityImage;
    author?: string;
    slug?: string;
    body?: string;
    alt?: string;
    summary?: any;
    link: string;
    github: string;
}



export default async function Projects() {
    // await wait(5000)
    const projects: Projects[] = await client.fetch(`*[_type == "projects"]{
		"author": author->name, "slug": slug.current, summary, title, "image": mainImage, "alt": mainImage.alt, link, github
	  }`);
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
                            <div className="flex w-full flex-col place-content-between h-full">
                                <div className='flex flex-col w-full items-start gap-4'>
                                    <div className='flex flex-col w-full'>
                                        <h4 className="font-bold uppercase">
                                            {project.title}
                                        </h4>
                                        <span className="text-xl">
                                            By: {project.author}
                                        </span>
                                    </div>
                                    <PortableTextComponent
                                        value={project.summary}
                                        onMissingComponent={false}
                                    />
                                </div>
                                <div className='flex md:flex-row flex-col gap-2'>
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
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
