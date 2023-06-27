import { ImageResponse } from 'next/server'
import { Inter } from 'next/font/google'
// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Bryan Huici Blog Post Image'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Font
const inter = Inter({ subsets: ['latin'] })
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div className={`${inter.className} font-bold text-white text-3xl flex items-center justify-center w-full h-full bg-black`}
            >
                {params.slug}
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
