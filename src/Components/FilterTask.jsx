import React from "react";

const FilterTask = ({ selectedPriority, setSelectedPriority }) => {
  return (
    <div>
      <div className="mt-4 flex justify-center">
        <button
          className={`mx-2 ${
            selectedPriority === "all"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setSelectedPriority("all")}
        >
          All
        </button>
        <button
          className={`mx-2 ${
            selectedPriority === "low"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setSelectedPriority("low")}
        >
          Low
        </button>
        <button
          className={`mx-2 ${
            selectedPriority === "medium"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setSelectedPriority("medium")}
        >
          Medium
        </button>
        <button
          className={`mx-2 ${
            selectedPriority === "high"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } px-4 py-2 rounded-lg`}
          onClick={() => setSelectedPriority("high")}
        >
          High
        </button>
      </div>
    </div>
  );
};

export default FilterTask;
