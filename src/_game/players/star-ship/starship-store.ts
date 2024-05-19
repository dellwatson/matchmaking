import { create } from "zustand";

const gameshipStore = create((set, get) => ({
  // chargeRef:
  ship_detail: null,
  setGameShip: (ship_detail) => set({ ship_detail }),
}));

export default gameshipStore;
