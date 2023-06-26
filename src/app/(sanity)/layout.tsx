export const metadata = {
    title: 'Sanity Studio',
    description: 'Sanity Studio Dashboard for www.bryanhuici.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
