import Layout from "@/components/lobby/LayoutHeader";
import LobbyRight from "@/components/lobby/interfaces/LobbyRight";
import { LobbyInterfaceBot } from "@/components/lobby/LayoutHeader";
import ShowRoom from "@components/showroom";
import LobbyLeft from "@/components/lobby/interfaces/LobbyLeft";
// import connect from "@/web3/connect";
import { useEffect } from "react";
import { erc20ABI, erc721ABI, useAccount } from "wagmi";
import LSP8ABI from "../web3/abis/lsp8";
import ERCGEM from "../web3/abis/erc20";
import { parseEther } from "viem";
import { Canvas } from "@react-three/fiber";
import {
  isHost,
  myPlayer,
  startMatchmaking,
  useMultiplayerState,
  usePlayersList,
} from "playroomkit";

export default function LobbyPage() {
  // load from DB? and wallet?
  // set main vehicle on lobby

  return (
    <div className="absolute dark:bg-black  h-full w-full !overflow-hidden">
      <LobbyLeft />
      <LobbyRight />

      <Layout />
      {/* <Canvas /> */}
      <ShowRoom />
      <LobbyInterfaceBot />

      {/* <button
        disabled={!write}
        onClick={() =>
          write({
            args: [address, 5],
            // from: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
            // from: address,
            // value: parseEther('0.01'),
          })
        }
      >
        Claim
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>} */}
    </div>
  );
}
