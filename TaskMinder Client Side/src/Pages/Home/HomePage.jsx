import { AddTask } from '@/Component/AddTask/AddTask'
import { TaskBoard } from '@/Component/TaskBoard/TaskBoard'
import { Button } from '@/components/ui/button'
import React from 'react'

export const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto'>
    <AddTask></AddTask>
    <TaskBoard></TaskBoard>
    </div>
  )
}
