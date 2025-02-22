import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import {CSS} from "@dnd-kit/utilities"

export const Coloumn = ({todo}) => {
  return (
    <div>
        <SortableContext items={todo} strategy={verticalListSortingStrategy}>
       {
todo.map((task,index)=>
(<div key={task.index} className='bg-white space-y-2 p-2 mb-4'>
   <Task id={task.index} key={task.index} title={task.title}></Task>
</div>)
)
       }
       </SortableContext>
    </div>
  )
}


function Task({id,title}){

   const {attributes,listeners,
    setNodeRef,transform,transition
   }= useSortable({id})
   const style={
transition,
transform:CSS.Transform.toString(transform)
   }
    return(
        <div ref={setNodeRef} {...attributes} {...listeners}
        style={style}
        >
           
        <h1>
        {
            title
         }
        </h1>

        </div>
    )
}