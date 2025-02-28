import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export const TODO = ({ tasks, refetch }) => {
  const todo = tasks?.filter((task) => task.status === "To-Do");
  const [editingTask, setEditingTask] = useState(null); // Track the task being edited

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
    <div className="bg-gray-200   rounded-xl p-4 shadow-md min-h-[300px]">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">To-Do</h1>

      <div className="space-y-2">
        {todo?.length > 0 ? (
          todo.map((task, idx) => (
            <Draggable key={task._id} draggableId={task._id} index={idx}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-2 bg-white rounded-md shadow-md flex flex-col gap-2"
                >
                  {editingTask?._id === task._id ? (
                    // Show the form when in editing mode
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                      <input
                        {...register("title")}
                      
                        className="border p-1 rounded"
                      />
                      <input
                        {...register("description")}
                       
                        className="border p-1 rounded"
                      />
                      <div className="flex gap-2">
                        <Button type="submit" className="bg-black text-white">Save</Button>
                        <Button variant="outline" onClick={() => setEditingTask(null)} className=" text-black">Cancel</Button>
                      </div>
                    </form>
                  ) : (
                    // Show task details if not in edit mode
                    <>
                      <div className="flex justify-between items-center">
                        <span>{task.title}</span>
                        <div className="flex gap-2">
                          <Button onClick={() => setEditingTask(task)} className="bg-black text-white">
                            Edit
                          </Button>
                          <Button variant="outline" onClick={() => handleDelete(task._id)} className=" text-black">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </Draggable>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};
