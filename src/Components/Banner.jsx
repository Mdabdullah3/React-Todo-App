import { format, isToday } from "date-fns";
import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
const Banner = () => {
  const today = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = today.toLocaleDateString("en-US", options);
  return (
    <div className="mt-10 bg-gradient-to-b from-primary to-neutral rounded-t-3xl  md:px-6 px-2 md:py-9 py-6">
      <div className="">
        <h1 className="md:text-6xl lg:text-7xl text-4xl font-bold tracking-wider">
          Good Morning
        </h1>
        <div className="flex items-center justify-between pb-4">
          <div>
            <p className="flex items-center gap-2 text-red-500 my-2 font-bold">
              <HiOutlineSpeakerphone size={20} /> 11 Task
              <span className="text-secondary font-normal">Are Incomplete</span>
            </p>
            <p className="md:text-xl">
              <span className="md:text-3xl text-xl font-bold mr-2">
                Today's {dayOfWeek}
              </span>
              {isToday(today) && format(today, "dd MMM yyyy")}
            </p>
          </div>
          <div>
            <p className="md:text-4xl text-xl font-bold tracking-wider text-center mb-1">
              50% Done
            </p>
            <h1 className="md:text-2xl tracking-wider md:text-start text-center">
              Completed Task
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
