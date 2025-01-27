import './globals.css'
import { Inter } from 'next/font/google'
import TinaCMSProvider from './components/providers/tina-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tina CMS Starter',
  description: 'A starter template for Tina CMS with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TinaCMSProvider>{children}</TinaCMSProvider>
      </body>
    </html>
  )
}
