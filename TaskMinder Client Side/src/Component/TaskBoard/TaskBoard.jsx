import { Button } from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";
import { TODO } from "../TODO/TODO";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Inprogress } from "../InProgress/InProgress";
import { Done } from "../DONE/Done";


export const TaskBoard = () => {
    const {user}=useContext(AuthContext)
    const {isPending,data:tasks,refetch}=useQuery({
        queryKey:['tasks',user?.email],
        queryFn:async()=>{
            const res=await axios.get(`http://localhost:5000/tasks?email=${user?.email}`)
             return res.data 
            
        }
    })
    console.log(tasks);
 


  
    if(isPending){
        return <h1>Loading....</h1>
    }
  return (
    <DragDropContext  >
    <div className=" my-8 grid gap-8 md:space-x-12 lg:gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {/* "To-Do" List */}
      <Droppable droppableId="To-Do">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <TODO tasks={tasks} refetch={refetch}/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* "In Progress" List */}
      <Droppable droppableId="In-Progress">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Inprogress tasks={tasks} refetch={refetch} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>

       {/* Done List */}
       <Droppable droppableId="Done">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Done tasks={tasks} refetch={refetch} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    </div>
  </DragDropContext>
  )
}
