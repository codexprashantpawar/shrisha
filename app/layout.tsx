import type { Metadata } from 'next'
// import { Playfair_Display, Lora, Cormorant_Garamond } from 'next/font/google'
import { Oswald, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ subsets: ["latin"], weight: ['300','400','700'], variable: '--font-oswald' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ['300','400','500','600','700'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Shrisha - Architectural Visionaries',
  description: 'Premium architectural consultancy specializing in residential, commercial, and institutional design in Pune',
  generator: 'Designed by Prashant Pawar',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className={`${oswald.variable} ${montserrat.variable} antialiased bg-[#272727] text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
