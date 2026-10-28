import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Captivating India - Travel All Seasons | Kerala\'s Leading Travel Agent',
  description: 'What started as an inspiration of a group of travel professionals to fill a huge gap in the Indian market for a reliable ground operator for holidays, Captivating India is now one of Kerala\'s leading Travel Agent.',
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
