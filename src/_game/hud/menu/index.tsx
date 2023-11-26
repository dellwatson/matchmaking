import { FullScreen, Settings } from "@/components/lobby/interfaces/LobbyTop";
import React from "react";

export default function Menu() {
  return (
    <>
      {[<FullScreen />, <Settings />].map((item, i) => (
        <div
          key={`box-ability-${i}`}
          className="p-2 rounded-full border border-gray-600 bg-gray-300 ml-2"
        >
          {item}
        </div>
      ))}
    </>
  );
}
