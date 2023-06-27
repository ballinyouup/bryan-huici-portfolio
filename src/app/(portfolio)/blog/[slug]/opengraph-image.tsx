import { ImageResponse } from 'next/server'
import { client } from '../../../../../sanity/lib/client.mts'
import "../../globals.css"
// Route segment config
// export const runtime = 'edge'

// Image metadata
export const alt = 'Bryan Huici Blog Post Image'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// // Image generation
// export default async function Image({ params }: { params: { slug: string } }) {
//     const post = await client.fetch(
//         `*[slug.current == "${params.slug}"]{title}`
//     )
//     return new ImageResponse(
//         (
//             // ImageResponse JSX element
//             <div
//                 style={{
//                     fontSize: 128,
//                     background: 'black',
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'white',
//                     fontWeight: 'bold',
//                     textTransform: 'uppercase',
//                 }}
//             >
//                 {post[0].title}
//             </div>
//         ),
//         // ImageResponse options
//         {
//             // For convenience, we can re-use the exported opengraph-image
//             // size config to also set the ImageResponse's width and height.
//             ...size,
//         }
//     )
// }

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    const post = await client.fetch(
        `*[slug.current == "${params.slug}"]{title, "author": author->name}`
    )
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div className="relative flex h-full flex-col items-center justify-center overflow-x-clip">
            <div className="z-20 flex h-fit flex-col items-start justify-center gap-4 sm:p-6 p-4">
                <h3 className="-ml-1 grid w-full text-[20vw] font-semibold sm:text-8xl grid-flow-col">
                    {post[0].title}
                </h3>
                <p className="w-fit text-3xl font-semibold">
                    {post[0].author}
                </p>
            </div>
            <div className="absolute left-1/4 top-1/2 z-10 h-full w-full -translate-y-1/2 translate-x-1/4 gap-4 opacity-90">
                <div className="h-full w-full rounded-full bg-accent !blur-[96px] !brightness-200" />
            </div>
        </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}

