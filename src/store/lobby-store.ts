import { create } from "zustand";

const lobbyStore = create((set, get) => {
  // load data from wallets?
  const garage = [
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
  ];

  return {
    set,
    get,
    garage,
    selectedShip: garage[0],
    selectedShipGame: null,
    selectShip: (selectedShip: any) => {
      set({
        selectedShip,
      });
    },
  };
});

export default lobbyStore;
