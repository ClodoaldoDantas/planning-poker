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

const addTaskSchema = z.object({
  title: z.string().min(1, 'O título da tarefa não pode ser vazio'),
})

type AddTaskFormData = z.infer<typeof addTaskSchema>

type AddTaskProps = {
  roomId: string
}

export function AddTask({ roomId }: AddTaskProps) {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddTaskFormData>({
    resolver: zodResolver(addTaskSchema),
  })

  async function handleCreateTask({ title }: AddTaskFormData) {
    const roomRef = doc(db, 'rooms', roomId)

    const tasksCollection = collection(roomRef, 'tasks')

    await addDoc(tasksCollection, {
      title,
      votes: [],
      completed: false,
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
              placeholder="Título da tarefa"
              error={errors.title?.message}
              {...register('title')}
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
