import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mailo | AI-Powered Email Assistant',
  description:
    'Mailo is an AI-powered email assistant that lets you ask questions and get intelligent replies — all through email. No app, no login, just email magic.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
