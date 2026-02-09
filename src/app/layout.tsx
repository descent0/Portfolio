import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Dishant Rajput',
  generator: 'Portfolio',
  icons: {
    icon: '/favicon/Untitled_design__5_-removebg-preview.png',
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
        <link rel="icon" href="/favicon/Untitled_design__5_-removebg-preview.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/Untitled_design__5_-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/Untitled_design__5_-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/Untitled_design__5_-removebg-preview.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
