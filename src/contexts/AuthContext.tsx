'use client'

import { Loading } from '@/components/loading'
import { auth, provider } from '@/lib/firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type User = {
  id: string
  name: string
  email: string
  avatar: string
}

type AuthContextData = {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signOutApp: () => Promise<void>
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, email, uid } = user

        if (!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account')
        }

        setUser({
          id: uid,
          email,
          name: displayName,
          avatar: photoURL,
        })
      }

      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const { displayName, photoURL, uid, email } = user

      if (!displayName || !photoURL || !email) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        email,
        name: displayName,
        avatar: photoURL,
      })
    } catch (err: any) {
      console.log(err.message)
    }
  }

  async function signOutApp() {
    try {
      await signOut(auth)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutApp }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
