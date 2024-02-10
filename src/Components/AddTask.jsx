import React from "react";

const AddTask = () => {
  return (
    <div className="mt-12 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wider">Create New Task</h1>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="bg-primary px-8 py-3 text-white font-bold rounded-sm border-[1px] border-primary hover:bg-transparent hover:text-primary transition duration-500"
        >
          Add Task
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box"></div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default AddTask;
