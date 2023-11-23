import React from "react";
import Controller from "./controller";
import Abilities from "./abilities";

export default function Interface() {
  // divide to 4
  return (
    <div className="border-red-500 w-full h-full grid grid-cols-2 grid-rows-2 bg-transparent absolute z-5 p-2">
      <div className="border-gray-600 ">
        {/* MAP */}
        <div className="w-80 h-80 border border-gray-300  backdrop-blur-xl rounded-full"></div>
      </div>
      <div className=" border-gray-600 flex flex-col items-end ">
        {/* SETTINGS */}
        <div className="flex">
          <div>PROTOTYPE</div>
          {[1, 1, 1, 1].map((item, i) => (
            <div
              key={`box-ability-${i}`}
              className="p-6 border border-gray-600 "
            >
              {item}
            </div>
          ))}
        </div>
        <div className="p-4 text-xl">Distances</div>
      </div>
      <div className=" border-gray-600 relative ">
        <Controller />
        {/* <div className="relative bottom-10 border">
          <div className="w-2/6 h-6 bg-red-300"></div>
          <div className="w-1/6 h-2 bg-blue-300"></div>
        </div> */}
      </div>
      <div className=" border-gray-600 flex justify-end items-end ">
        {/* abilities */}
        <Abilities />
      </div>
    </div>
  );
}

const GlassBlock = ({ children }) => <div>{children}</div>;
