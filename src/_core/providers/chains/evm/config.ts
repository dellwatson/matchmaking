import { http, createConfig } from "wagmi";
import { mainnet, sepolia, taraxaTestnet } from "wagmi/chains";

export const config = createConfig({
  chains: [
    // mainnet,
    taraxaTestnet,
    sepolia,
    //custom
  ],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
