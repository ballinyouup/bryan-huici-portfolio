import { ImageResponse } from 'next/server'
// Route segment config
// export const runtime = 'edge'

// Image metadata
export const alt = 'Bryan Huici Projects Image'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div style={{
                width: '100%',
                height: '100%',
                display: "flex",
                backgroundImage: 'linear-gradient(-45deg, #1D283A, #000000, #000000)',
                position: "relative",
                zIndex: 1
            }}>
                <span
                    style={{
                        fontSize: 66,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        color: 'white',
                        position: 'absolute',
                        bottom: 4,
                        zIndex: 1,
                        width: '100%',
                        height: '145px',
                        padding: '40px 0px 20px 46px',
                        backgroundImage: 'linear-gradient(-45deg, #0000000, transparent, transparent)',
                        overflow: 'hidden',
                        whiteSpace: 'normal',
                        textOverflow: 'ellipsis'
                    }}
                >
                    See My Latest Works
                </span>

                <span
                    style={{
                        fontSize: 200,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        color: 'white',
                        position: "absolute",
                        top: 150,
                        zIndex: 1,
                        width: "50%",
                        height: "400px",
                        padding: "20px 0px 0px 42px",
                        overflow: 'hidden',
                        overflowWrap: "break-word",
                        lineHeight: "150px"
                }}
                >
                Projects
                </span>

                <span
                    style={{
                        fontSize: 52,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        color: 'white',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        padding: "20px 40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "12px",
                        backgroundImage: 'linear-gradient(45deg, #1D283A, transparent)',
                        width: "100%"
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" /></svg>
                    BRYAN HUICI
                </span>
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
