import React from "react";
import Countdown from "./Countdown";
import useStore from "@/_game/store";
import useMessageStore from "./store";
import WarningLine from "./WarningLine";
export default function Message() {
  // check store if there's exist message? else return null
  //   const { contdownStarting } = useStore();
  const { countdownStarting, warningLineDistance } = useMessageStore();

  return (
    <div className="absolute w-full h-full z-10 flex justify-center items-center bg-transparent">
      {/* Announcment: */}
      {/* tutorial */}
      {countdownStarting && <Countdown />}
      {warningLineDistance && <WarningLine />}
    </div>
  );
}
