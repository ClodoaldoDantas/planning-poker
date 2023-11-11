'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AlertCircle, LogIn } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'

const joinRoomSchema = z.object({
  code: z.string().min(1, 'O código do canal não pode ser vazio'),
})

type JoinRoomFormData = z.infer<typeof joinRoomSchema>

export function JoinRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinRoomFormData>({
    resolver: zodResolver(joinRoomSchema),
  })

  const router = useRouter()
  const searchParams = useSearchParams()

  const hasError = searchParams.get('error')

  function handleJoinRoom({ code }: JoinRoomFormData) {
    router.push(`/rooms/${code}`)
  }

  return (
    <>
      <div className={styles.spacer}>ou entre em um canal</div>

      {hasError && (
        <div className={styles.alert}>
          <AlertCircle size={20} />
          <span>
            Sala não encontrada. Verifique se o código está correto e tente
            novamente!
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit(handleJoinRoom)} className={styles.form}>
        <Input
          type="text"
          placeholder="Digite o código do canal"
          error={errors.code?.message}
          {...register('code')}
        />

        <Button type="submit">
          <LogIn size={24} />
          Entrar na sala
        </Button>
      </form>
    </>
  )
}
