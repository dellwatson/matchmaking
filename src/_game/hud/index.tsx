import React from "react";
import Controller from "./controller";
import Abilities from "./abilities";
import Menu from "./menu";
import Distance from "./stats/distance";
import Radar from "./radar";

export default function Interface() {
  // divide to 4
  return (
    <div className="border-red-500 w-full h-full grid grid-cols-2 grid-rows-2 bg-transparent absolute z-5 p-2">
      <div className="border-gray-600 ">
        {/* MAP */}
        <Radar />
      </div>
      <div className=" border-gray-600 flex flex-col items-end ">
        <div className="flex">
          <Menu />
        </div>
        <div className="p-4 text-xl ">
          <Distance />
        </div>
      </div>
      <div className=" border-gray-600 relative ">
        <Controller />
      </div>
      <div className=" border-gray-600 flex justify-end items-end ">
        <Abilities />
      </div>
    </div>
  );
}

const GlassBlock = ({ children }) => <div>{children}</div>;
