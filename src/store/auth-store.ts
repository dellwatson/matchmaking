import { create } from "zustand";

const useStore = create((set, get) => {
  return {
    set,
    get,
  };
});

export default useStore;
