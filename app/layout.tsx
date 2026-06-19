import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteTitle = 'Restaurant Operations Software for Independents | WRI Suite';
const siteDescription = 'All-in-one operations software for independent restaurants. Daily checklists, tip pool calculator, par tracker, staff comms. Start a 14-day free trial.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D97706',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-playfair: "Playfair Display", serif;
            --font-dmsans: "DM Sans", sans-serif;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: var(--font-dmsans);
            background: #FAFAF9;
            color: #1C1917;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-playfair);
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
