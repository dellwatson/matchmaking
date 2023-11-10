import React, { useRef, useEffect } from "react";
import controlStore from "./control-store";
// import useStore from "../../store";

const pressed = [];

function useKeys(target, event, up = true) {
  useEffect(() => {
    const downHandler = (e) => {
      if (target.indexOf(e.key) !== -1) {
        const isRepeating = !!pressed[e.keyCode];
        pressed[e.keyCode] = true;
        if (up || !isRepeating) event(true);
      }
    };

    const upHandler = (e) => {
      if (target.indexOf(e.key) !== -1) {
        pressed[e.keyCode] = false;
        if (up) event(false);
      }
    };

    window.addEventListener("keydown", downHandler, { passive: true });
    window.addEventListener("keyup", upHandler, { passive: true });
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [target, event, up]);
}

export default function Keyboard() {
  // const set = useStore((state) => state.set);
  const set = controlStore((state) => state.set);

  useKeys(["ArrowLeft", "a", "A"], (left) => {
    set((state) => ({ ...state, controls: { ...state.controls, left } }));
  });
  useKeys(["ArrowRight", "d", "D"], (right) =>
    set((state) => ({ ...state, controls: { ...state.controls, right } }))
  );
  useKeys(["ArrowUp", "w", "W"], (up) =>
    set((state) => ({ ...state, controls: { ...state.controls, up } }))
  );
  useKeys(["ArrowDown", "s", "S"], (down) =>
    set((state) => ({ ...state, controls: { ...state.controls, down } }))
  );

  return null;
}
