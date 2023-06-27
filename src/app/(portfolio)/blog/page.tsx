import Link from 'next/link'
import { client } from '../../../../sanity/lib/client.mts'
import PlainTextComponent from '@/components/ui/plain-text-component'

interface Post {
    author: string
    slug: {
        current: string
    }
    body: []
    title: string
}

export default async function Page() {
    const posts = await client.fetch(`*[_type == "post"]{
		"author": author->name,
		  body, title, slug
	  }`)

    return (
        <div className="flex h-full w-full flex-col items-center p-2 pt-20 text-white">
            {posts.map((post: Post) => {
                return (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post.slug.current}
                    >
                        <div
                            className={`flex w-full max-w-5xl flex-col text-ellipsis border border-white bg-accent p-2 transition-transform hover:scale-[98%]`}
                            key={post.slug.current}
                        >
                            <div>
                                <h3 className="font-bold">{post.title}</h3>
                                <p className="text-lg">By: {post.author}</p>
                            </div>

                            <div className="line-clamp-3 h-full">
                                <PlainTextComponent value={post.body} />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
