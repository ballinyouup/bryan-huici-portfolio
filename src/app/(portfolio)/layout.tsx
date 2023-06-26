import Footer from '@/components/ui/footer'
import './globals.css'
import Navbar from '@/components/ui/navbar'
import { Inter } from 'next/font/google'

export const metadata = {
    title: 'Bryan Huici',
    description: 'Bryan Huici Portfolio',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}