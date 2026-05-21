import type { Metadata } from 'next'
import { Playfair_Display, Lora, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const lora = Lora({ subsets: ["latin"], variable: '--font-lora' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ['300','400','600'], variable: '--font-cormorant' });

export const metadata: Metadata = {
  title: 'Shrisha - Architectural Visionaries',
  description: 'Premium architectural consultancy specializing in residential, commercial, and institutional design in Pune',
  generator: 'v0.app',
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
      <body className={`${playfair.variable} ${lora.variable} ${cormorant.variable} antialiased bg-black text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
