import './globals.css'
import { Playfair_Display } from 'next/font/google'
import { Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-inter',
})

export const metadata = {
  title: 'Ash’s World',
  description: 'Mirzaldi Pasha’s cinematic portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}