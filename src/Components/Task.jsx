import React, { useState } from "react";
import UpdateTask from "./UpdateTask";

const Task = ({ allTask, onDelete, onToggleComplete, onEdit }) => {
  const {
    id,
    task: initialTask,
    completed,
    priority: initialPriority,
  } = allTask;
  const [task, setTask] = useState(initialTask);
  const [priority, setPriority] = useState(initialPriority);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onEdit(id, task, priority);
    setIsEditing(false);
  };
  // handle Card background Color By priority Color
  const priorityColor = (() => {
    switch (priority) {
      case "low":
        return "from-sky-400";
      case "medium":
        return "from-yellow-400";
      case "high":
        return "from-red-400";
      default:
        return "";
    }
  })();
  return (
    <div>
      {isEditing ? (
        <UpdateTask
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
          task={task}
          setTask={setTask}
          priority={priority}
          setPriority={setPriority}
        />
      ) : (
        <div
          className={`p-4 rounded-lg mt-2 shadow-lg relative bg-gradient-to-b  to-white ${priorityColor}`}
        >
          <h1 className="text-xl font-bold capitalize my-2 mt-5">{task}</h1>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={handleToggleComplete}
              className="checkbox checkbox-secondary checkbox-sm"
            />
            <button onClick={handleToggleComplete} className="ml-2">
              {completed ? "Complete" : "Incomplete"}
            </button>
          </div>
          <div className="absolute top-1 right-2">
            <button
              data-tip="Edit"
              onClick={handleEdit}
              className="font-bold text-sm py-1 text-white bg-black px-2  rounded-full tooltip tooltip-top mr-2"
            >
              Edit
            </button>
            <button
              data-tip="Delete"
              onClick={handleDelete}
              className="font-bold text-lg text-white bg-black px-2 py-0 rounded-full tooltip tooltip-top"
            >
              X
            </button>
          </div>
          <h1
            className={`mt-6 capitalize text-lg px-4 py-1 rounded-full text-white font-bold bg-gradient-to-t w-auto text-center to-neutral/60 ${priorityColor}`}
          >
            {priority}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Task;
