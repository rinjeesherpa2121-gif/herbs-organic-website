import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Herbs & Organic | Himalayan Medicinal Herbs from Nepal',
  description:
    'Raw Himalayan medicinal herbs, roots, and botanicals traditionally sourced from Nepal’s mountains for local markets, wholesale, and export.',
  keywords: [
    'Himalayan medicinal herbs',
    'Nepal medicinal herbs',
    'raw herbs Nepal',
    'Himalayan botanicals',
    'Nepali herbs',
    'wild herbs Nepal',
    'herbal raw materials',
    'herbs wholesale Nepal',
    'herbs export Nepal',
  ],
  openGraph: {
    title: 'Herbs & Organic | Himalayan Medicinal Herbs from Nepal',
    description:
      'Natural wild herbs, roots, and botanicals sourced from Nepal’s Himalayan regions for retail, wholesale, and international export.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
