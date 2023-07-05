import { client } from '~/lib/client.mts'
import PortableTextComponent from '@/components/ui/portable-text-component'
import { Metadata } from 'next'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { notFound } from 'next/navigation';
import Image from 'next/image'
import { urlForImage } from '~/lib/image'
import { Badge } from '@/components/ui/badge';
import type { Image as SanityImage } from 'sanity';
import { wait } from '@/lib/utils'
type Props = {
    params: { slug: string }
}

interface Post {
    author: string
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
    const post =
        await client.fetch(`*[slug.current == "${params.slug}"]{title, "keywords": keywords[]->title, description
	  }`)
    return {
        title: post[0].title,
        description: post[0].description,
        keywords: post[0].keywords,
    }
}
export default async function Page({ params }: { params: { slug: string } }) {
    
    await wait(5000);
    
    const post = (await client.fetch(`*[slug.current == "${params.slug}"]{
		"author": author->name,
		  body, title, publishedAt, "image": mainImage, "keywords": keywords[]->title
	  }`)) as Post[]

    if (post.length === 0 || !post[0]) {
        return notFound()
    }
    return (
        <div className="flex min-h-full w-full items-start justify-center p-4 pt-20">
            <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                <div className="h-80 w-full max-w-5xl overflow-hidden">
                    {post[0].image ? (
                        <Image
                            src={urlForImage(post[0].image)
                                .width(1024)
                                .height(1024)
                                .minHeight(1024)
                                .minWidth(1024)
                                .fit('min')
                                .auto('format')
                                .url()}
                            alt={post[0].image.alt as string}
                            width={1024}
                            height={1024}
                        />
                    ) : null}
                </div>
                <div className="flex w-full flex-col py-4">
                    <h1 className="text-5xl font-bold capitalize">
                        {post[0].title}
                    </h1>
                    <p className="text-lg">By: {post[0].author}</p>
                    <p>
                        {format(
                            new Date(post[0].publishedAt),
                            'MM-dd-yyyy hh:mm:ss a',
                            { locale: enUS }
                        )}
                    </p>
                    {post[0].keywords ? (
                        <div className="flex gap-2 pb-12">
                            {post[0].keywords
                                .slice(0, 4)
                                .map((keyword: string) => {
                                    return (
                                        <Badge key={keyword}>{keyword}</Badge>
                                    )
                                })}
                        </div>
                    ) : null}
                    <PortableTextComponent
                        value={post[0].body ?? {}}
                        onMissingComponent={false}
                    />
                </div>
            </div>
        </div>
    )
}
