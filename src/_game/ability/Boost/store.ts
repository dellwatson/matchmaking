import { create } from "zustand";

const useBoostStore = create((set) => ({
  // chargeRef:
  boostBars: 0,
  superBoost: false,
  boostActive: false,
  chargeProgress: 0, // New state for tracking charge progress
  warningMessage: "", // To display warnings

  increaseBoostBars: () =>
    set((state) => ({
      boostBars: Math.min(state.boostBars + 1, 3),
      chargeProgress: 0, // Reset progress after charging
    })),
  setChargeProgress: (progress) => set({ chargeProgress: progress }),
  activateSuperBoost: () => set({ superBoost: true }),
  deactivateSuperBoost: () => set({ superBoost: false }),
  // useBoost: () => {
  //   //
  //   console.log("USE BOOST ACTIVATE");
  //   set((state) => ({ boostBars: Math.max(state.boostBars - 1, 0) }));
  // },
  useBoost: () =>
    set((state) => {
      if (state.boostBars > 0 && !state.superBoost) {
        console.log("USE BOOST ACTIVATE");
        // We need to update the state once, not nested
        const newBoostBars = Math.max(state.boostBars - 1, 0);
        setTimeout(() => {
          // This timeout still needs to call set, but it's not nested directly
          set({ superBoost: false, boostActive: false });
          console.log("Boost ended.");
        }, 6000); // Deactivate super boost after 3 seconds
        return { boostBars: newBoostBars, superBoost: true, boostActive: true };
      }
    }),
}));

export default useBoostStore;
