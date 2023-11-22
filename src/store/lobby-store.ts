import { create } from "zustand";

const useStore = create((set, get) => {
  // load data from wallets?

  return {
    set,
    get,
    garage: [
      {
        color: "black",
        materialMesh: "default",
      },

      //glass
      {
        color: "black",
        materialMesh: "refraction",
      },
      // {
      //   color: "brown",
      //   materialMesh: "refraction",
      // },
      // {
      //   color: "green",
      //   materialMesh: "refraction",
      // },
      //
      {
        color: "black",
        materialMesh: "transmission",
      },
      {
        color: "brown",
        materialMesh: "transmission",
      },
      {
        color: "green",
        materialMesh: "transmission",
      },
    ],
    selectedShip: {
      color: "gray",
      materialMesh: "transmission",
      refraction: false,
    },
    selectShip: (selectedShip: any) => {
      set({
        selectedShip,
      });
    },
  };
});

export default useStore;
