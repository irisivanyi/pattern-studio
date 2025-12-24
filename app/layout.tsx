import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'pattern',
  description: 'Pattern website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-clip overflow-y-auto">
      <body className={`${inter.variable} font-inter overflow-x-hidden overflow-y-auto`}>{children}</body>
    </html>
  )
}

