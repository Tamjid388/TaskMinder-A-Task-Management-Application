import { Button } from '@/components/ui/button';
import { Draggable } from '@hello-pangea/dnd';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const Inprogress = ({tasks,refetch}) => {
  // console.log("All tasks: ",tasks);
  const inProgressTasks = tasks?.filter((task) => task.status === "In Progress");
  const [editingTask, setEditingTask] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    axios
      .put(`http://localhost:5000/tasks/${editingTask._id}`, data)
      .then(() => {
        Swal.fire("Task updated successfully!");
        setEditingTask(null);
        refetch();
      })
      .catch(() => {
        Swal.fire("Error updating task");
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        Swal.fire("Task deleted");
        refetch();
      })
      .catch(() => {
        Swal.fire("Error deleting task");
      });
  };
  return (
 
    <div className="bg-gray-200  rounded-xl space-y-2 min-h-[300px] p-4 shadow-md">
    <h1 className="text-lg font-semibold text-gray-800 mb-2">In Progress</h1>
    {inProgressTasks?.length > 0 ? (
      inProgressTasks.map((task, idx) => (
        <Draggable key={task._id} draggableId={task._id} index={idx}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="p-2 bg-white rounded-md shadow-md flex flex-col gap-2"
            >
              {editingTask?._id === task._id ? (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                  <input {...register("title")} className="border p-1 rounded" />
                  <input {...register("description")} className="border p-1 rounded" />
                  <div className="flex gap-2">
                    <Button type="submit" className="bg-black text-white">Save</Button>
                    <Button variant="outline" onClick={() => setEditingTask(null)} className="text-black">Cancel</Button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between items-center">
                  <span>{task.title}</span>
                  <div className="flex gap-2">
                    <Button onClick={() => setEditingTask(task)} className="bg-black text-white">Edit</Button>
                    <Button variant="outline" onClick={() => handleDelete(task._id)} className="text-black">Delete</Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </Draggable>
      ))
    ) : (
      <p>No tasks available</p>
    )}
  </div>
  )
}
