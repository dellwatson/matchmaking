import React, { useState } from "react";
import Joystick from "./virtual-joystick"; // Import your Joystick component
import Keyboard from "./keyboard-stick";

function Controller() {
  return (
    <>
      <Keyboard />
      <div
        className="w-full h-full"
        style={
          {
            // width: "300px",
            // height: "300px",
            // border: "1px solid green",
            // display: "flex",
            // zIndex: 100,
            // position: "relative",
          }
        }
      >
        <Joystick />
      </div>
    </>
  );
}

export default Controller;
