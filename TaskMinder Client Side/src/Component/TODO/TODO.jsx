import { Button } from "@/components/ui/button";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { CiCirclePlus } from "react-icons/ci";
import { Coloumn } from "./Coloumn";

export const TODO = ({tasks}) => {
  
    const todo = tasks?.filter((task) => task.status === 'To-Do');




  return (
    <div>
            {/* todo */}
               <div className="bg-gray-200 w-96 rounded-xl p-4 shadow-md">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">To-Do</h1>
          
   <div>
      {/* Check if todo tasks exist and map through them */}
      {todo?.length > 0 ? 
      
      <div>
        <DndContext  collisionDetection={closestCorners}>
     <Coloumn todo={todo}></Coloumn>
        </DndContext>
    
    </div>
    
      : (
          <p>No tasks available</p> // Display a message if no tasks are found
        )}
   </div>
        
          
            

        </div>
    </div>
  )
}
