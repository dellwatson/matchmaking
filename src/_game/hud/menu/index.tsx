import { FullScreen, Settings } from "@/components/lobby/interfaces/LobbyTop";
import React from "react";

export default function Menu() {
  // todo menu on
  return (
    <>
      {[<FullScreen />, <Settings />].map((item, i) => (
        <div
          key={`box-ability-${i}`}
          className="p-1 mt-2 rounded-full border border-gray-600  ml-3 blur-backdrop-md">
          {item}
        </div>
      ))}
    </>
  );
}
