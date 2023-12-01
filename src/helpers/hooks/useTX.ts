import {
  getContractAddress,
  getContractABI,
  CHAIN_ID,
} from "@/web3/contract-list";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  useContractWrite,
  usePrepareContractWrite,
  erc721ABI,
  erc20ABI,
  useNetwork,
} from "wagmi";

export default function useTX(type = "", functionName = "", args = []) {
  const { chain } = useNetwork();
  const { config } = usePrepareContractWrite({
    address: getContractAddress(type),
    abi: getContractABI(type),
    functionName,
    args,
    chainId: CHAIN_ID,
  });
  const { data, isLoading, isSuccess, write, error } = useContractWrite(
    // config
    {
      address: getContractAddress(type),
      abi: getContractABI(type),
      functionName,
      args,
      chainId: Number(CHAIN_ID),
    }
  );

  const _write = () => {
    if (chain?.id !== Number(CHAIN_ID)) {
      // todo: switch network 1st
      toast?.error("Error, wrong network");
    }
    write?.();
  };

  console.log(
    data,
    isLoading,
    isSuccess,
    type,
    error,
    "errorerrorerror",
    getContractAddress(type),
    CHAIN_ID
    // getContractABI(type)
  );

  return {
    data,
    isLoading,
    isSuccess,
    write: _write,
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
