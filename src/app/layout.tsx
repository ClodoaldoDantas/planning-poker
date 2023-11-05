import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'
import { AuthProvider } from '@/contexts/AuthContext'

const poppins = Poppins({
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
      <body className={poppins.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
