import { Button } from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";
import { TODO } from "../TODO/TODO";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Dnd } from "../DNDKIT/Dnd";






export const TaskBoard = () => {
    const {user}=useContext(AuthContext)
    const {ispending,data:tasks}=useQuery({
        queryKey:['tasks',user?.email],
        queryFn:async()=>{
            const res=await axios.get(`https://task-minder-server-side.vercel.app/tasks?email=${user?.email}`)
             return res.data 
            
        }
    })
    
    if(ispending){
        return <h1>Loading....</h1>
    }
  return (
    <div>
     <div className="border-1 my-8 text-gray-500"></div>
        <h1 className='text-3xl font-bold mb-6'>
        Task Board
        </h1>
    

<TODO tasks={tasks}></TODO>







    </div>
  )
}
