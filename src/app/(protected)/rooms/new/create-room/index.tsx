'use client'

import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

const createRoomSchema = z.object({
  name: z.string().min(1, 'O nome do canal não pode ser vazio'),
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
  })

  const router = useRouter()

  async function handleCreateNewRoom({ name }: CreateRoomFormData) {
    const docRef = await addDoc(collection(db, 'rooms'), { name })
    router.push(`/rooms/${docRef.id}`)
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewRoom)} className={styles.form}>
      <Input
        type="text"
        placeholder="Digite o nome da sala"
        error={errors.name?.message}
        {...register('name')}
      />

      <Button type="submit" variant="success" disabled={isSubmitting}>
        <PlusCircle size={24} />
        Criar nova sala
      </Button>
    </form>
  )
}
