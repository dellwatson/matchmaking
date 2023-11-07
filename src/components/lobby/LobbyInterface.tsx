import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LobbyTop from "./interfaces/LobbyTop";
import LobbyLeft from "./interfaces/LobbyLeft";
import LobbyRight from "./interfaces/LobbyRight";
import GlowingText from "../_ui/text/glowing-text";
import CornerBox from "../_ui/box/CornerBox";
import DailyPerformances from "./daily-performances";

export default function LobbyInterface() {
  // mobile interfaces too
  return (
    <div className="absolute z-10 w-full    border-red-500">
      <LobbyTop />
      {/* <LobbyLeft /> */}
      <LobbyRight />
    </div>
  );
}

export function LobbyInterfaceBot() {
  // mobile interfaces too
  const navigate = useNavigate();
  return (
    <div className="absolute z-10 w-full  border border-purple-500 ">
      <div className="absolute bottom-1 m-4 ">
        <CornerBox
          classNameOutside=" w-[400px] xl:min-h-[700px] "
          className="w-full h-full "
          background="rgba(0, 0, 0, 0.9)"
        >
          <DailyPerformances />
        </CornerBox>
      </div>

      <div className="absolute bottom-1 right-1 font-bold m-4">
        <CornerBox
          onClick={() => {
            navigate("/match-room");
          }}
          border
          classNameOutside=" p-8 w-[300px] cursor-pointer"
          className="flex justify-center items-center w-full h-full uppercase"
          background="rgba(0, 0, 0, 0.9)"
        >
          <GlowingText
            color="red"
            effect="pulsate"
            size={20}
            unit="px"
            fontSize="24px"
          >
            PLAY
          </GlowingText>
        </CornerBox>
      </div>
    </div>
  );
}

// corner?
// accordion?
//
const Box = ({
  // bg
  // border
  variant = "transparent",
  children,
  className = "",
  classNameInside = "",
}) => {
  // transparent
  return (
    <div
      className={` 
      border-1
    border-green-300
    //border-[#FDFFFF]
    rounded-sm
    backdrop-blur-sm
    overflow-hidden
    ${className}
    `}
    >
      <div
        className={` 
        w-full h-full
        absolute
        border
        bg-gradient-to-r from-[#84D4BC] to-[#333333]
         opacity-25
         `}
      />
      <div
        className={` 
      ${classNameInside}
      `}
      >
        {children}
      </div>
    </div>
  );
};
