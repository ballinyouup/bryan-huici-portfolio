import Link from 'next/link';
import { client } from '~/lib/client.mts';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Image from 'next/image';
import { urlForImage } from '~/lib/image';
import type { Image as SanityImage } from 'sanity';
import { Badge } from '@/components/ui/badge';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { wait } from '@/lib/utils';
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
}

async function BlogPosts() {
    await wait(5000)
    const posts =
        await client.fetch(`*[_type == "post"]| order(publishedAt desc){
            "author": author->name,
              description, title, slug, publishedAt, "image": mainImage, "keywords": keywords[]->title
          }`)

    return (
        <div className="flex w-full flex-col items-center gap-4 text-white">
            {posts.map((post: Post) => {
                return (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post.slug.current}
                        className="flex h-fit w-full max-w-5xl flex-col gap-2 overflow-hidden rounded-xl bg-accent p-4 transition-all lg:h-80 lg:flex-row lg:hover:bg-primary"
                        passHref
                    >
                        <div className="h-80 overflow-hidden rounded-none rounded-t-xl lg:h-full lg:rounded-xl">
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
                        <div className="flex h-fit w-full flex-col gap-3 rounded-none rounded-b-xl bg-secondary/40 p-4 md:h-full lg:rounded-xl">
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
                                                <Badge
                                                    key={keyword}
                                                    variant={'secondary'}
                                                >
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

function BlogLoading() {
    return (
        <div className="flex w-full flex-col items-center text-white gap-4">
            <div className="flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 p-4 bg-accent/40 sm:flex-row sm:items-start sm:justify-start rounded-xl">
                <Skeleton className="h-[286px] w-[1600px]" />
                <div className="flex w-full flex-col gap-2">
                    <Skeleton className="h-9 w-64" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-11/12" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-11/12" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-11/12" />
                    <Skeleton className="h-7 w-full" />
                </div>
            </div>
            <div className="flex h-fit w-full max-w-5xl flex-col items-center justify-center gap-4 p-4 bg-accent/40 sm:flex-row sm:items-start sm:justify-start rounded-xl">
                <Skeleton className="h-[286px] w-[1600px]" />
                <div className="flex w-full flex-col gap-2">
                    <Skeleton className="h-9 w-64" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-11/12" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-11/12" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-11/12" />
                    <Skeleton className="h-7 w-full" />
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="pt-20">
            <div className="flex h-full w-full flex-col items-center gap-8 p-8 text-white md:p-12">
                <div className="flex w-full max-w-5xl">
                    <span className="text-[10vw] font-bold sm:text-6xl">
                        BLOG
                    </span>
                </div>
                <Suspense fallback={<BlogLoading />}>
                    <BlogPosts />
                </Suspense>
            </div>
        </div>
    );
}
