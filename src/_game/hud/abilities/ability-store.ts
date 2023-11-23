import { create } from "zustand";
import BusterImage from "./category/shield/Buster.png";

const abilityStore = create((set, get) => {
  // load profile's ability
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
  return {
    set,
    get,
    abilities,
    activate: (v) => {
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
    },
  };
});

export default abilityStore;
