import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { PlusCircle, X } from 'lucide-react'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'
import { Textarea } from '@/components/textarea'
import { useRoom } from '@/contexts/RoomContext'

const addTaskSchema = z.object({
  title: z.string().min(1, 'O título da tarefa não pode ser vazio'),
  description: z.string(),
})

type AddTaskFormData = z.infer<typeof addTaskSchema>

export function AddTask() {
  const [open, setOpen] = useState(false)
  const { room } = useRoom()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddTaskFormData>({
    resolver: zodResolver(addTaskSchema),
  })

  async function handleCreateTask({ title, description }: AddTaskFormData) {
    const tasksCollectionRef = collection(db, 'tasks')

    await addDoc(tasksCollectionRef, {
      title,
      description,
      completed: false,
      roomId: room?.id,
    })

    setOpen(false)
    reset()
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>
          <PlusCircle size={24} /> Adicionar Tarefa
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>Nova Tarefa</Dialog.Title>

          <form
            onSubmit={handleSubmit(handleCreateTask)}
            className={styles.form}
          >
            <Input
              type="text"
              placeholder="Título"
              error={errors.title?.message}
              {...register('title')}
            />

            <Textarea
              placeholder="Descrição (opcional)"
              {...register('description')}
            />

            <Button variant="success" type="submit">
              Adicionar
            </Button>
          </form>

          <Dialog.Close asChild>
            <button className={styles.closeButton} aria-label="Fechar">
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
