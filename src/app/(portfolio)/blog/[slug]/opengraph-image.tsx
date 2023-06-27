import { ImageResponse } from 'next/server'
import { client } from '../../../../../sanity/lib/client.mts'
// Route segment config
// export const runtime = 'edge'

// Image metadata
export const alt = 'Bryan Huici Blog Post Image'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    const post = await client.fetch(
        `*[slug.current == "${params.slug}"]{title}`
    )
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }}
            >
                {post[0].title}
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
