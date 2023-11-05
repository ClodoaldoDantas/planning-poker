import Link from 'next/link'
import { Avatar } from '../avatar'

export function Profile() {
  return (
    <Link href="/profile">
      <Avatar
        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=100&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Taylor Owens"
      />
    </Link>
  )
}
