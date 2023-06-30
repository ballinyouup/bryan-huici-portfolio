import Link from 'next/link';
import { client } from '../../../../sanity/lib/client.mts';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import type { Image as Image2 } from 'sanity';
import { Badge } from '@/components/ui/badge';
interface Post {
    author: string
    slug: {
        current: string;
    };
    description: string;
    title: string;
    publishedAt: string;
    image: Image2;
    keywords: string[];
}

export default async function Page() {
    const posts =
        await client.fetch(`*[_type == "post"]| order(publishedAt desc){
            "author": author->name,
              description, title, slug, publishedAt, "image": mainImage, "keywords": keywords[]->title
          }`)

    return (
        <div className="pt-20">
            <div className="flex h-full w-full flex-col items-center p-8 md:p-12 gap-8 text-white">
                <div className="flex w-full max-w-5xl">
                    <span className="text-[10vw] font-bold sm:text-6xl">
                        BLOG
                    </span>
                </div>
                <div className="flex w-full flex-col items-center gap-4 text-white">
                    {posts.map((post: Post) => {
                        return (
                            <Link
                                href={`/blog/${post.slug.current}`}
                                key={post.slug.current}
                                className="flex h-fit w-full max-w-5xl flex-col gap-2 overflow-hidden transition-all bg-accent p-4 lg:hover:bg-primary lg:h-80 lg:flex-row rounded-xl"
                                passHref
                            >
                                <div className="lg:h-full h-80 overflow-hidden rounded-t-xl rounded-none lg:rounded-xl">
                                    {post.image ? (
                                        <Image
                                            src={urlForImage(post.image)
                                                .width(1600)
                                                .height(1600)
                                                .fit('max')
                                                .auto('format')
                                                .url()}
                                            alt={post.image.alt as string}
                                            width={1600}
                                            height={1600}
                                        />
                                    ) : null}
                                </div>
                                <div className="flex h-fit w-full flex-col gap-3 md:h-full bg-secondary/40 p-4 rounded-b-xl rounded-none lg:rounded-xl">
                                    <div>
                                        <h5 className="font-bold">
                                            {post.title}
                                        </h5>
                                        <div className="flex gap-2">
                                            <p className="text-base font-medium">
                                                By: {post.author}
                                            </p>
                                            <p>
                                                {format(
                                                    new Date(post.publishedAt),
                                                    'MM-dd-yyyy',
                                                    { locale: enUS }
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    {post.keywords ? (
                                        <div className="flex gap-2">
                                            {post.keywords
                                                .slice(0, 4)
                                                .map((keyword) => {
                                                    return (
                                                        <Badge key={keyword} variant={'secondary'}>
                                                            {keyword}
                                                        </Badge>
                                                    );
                                                })}
                                        </div>
                                    ) : null}
                                    <p className="line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
