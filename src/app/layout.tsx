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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
