import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd({ task, priority });
    setTask("");
    setPriority("low");
  };

  return (
    <div className="mt-12 md:px-6">
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-lg font-bold">Create New Task</h1>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="bg-primary md:px-8 px-6 py-3 text-white font-bold rounded-lg border-[1px] border-primary hover:bg-transparent hover:text-primary transition duration-500"
        >
          Add Task
        </button>
        {/* Using Modal For Handling New Task */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog" className="">
              <button className="btn btn-sm btn-circle btn-primary text-white absolute right-1 top-1">
                ✕
              </button>
            </form>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
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
                <option
                  className=" bg-yellow-300/40 cursor-pointer"
                  value="medium"
                >
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
                Add Task
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default AddTask;
