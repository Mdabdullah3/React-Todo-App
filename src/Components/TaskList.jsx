import React from "react";
import Task from "./Task";

const TaskList = ({
  allTask,
  onDelete,
  selectedPriority,
  onToggleComplete,
  onEdit,
}) => {
  const filteredTasks =
    selectedPriority === "all"
      ? allTask
      : allTask.filter((task) => task.priority === selectedPriority);

  return (
    <div className="px-6 mt-10">
      {filteredTasks.length !== 0 ? (
        <div>
          <h2 className="font-bold tracking-wider text-lg text-center">
            Your Task
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6 mt-4">
            {filteredTasks.map((task) => (
              <Task
                key={task.id}
                allTask={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-bold text-2xl">No Task Available</h1>
        </div>
      )}
    </div>
  );
};

export default TaskList;
