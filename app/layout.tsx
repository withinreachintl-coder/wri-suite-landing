import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WRI Suite - Restaurant Operations Platform',
  description: 'Daily Ops, Staff Communications, and Restaurant Toolkit. Everything restaurant managers need.',
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
