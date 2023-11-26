import assetLsp8 from "@/web3/abis/asset-lsp8";
import pointsLsp7 from "@/web3/abis/points-lsp7";
import gemLsp7 from "@/web3/abis/gem-lsp7";
import {
  useContractWrite,
  usePrepareContractWrite,
  erc721ABI,
  erc20ABI,
} from "wagmi";
import shipLsp8 from "@/web3/abis/ship-lsp8";
import passLsp8 from "@/web3/abis/pass-lsp8";
import ticketLsp8 from "@/web3/abis/ticket-lsp8";
import managerClaim from "@/web3/abis/manager-claim";
import explorePlay from "@/web3/abis/explore-play";
import shop from "@/web3/abis/shop";

export default function useTX(type = "", functionName = "", args = []) {
  const { config } = usePrepareContractWrite({
    address: getContractAddress(type),
    abi: getContractABI(type),
    functionName,
    args,
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log(
    data,
    isLoading,
    isSuccess,
    "tst",
    type,
    getContractAddress(type)
  );
  return {
    data,
    isLoading,
    isSuccess,
    write,
  };

  //   return (
  //     <div>
  //       <button disabled={!write} onClick={() => write?.()}>
  //         Feed
  //       </button>
  //       {isLoading && <div>Check Wallet</div>}
  //       {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
  //     </div>
  //   )
}

// {
//     data?: { hash: Hex }
//     error?: Error
//     isError: boolean
//     isIdle: boolean
//     isLoading: boolean
//     isSuccess: boolean
//     write: ((args?: WriteContractConfig) => void) | undefined
//     writeAsync: ((args?: WriteContractConfig) => Promise<{ hash: Hex }>) | undefined
//     reset: () => void
//     status: 'idle' | 'error' | 'loading' | 'success'
//   }

function getContractAddress(type = "") {
  switch (type) {
    case "gemtoken":
      return "0x5c347CE1CA5606d992Fb31AB529C8A3d55a6E2d4"; // GEMTOKEN

    case "expoints":
      return "0x283C4Cc50D0209dA029b9a599EB28C80B3957B34"; // EXPOINTS

    case "asset":
      return "0xd65d3146f6a46158741DB47E56da197115879938"; // NFTASSET

    case "nftship":
      return "0x9cf184163351a9b2cAb63a351F34532EA2913764"; // NFTSHIP

    case "nftpass":
      return "0x7A596d23C80000Cc3aeCf9CdD6be086cd8A2AB6C"; // NFTPASS

    case "nftticket":
      return "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A"; // NFTTICKET

    case "managerclaim":
      return "0xE2eec3443AF330514E9fb6B3Fa6880f56c069D8C"; // MANAGERCLAIM

    case "exploreplay":
      return "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A"; // EXPLOREPLAY

    case "shop":
      return "0x558A682636988925F48eF58d3975293665b69C86"; // SHOP

    default:
      return "0x5c347CE1CA5606d992Fb31AB529C8A3d55a6E2d4";
  }
}
function getContractABI(type = "") {
  switch (type) {
    case "gemtoken":
      return gemLsp7; // GEMTOKEN

    case "expoints":
      return pointsLsp7; // EXPOINTS

    case "asset":
      return assetLsp8; // NFTASSET

    case "nftship":
      return shipLsp8; // NFTSHIP

    case "nftpass":
      return passLsp8; // NFTPASS

    case "nftticket":
      return ticketLsp8; // NFTTICKET

    case "managerclaim":
      return managerClaim; // MANAGERCLAIM

    case "exploreplay":
      return explorePlay; // EXPLOREPLAY

    case "shop":
      return shop; // SHOP

    default:
      return shop;
  }
}
