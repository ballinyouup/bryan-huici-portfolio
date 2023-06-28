import { client } from '../../../../../sanity/lib/client.mts'
import PortableTextComponent from '@/components/ui/portable-text-component'
import { Metadata } from 'next'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import {notFound} from "next/navigation"
import Image from 'next/image'
import { urlForImage } from '../../../../../sanity/lib/image'
type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // fetch data
    const post =
        await client.fetch(`*[slug.current == "${params.slug}"]{title, keywords, description
	  }`)

    return {
        title: post[0].title,
        description: post[0].description,
        keywords: post[0].keywords,
    }
}
export default async function Page({ params }: { params: { slug: string } }) {
    const post = await client.fetch(`*[slug.current == "${params.slug}"]{
		"author": author->name,
		  body, title, publishedAt, "image": mainImage
	  }`)
    if (post.length === 0 || !post[0]) {
        return notFound()
    }
    return (
        <div className="flex h-full w-full items-start justify-center p-4 pt-20">
            <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                {post[0].image ? (
                    <Image
                        src={urlForImage(post[0].image)
                            .width(320)
                            .height(320)
                            .minHeight(320)
                            .minWidth(320)
                            .fit('min')
                            .auto('format')
                            .url()}
                        alt={post[0].image.alt as string}
                        width={320}
                        height={320}
                    />
                ) : null}
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
                    <PortableTextComponent
                        value={post[0].body ?? {}}
                        onMissingComponent={false}
                    />
                </div>
            </div>
        </div>
    )
}
