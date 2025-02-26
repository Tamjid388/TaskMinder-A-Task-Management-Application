import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export const TODO = ({tasks}) => {
  
    const todo = tasks?.filter((task) => task.status === 'To-Do');
  // Handle drag end
  const handleDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside, do nothing

    const reorderedTasks = [...todo];
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    // Update the state with the new order
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        reorderedTasks.find((t) => t.id === task.id) || task
      )
    );
  };



  return (
    <div>
    <div className="bg-gray-200 w-96 rounded-xl p-4 shadow-md">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">To-Do</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {todo?.length > 0 ? (
                todo.map((mytask, idx) => (
                  <Draggable key={mytask._id} draggableId={mytask._id} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 bg-green-400 rounded-md shadow-md"
                      >
                        {mytask.title}
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <p>No tasks available</p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  </div>
  )
}
