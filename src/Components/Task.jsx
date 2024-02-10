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
      priorityColor = "from-sky-400";
      break;
    case "medium":
      priorityColor = "from-yellow-400";
      break;
    case "high":
      priorityColor = "from-red-400";
      break;
    default:
      priorityColor = "";
  }
  return (
    <div
      className={`p-4 mb-4 rounded-lg mt-4 shadow-lg relative bg-gradient-to-b  to-white ${priorityColor}`}
    >
      <h1 className="text-2xl font-bold capitalize my-2">{task}</h1>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleComplete}
          className="checkbox checkbox-primary checkbox-sm"
        />
        <button onClick={handleToggleComplete} className="ml-2">
          {completed ? "Complete" : "Incomplete"}
        </button>
      </div>
      <div className=" absolute top-2 right-2 ">
        <button
          data-tip="Delete"
          onClick={handleDelete}
          className="font-bold text-xl text-white bg-black px-2 py-0 rounded-full tooltip tooltip-left"
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
  );
};

export default Task;
