import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import './globals.scss'

import { AuthProvider } from '@/contexts/AuthContext'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Planning Poker',
  description: 'Estimativas simples e divertidas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={sora.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
