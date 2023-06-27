import Link from 'next/link'
import { client } from '../../../../sanity/lib/client.mts'
import PlainTextComponent from '@/components/ui/plain-text-component'

interface Post {
    author: string
    slug: {
        current: string
    }
    description: string
    title: string
}

export default async function Page() {
    const posts = await client.fetch(`*[_type == "post"]{
		"author": author->name,
		  description, title, slug
	  }`)

    return (
        <div className="flex h-full w-full flex-col items-center p-2 pt-20 text-white">
            {posts.map((post: Post) => {
                return (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post.slug.current}
                        className="flex w-full max-w-5xl flex-col text-ellipsis border border-transparent bg-accent p-2 hover:border-white"
                    >
                        <div>
                            <h5 className="font-bold">{post.title}</h5>
                            <p className="text-lg">By: {post.author}</p>
                        </div>
                        <p className='line-clamp-3'>{post.description}</p>
                    </Link>
                )
            })}
        </div>
    )
}
