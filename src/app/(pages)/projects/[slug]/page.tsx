import { client } from '~/lib/client.mts';
import PortableTextComponent from '@/components/ui/portable-text-component';
import { Metadata } from 'next';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import type { Image as SanityImage } from 'sanity';
import { wait } from '@/lib/utils';
type Props = {
    params: { slug: string; };
};

interface Project {
    author: string;
    slug: {
        current: string;
    };
    description: string;
    title: string;
    publishedAt: string;
    image: SanityImage;
    keywords: string[];
    body: any;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // fetch data
    const project =
        await client.fetch(`*[slug.current == "${params.slug}"]{title, "keywords": keywords[]->title, description
	  }`);
    return {
        title: project[0].title,
        description: project[0].description,
        keywords: project[0].keywords,
    };
}
export default async function Page({ params }: { params: { slug: string; }; }) {
    await wait(5000);
    const project = (await client.fetch(`*[slug.current == "${params.slug}"]{
		"author": author->name,
		  body, title, publishedAt, "keywords": keywords[]->title
	  }`)) as Project[];

    if (project.length === 0 || !project[0]) {
        return notFound();
    }
    return (
        <div className="flex min-h-full w-full items-start justify-center p-4 pt-20">
            <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                <div className="flex w-full flex-col py-4">
                    <h1 className="text-5xl font-bold capitalize">
                        {project[0].title}
                    </h1>
                    <p className="text-lg">By: {project[0].author}</p>
                    <p>
                        {format(
                            new Date(project[0].publishedAt),
                            'MM-dd-yyyy hh:mm:ss a',
                            { locale: enUS }
                        )}
                    </p>
                    {project[0].keywords ? (
                        <div className="flex gap-2 pb-12">
                            {project[0].keywords
                                .slice(0, 3)
                                .map((keyword: string) => {
                                    return (
                                        <Badge key={keyword}>{keyword}</Badge>
                                    );
                                })}
                        </div>
                    ) : null}
                    <PortableTextComponent
                        value={project[0].body ?? {}}
                        onMissingComponent={false}
                    />

                </div>
            </div>
        </div>
    );
}
