import Link from 'next/link'
import { client } from '../../../../sanity/lib/client.mts'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'
import type { Image as Image2 } from 'sanity'
import { AspectRatio } from '@/components/ui/aspect-ratio'
interface Post {
    author: string
    slug: {
        current: string
    }
    description: string
    title: string
    publishedAt: string
    image: Image2
}

export default async function Page() {
    const posts = await client.fetch(`*[_type == "post"]{
		"author": author->name,
		  description, title, slug, publishedAt, "image": mainImage
	  }`)

    return (
        <div className="flex h-full w-full flex-col items-center p-2 pt-20 text-white">
            {posts.map((post: Post) => {
                return (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post.slug.current}
                        className="flex md:flex-row flex-col h-fit md:h-80 w-full max-w-5xl border border-transparent bg-accent p-2 hover:border-white overflow-hidden"
                    >
                        <div className='h-full w-full overflow-hidden'>
                            {post.image ? (
                                <Image
                                    src={urlForImage(post.image)
                                        .width(1600)
                                        .height(1600)
                                        .fit("max")
                                        .auto('format')
                                        .url()}
                                    alt={post.image.alt as string}
                                    width={800}
                                    height={800}
                                />
                            ) : null}
                        </div>
                        <div className="flex flex-col h-fit md:h-full w-full">
                            <h5 className="font-bold">{post.title}</h5>
                            <p className="text-lg">By: {post.author}</p>
                            <p>
                                {format(
                                    new Date(post.publishedAt),
                                    'MM-dd-yyyy hh:mm:ss a',
                                    { locale: enUS }
                                )}
                            </p>
                            <p className="line-clamp-3">{post.description}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
