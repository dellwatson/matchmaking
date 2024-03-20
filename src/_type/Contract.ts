type TProvider = "move" | "evm" | "substrate" | "solana" | "starknet";

type TView = {
  name: string;
  // Add other properties if necessary
};

type TContract = {
  title: string;
  network: string;
  type: string;
  provider: TProvider;
  category: string;
  address: string;
  abis: any[]; // Replace 'any[]' with the actual type of abis if known
  views: any[];
  write: any[]; // Replace 'any[]' with the actual type of write if known
};

export { TProvider, TContract };
