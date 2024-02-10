const Task = ({ allTask, onDelete, onToggleComplete }) => {
  const { id, task, completed, priority } = allTask;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(id);
  };
  let priorityColor = "";
  switch (priority) {
    case "low":
      priorityColor = "bg-sky-400";
      break;
    case "medium":
      priorityColor = "bg-yellow-400";
      break;
    case "high":
      priorityColor = "bg-red-400";
      break;
    default:
      priorityColor = "";
  }
  return (
    <div className={`p-4 mb-4 rounded-lg shadow-lg ${priorityColor}`}>
      <span>{task}</span>
      <button onClick={handleToggleComplete}>
        {completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={handleDelete}>Delete</button>
      <span>Priority: {priority}</span>
    </div>
  );
};

export default Task;
