'use client'

import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'

const createRoomSchema = z.object({
  name: z.string().min(1, 'O nome do canal não pode ser vazio'),
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
  })

  function handleCreateNewRoom({ name }: CreateRoomFormData) {
    console.log({ name })
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewRoom)} className={styles.form}>
      <Input
        type="text"
        placeholder="Digite o nome da sala"
        error={errors.name?.message}
        {...register('name')}
      />

      <Button type="submit" variant="success">
        <PlusCircle size={24} />
        Criar nova sala
      </Button>
    </form>
  )
}
