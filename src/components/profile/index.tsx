'use client'

import Link from 'next/link'
import { Avatar } from '../avatar'
import { useAuth } from '@/contexts/AuthContext'

export function Profile() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <Link href="/profile">
      <Avatar src={user.avatar} alt={user.name} />
    </Link>
  )
}
