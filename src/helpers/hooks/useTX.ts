import networkStore from "@/store/network-store";
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
  useSwitchNetwork,
} from "wagmi";

export default function useTX(
  type = "",
  functionName = "",
  args = [],
  rest = {}
) {
  console.log(rest, "rest");
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  //request network change
  const { selectedNetwork } = networkStore();

  // useEffect(() => {
  //   if (chain?.id !== Number(selectedNetwork?.chainId)) {
  //     switchNetwork?.(selectedNetwork?.chainId);
  //   }
  // }, [chain?.id]);

  // const { config } = usePrepareContractWrite({
  //   address: getContractAddress(type, selectedNetwork?.chainId),
  //   abi: getContractABI(type),
  //   functionName,
  //   args,
  //   chainId: selectedNetwork?.chainId,
  // });
  const { data, isLoading, isSuccess, write, error } = useContractWrite(
    // config
    {
      address: getContractAddress(type, selectedNetwork?.chainId),
      abi: getContractABI(type),
      functionName,
      args,
      chainId: Number(selectedNetwork?.chainId),
      ...rest,
    }
  );

  const _write = () => {
    if (chain?.id !== Number(selectedNetwork?.chainId)) {
      // todo: switch network 1st
      // toast?.error("Error, wrong network");
      switchNetwork?.(selectedNetwork?.chainId);
    }
    return write?.();
  };

  // console.log(
  //   data,
  //   isLoading,
  //   isSuccess,
  //   type,
  //   error,
  //   "errorerrorerror",
  //   getContractAddress(type, selectedNetwork?.chainId),
  //   selectedNetwork?.chainId,
  //   chain,
  //   Number(selectedNetwork?.chainId),
  //   "HELLOS"
  //   // getContractABI(type)
  // );

  return {
    data,
    error,
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
