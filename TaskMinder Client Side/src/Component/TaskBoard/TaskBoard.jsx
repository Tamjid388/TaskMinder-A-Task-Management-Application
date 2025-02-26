// import { Button } from "@/components/ui/button";
// import { CiCirclePlus } from "react-icons/ci";
// import { TODO } from "../TODO/TODO";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/Authprovider";
// import { Dnd } from "../DNDKIT/Dnd";






// export const TaskBoard = () => {
//     const {user}=useContext(AuthContext)
//     const {ispending,data:tasks}=useQuery({
//         queryKey:['tasks',user?.email],
//         queryFn:async()=>{
//             const res=await axios.get(`https://task-minder-server-side.vercel.app/tasks?email=${user?.email}`)
//              return res.data 
            
//         }
//     })
    
//     if(ispending){
//         return <h1>Loading....</h1>
//     }
//   return (
//     <div>
//      <div className="border-1 my-8 text-gray-500"></div>
//         <h1 className='text-3xl font-bold mb-6'>
//         Task Board
//         </h1>
    

// <TODO tasks={tasks}></TODO>







//     </div>
//   )
// }
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TODO } from "../TODO/TODO";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Done } from "../DONE/Done";
import { Inprogress } from "../InProgress/Inprogress";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

export const TaskBoard = () => {
  const { user } = useContext(AuthContext);
  const { ispending, data: tasks } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axios.get(`https://task-minder-server-side.vercel.app/tasks?email=${user?.email}`);
      return res.data;
    }
  });

  const queryClient = useQueryClient();

  const handleDragEnd = async (result) => {
    if (!result.destination) return; // Ignore if dropped outside

    const { source, destination } = result;
    const updatedTasks = Array.from(tasks);

    // Find and remove the moved task
    const [movedTask] = updatedTasks.splice(source.index, 1);

    // Update its status if moved between lists
    if (source.droppableId !== destination.droppableId) {
      movedTask.status = destination.droppableId;
    }

    // Insert at the new location
    updatedTasks.splice(destination.index, 0, movedTask);

    // Update UI optimistically
    queryClient.setQueryData(["tasks", user?.email], updatedTasks);

    // Send update to backend
    await axios.put("https://task-minder-server-side.vercel.app/updateTask", {
      email: user?.email,
      taskId: movedTask._id,
      newStatus: movedTask.status,
    });
  };

  if (ispending) {
    return <h1>Loading....</h1>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        {/* To-Do List */}
        <Droppable droppableId="To-Do">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <TODO tasks={tasks} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* In Progress List */}
        <Droppable droppableId="In-Progress">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Inprogress tasks={tasks} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Done List */}
        <Droppable droppableId="Done">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Done tasks={tasks} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
