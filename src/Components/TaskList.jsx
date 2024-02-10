import React from "react";
import Task from "./Task";
const TaskList = ({ allTask, onDelete, onToggleComplete }) => {
  return (
    <div className="px-6 mt-10">
      <h2 className="font-bold tracking-wider text-lg">Your Task List</h2>
      <div className="grid grid-cols-3 items-center gap-10 ">
        {allTask.map((task) => (
          <Task
            key={task.id}
            allTask={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};
export default TaskList;
