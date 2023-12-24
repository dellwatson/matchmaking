import { create } from "zustand";

export const EVM_NETWORK = [
  { name: "Viction Testnet", chainId: 89 },
  { name: "KLAYTN-baobab", chainId: 1001 },
  { name: "INEVM Caldera", chainId: 1738 },
  // { name: "Starknet testnet" },
];

const networkStore = create((set, get) => {
  return {
    set,
    get,
    selectedNetwork: EVM_NETWORK[1],
    setNetwork: (selectedNetwork: any) => {
      set({
        selectedNetwork,
      });
    },
  };
});

export default networkStore;
