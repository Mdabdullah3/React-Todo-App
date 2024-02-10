import React from "react";

const UpdateTask = ({
  onClose,
  onSave,
  task,
  setTask,
  priority,
  setPriority,
}) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <form onSubmit={onSave} className="flex flex-col gap-5 mt-5">
          <textarea
            type="text"
            className="textarea textarea-bordered text-lg"
            placeholder="Task Name..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            className="select select-bordered w-full cursor-pointer"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option className="bg-sky-400/40 " value="low">
              Low
            </option>
            <option className="bg-yellow-300/40 cursor-pointer" value="medium">
              Medium
            </option>
            <option className="bg-red-400/40" value="high">
              High
            </option>
          </select>
          <button
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-white"
          >
            Update Task
          </button>
        </form>
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-primary text-white absolute top-1 right-1"
        >
          ✕
        </button>
      </div>
      <div className="modal-backdrop"></div>
    </div>
  );
};

export default UpdateTask;
