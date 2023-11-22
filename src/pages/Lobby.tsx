import Layout from "@/components/lobby/LayoutHeader";
import LobbyRight from "@/components/lobby/interfaces/LobbyRight";
import { LobbyInterfaceBot } from "@/components/lobby/LayoutHeader";
import ShowRoom from "@components/showroom";
import LobbyLeft from "@/components/lobby/interfaces/LobbyLeft";
// import connect from "@/web3/connect";
import { useEffect } from "react";
import {
  erc20ABI,
  erc721ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
} from "wagmi";
import LSP8ABI from "../web3/abis/lsp8";
import ERCGEM from "../web3/abis/erc20";
import { parseEther } from "viem";
export default function LobbyPage() {
  // load from DB? and wallet?
  // set main vehicle on lobby
  const { chain, chains } = useNetwork();
  const { address } = useAccount();

  // const { data, isError, isLoading } = useContractRead({
  //   address: "0xAcdbeC36C7D8987685db6F695032a9b171f25fb6",
  //   abi: ERCGEM,
  //   functionName: "name",
  //   chainId: 80001,
  // });

  // console.log(typeof data, data, "hooks wagmi", chain, chains);

  // const { data, isLoading, isSuccess, write } = useContractWrite({
  //   address: "0xbe0833eB8f4Ff9BD5aEAFc2ee61925a227D58ABA",
  //   abi: LSP8ABI,
  //   functionName: "mintWithoutOwnership",
  //   // args: [address, 1],
  //   chainId: 4201,
  // });

  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      {/* <LobbyLeft />
      <LobbyRight />
      <Layout /> */}
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
