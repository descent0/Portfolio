import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Dishant Rajput',
  generator: 'Portfolio',
  icons: {
    icon: '/fav1.png',
  },
  openGraph: {
    title: 'Portfolio',
    description: 'Portfolio of Dishant Rajput',
    images: [
      {
        url: '/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio',
      },
    ],
    type: 'website',
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
