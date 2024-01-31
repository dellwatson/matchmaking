import { create } from "zustand";

export const EVM_NETWORK = [
  { name: "L2-Starknet-goerli", chainId: 5, type: "starknet", native: "ETH" },
  { name: "Artela", chainId: 11822, native: "ART" },
  { name: "Aeron", chainId: 462, native: "TAREA" },
  // { name: "Starknet testnet" },
];

const networkStore = create((set, get) => {
  return {
    set,
    get,
    selectedNetwork: EVM_NETWORK[1],
    setNetwork: (selectedNetwork: any) => {
      // GAME NETWORK ->> make it into array so possible to get
      set({
        selectedNetwork,
      });
    },
  };
});

export default networkStore;
