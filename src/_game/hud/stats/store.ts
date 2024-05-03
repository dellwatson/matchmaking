import { create } from "zustand";

const useStatStore = create((set, get) => ({
  speedScore: 0,
  setSpeedScore: (v) => set({ speedScore: v }),
  lineDistance: 0,
  setLineDistance: (v) => set({ lineDistance: v }),
  startTime: 0,
  setStartTime: (v) => set({ startTime: v }),
}));

export default useStatStore;
