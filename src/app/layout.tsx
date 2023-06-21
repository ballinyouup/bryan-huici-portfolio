import './globals.css'
import Navbar from '@/components/ui/navbar'
import localFont from 'next/font/local'

const Futura = localFont({
    src: '../assets/FuturaBookFont.ttf',
    display: 'swap',
})
export const metadata = {
    title: 'Bryan Huici',
    description: 'Bryan Huici Portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={Futura.className}>
                    <Navbar />
                    {children}
            </body>
        </html>
    )
}
