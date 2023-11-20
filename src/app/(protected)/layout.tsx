import { ProtectedRoute } from '@/components/protected-route'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>
}
