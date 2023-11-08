'use client'

import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'

const createChannelSchema = z.object({
  name: z.string().min(1, 'O nome do canal não pode ser vazio'),
})

type CreateChannelFormData = z.infer<typeof createChannelSchema>

export function CreateChannel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChannelFormData>({
    resolver: zodResolver(createChannelSchema),
  })

  function handleCreateNewChannel({ name }: CreateChannelFormData) {
    console.log({ name })
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewChannel)}
      className={styles.form}
    >
      <Input
        type="text"
        placeholder="Digite o nome do canal"
        error={errors.name?.message}
        {...register('name')}
      />

      <Button type="submit" variant="success">
        <PlusCircle size={24} />
        Criar novo canal
      </Button>
    </form>
  )
}
