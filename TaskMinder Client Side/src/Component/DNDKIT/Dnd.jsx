import { closestCorners, DndContext } from '@dnd-kit/core';
import { verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react'
import { FcNegativeDynamic } from 'react-icons/fc';

export const Dnd = ({tasks}) => {
    console.log(tasks);
   
  return (
    <div>
        <h1>My task</h1>
        <DndContext collisionDetection={closestCorners}>
 <Col tasks={tasks}></Col>
        </DndContext>
        
    </div>
  )
}

 export function Col({tasks}){

    return(
        <div className='bg-yellow-200 w-fit space-y-2 flex flex-col  gap-y-2'>
         
         <DndContext items={tasks} strategy={verticalListSortingStrategy}>
           {tasks?.map(task => (
        <div className='border-2 bg-gray-200 p-2' key={task._id}>
            {task.title}
        </div>
    ))}
         </DndContext>  
        </div>
    )

}