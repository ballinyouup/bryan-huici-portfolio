import Link from 'next/link';
import { client } from '../../../../sanity/lib/client.mts';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import type { Image as Image2 } from 'sanity';
import { Badge } from '@/components/ui/badge';
interface Post {
    author: string;
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
          }`);

    return (
        <div className="flex h-full w-full flex-col items-center p-8 pt-20 text-white">
            <div className="flex w-full max-w-5xl">
                <span className="text-[10vw] font-bold sm:text-6xl">
                    BLOG
                </span>
            </div>
            {posts.map((post: Post) => {
                return (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post.slug.current}
                        className="flex h-fit w-full max-w-5xl flex-col gap-2 overflow-hidden transition-all hover:bg-accent md:h-80 md:flex-row"
                        passHref
                    >
                        <div className="h-full w-full overflow-hidden">
                            {post.image ? (
                                <Image
                                    src={urlForImage(post.image)
                                        .width(1600)
                                        .height(1600)
                                        .fit('max')
                                        .auto('format')
                                        .url()}
                                    alt={post.image.alt as string}
                                    width={800}
                                    height={800}
                                />
                            ) : null}
                        </div>
                        <div className="flex h-fit w-full flex-col gap-3 md:h-full">
                            <div>
                                <h5 className="font-bold">{post.title}</h5>
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
                                                <Badge key={keyword}>
                                                    {keyword}
                                                </Badge>
                                            );
                                        })}
                                </div>
                            ) : null}
                            <p className="line-clamp-3">{post.description}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
