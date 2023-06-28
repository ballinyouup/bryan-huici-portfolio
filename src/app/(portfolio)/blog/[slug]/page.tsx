import Link from 'next/link'
import { client } from '../../../../../sanity/lib/client.mts'
import PortableTextComponent from '@/components/ui/portable-text-component'
import { Metadata } from 'next'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
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
    const post =
        await client.fetch(`*[slug.current == "${params.slug}" && defined(author->name)]{
		"author": author->name,
		  body, title, publishedAt
	  }`)
    if (post.length === 0 || !post[0]) {
        return (
            <div className="relative h-full">
                <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                    <span className="text-5xl">Not Found</span>
                    <Link href="/blog" className="text-lg underline">
                        Return to Blog Posts
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="flex h-full w-full flex-col items-center p-4 pt-20">
            <div className="flex w-full max-w-5xl flex-col">
                <div className="py-4">
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
                </div>
                <PortableTextComponent
                    value={post[0].body ?? {}}
                    onMissingComponent={false}
                />
            </div>
        </div>
    )
}
