import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackgroundImage from '@/components/BackgroundImage'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'pattern',
  description: 'Pattern website',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
        <BackgroundImage />
        {children}
      </body>
    </html>
  )
}

