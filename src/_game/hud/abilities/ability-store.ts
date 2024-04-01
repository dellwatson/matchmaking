import { create } from "zustand";
import BusterImage from "./category/shield/Buster.png";

const abilities = [
  {
    title: "buster",
    image: BusterImage,
    cd: null,
    supply: 3,
    // stock, slot
  },
  {
    title: "2",
    image: BusterImage,
    cd: null,
    locked: true,
    // stock, slot
  },
  {
    title: "3",
    image: BusterImage,
    cd: null,
    locked: true,

    // stock, slot
  },
  {
    title: "4",
    image: BusterImage,
    cd: null,
    locked: true,
    // stock, slot
  },
];
const abilityStore = create((set, get) => {
  // load profile's ability
  const initialState = {
    abilities,
    active: false,
    stars: false,
  };
  return {
    set,
    get,
    ...initialState,
    activate: (v, duration = 5000) => {
      // minus supply, or cd
      set({
        abilities: [
          {
            ...v,
            supply: v?.supply - 1,
          },
          ...abilities.filter((o) => o?.title !== v?.title),
        ],
      });

      if (get().active) {
        // Handle the case where you want to replace the existing active ability
        // You can implement custom logic here, e.g., cancel the previous ability

        // For simplicity, let's just deactivate the existing ability
        set({ active: false });
      }

      // Set the new active ability
      set({
        active: true,
        // activeAbility: ability,
      });

      // Automatically deactivate the ability after the specified duration
      if (duration !== null) {
        setTimeout(() => {
          set({ active: false });
        }, duration);
      }
    },
    setStars: (v, duration = 2000) => {
      // minus supply, or cd
      set({
        abilities: [
          {
            ...v,
            supply: v?.supply - 1,
          },
          ...abilities.filter((o) => o?.title !== v?.title),
        ],
      });

      if (get().active) {
        // Handle the case where you want to replace the existing active ability
        // You can implement custom logic here, e.g., cancel the previous ability

        // For simplicity, let's just deactivate the existing ability
        set({ active: false });
      }

      // Set the new active ability
      set({
        active: true,
        // activeAbility: ability,
      });

      // Automatically deactivate the ability after the specified duration
      if (duration !== null) {
        setTimeout(() => {
          set({ active: false });
        }, duration);
      }
    },
  };
});

export default abilityStore;
