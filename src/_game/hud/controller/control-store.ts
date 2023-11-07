import { create } from "zustand";

interface IDControlStore {
  device: null | "desktop" | "mobile";
  mode: "all" | "keyboard" | "virtual-joystick" | "gamepad";
}

const controlStore = create((set, get) => {
  return {
    set,
    get,
    device: null,
    controls: {
      left: false,
      right: false,
      up: false,
      down: false,
    },
    infos: null,
    mode: "all",
  };
});

export default controlStore;
