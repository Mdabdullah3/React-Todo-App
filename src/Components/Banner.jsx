import { format, isToday } from "date-fns";
import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
const Banner = () => {
  const today = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = today.toLocaleDateString("en-US", options);
  return (
    <div className="mt-10 bg-gradient-to-b from-primary to-neutral rounded-t-3xl  px-6 py-9">
      <div className="">
        <h1 className="text-7xl font-bold tracking-wider">Good Morning</h1>
        <div className="flex items-center justify-between pb-4">
          <div>
            <p className="flex items-center gap-2 text-red-500 my-2 font-bold">
              <HiOutlineSpeakerphone size={20} /> 11 Task
              <span className="text-secondary font-normal">Are Incomplete</span>
            </p>
            <p className="text-xl ">
              <span className="text-3xl font-bold mr-2">
                Today's {dayOfWeek}
              </span>
              {isToday(today) && format(today, "dd MMM yyyy")}
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold tracking-wider text-center">
              50% Done
            </p>
            <h1 className="text-2xl tracking-wider">Completed Task</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
