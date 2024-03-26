import React from "react";
import Controller from "./controller";
import Abilities from "./abilities";
import Menu from "./menu";
import Distance from "./stats/distance";
import Radar from "./radar";

export default function Interface() {
  // divide to 4
  return (
    <div className="border-red-500 w-full h-full grid md:grid-cols-2 md:grid-rows-2 bg-transparent absolute z-5 p-2">
      <div className="hidden md:block border-gray-600 ">
        {/* MAP */}
        {/* <Radar /> */}
      </div>
      <div className="hidden md:flex border-gray-600  flex-col items-end ">
        <div className="flex">{/* <Menu /> */}</div>
        <div className="p-4 text-xl ">{/* <Distance /> */}</div>
      </div>
      <div className=" border-gray-600 relative ">
        <Controller />
      </div>
      <div className="hidden md:flex border-gray-600  justify-end items-end ">
        {/* <Abilities /> */}
        <img
          src={"./keyControls.png"}
          className="min-w-[200px] min-h-[200px] relative left-100 scale-75"
        />
      </div>
    </div>
  );
}

const GlassBlock = ({ children }) => <div>{children}</div>;
