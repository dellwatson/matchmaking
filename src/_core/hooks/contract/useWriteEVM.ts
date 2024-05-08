import { useState } from "react";
import {
  // useContractWrite,
  useWriteContract,
  usePrepareContractWrite,
  erc721ABI,
  erc20ABI,
  // useNetwork,
  // useSwitchNetwork,
  useAccount,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from "wagmi";

export default function useWriteEVM(
  { contractAddress = "", contractName = "", functionName = "", args = [] },
  rest = {}
) {
  // reconnect = () => {}
  // const { chain } = useNetwork();
  const { chain } = useAccount();
  const { switchChain, error: errorSwitch } = useSwitchChain();

  // args[10] = [
  //   "0x5912a6272ca96d20e991d7959d1e7818bf966fd1299807e817c9dc63e4c35d00",
  //   "0x6b9fa67af3200a539ed3309228a32f08661d2899b7be21152682f96738e7858e",
  //   28,
  // ];

  // console.log(args, "newly args");
  const additional =
    args[0] === false
      ? {}
      : {
          value: args[3], // price
        };

  // const { data: hash, error, isPending, writeContract } = useWriteContract();
  const {
    data,
    isSuccess,
    writeContract,
    error,
    isPending: isLoading,
  } = useWriteContract();
  // config
  // console.log("useEVM", contractAddress, error);
  // console.log(chain?.id, rest?.chainId);

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: data,
    });

  const _write = (v) => {
    // check current client chain and product chain
    if (chain?.id !== Number(rest?.chainId)) {
      // todo: switch network 1st
      // toast?.error("Error, wrong network");
      switchChain({ chainId: Number(rest?.chainId) });
    }
    //change into
    return writeContract?.({
      address: contractAddress,
      abi: rest?.ABI, //getContractABI
      functionName,
      args,
      chainId: rest?.chainId, //product chain
      ...additional,
      //   ...rest,
    });
  };

  return {
    data,
    isLoading,
    isSuccess,
    write: _write,
    error,
  };
}
