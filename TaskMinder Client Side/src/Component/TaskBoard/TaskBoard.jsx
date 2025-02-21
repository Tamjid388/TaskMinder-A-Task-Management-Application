import { Button } from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";




export const TaskBoard = () => {
  return (
    <div>
     <div className="border-1 my-8 text-gray-500"></div>
        <h1 className='text-3xl font-bold mb-6'>
        Task Board
        </h1>
       {/* todo */}
       <div className="bg-gray-200 w-96 rounded-xl p-4 shadow-md">
  <h1 className="text-lg font-semibold text-gray-800 mb-2">To-Do</h1>
  <div className="h-32 flex items-center justify-center text-gray-500">
    No tasks yet
  </div>

  <Button className="mt-4 w-full flex items-center gap-2 bg-black text-white">
        <CiCirclePlus className="text-xl text-white " />
        Add Task
      </Button>
</div>

    </div>
  )
}
