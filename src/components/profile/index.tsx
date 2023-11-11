'use client'

import Link from 'next/link'
import { Avatar } from '../avatar'
import { useAuth } from '@/contexts/AuthContext'

interface ProfileProps {
  size?: 'md' | 'sm'
}

export function Profile({ size = 'md' }: ProfileProps) {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <Link href="/profile">
      <Avatar src={user.avatar} alt={user.name} size={size} />
    </Link>
  )
}
