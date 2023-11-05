'use client'

import { LogIn } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'

const joinChannelSchema = z.object({
  code: z.string().min(1, 'O código do canal não pode ser vazio'),
})

type JoinChannelFormData = z.infer<typeof joinChannelSchema>

export function JoinChannel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinChannelFormData>({
    resolver: zodResolver(joinChannelSchema),
  })

  function handleJoinChannel({ code }: JoinChannelFormData) {
    console.log({ code })
  }

  return (
    <>
      <div className={styles.spacer}>ou entre em um canal</div>

      <form onSubmit={handleSubmit(handleJoinChannel)} className={styles.form}>
        <Input
          type="text"
          placeholder="Digite o código do canal"
          error={errors.code?.message}
          {...register('code')}
        />

        <Button type="submit">
          <LogIn size={24} />
          Entrar no canal
        </Button>
      </form>
    </>
  )
}
