// for global setup, across lobby and game
import { create } from "zustand";

const globalStore = create((set, get) => {
  return {
    set,
    get,
    isFullScreen: false,
    setFullScreen: (val: boolean) => {
      set({
        isFullScreen: val,
      });
    },
  };
});

export default globalStore;
