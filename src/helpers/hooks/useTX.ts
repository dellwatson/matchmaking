import { getContractAddress, getContractABI } from "@/web3/contract-list";
import {
  useContractWrite,
  usePrepareContractWrite,
  erc721ABI,
  erc20ABI,
} from "wagmi";

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
    type
    // getContractABI(type)
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
