import './globals.css'
import Navbar from '@/components/ui/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
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
        <html lang="en">
            <body className={Futura.className}>
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    defaultTheme="system"
                >
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
