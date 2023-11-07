import React, { useRef, useEffect } from "react";
import nipplejs from "nipplejs";
import controlStore from "./control-store";

function Joystick(props) {
  // const controlMode = useStore((state) => state.controlMode);
  const controlMode = controlStore((s) => s.mode);
  const set = controlStore((state) => state.set);

  const containerRef = useRef(null);
  let joystick = null;

  useEffect(() => {
    if (containerRef.current) {
      joystick = nipplejs.create({
        zone: containerRef.current,
        mode: "dynamic",
        // mode: "static",
        size: 150,
        color: "yellow",
      });

      // Example of listening to an event:
      joystick.on("move", (evt, data) => {
        // todo: back to center all will be false
        set((state) => ({
          ...state,
          controls: {
            ...state.controls,
            left: data?.direction?.angle === "left",
            right: data?.direction?.angle === "right",
            up: data?.direction?.angle === "up",
            down: data?.direction?.angle === "down",
            // left: data?.direction?.x === "left",
            // right: data?.direction?.x === "right",
            // up: data?.direction?.y === "up",
            // down: data?.direction?.y === "down",
          },
          infos: data,
        }));
      });

      // Cleanup function to destroy joystick on unmount
      return () => {
        if (joystick) {
          joystick.destroy();
          joystick = null;
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    />
  );
}

export default Joystick;
