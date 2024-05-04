import { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  erc721ABI,
  erc20ABI,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";

export default function useWriteEVM(
  { contractAddress = "", contractName = "", functionName = "", args = [] },
  rest = {}
) {
  // reconnect = () => {}
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const additional =
    args[0] === false
      ? {}
      : {
          value: args[3], // price
        };

  const { data, isLoading, isSuccess, write, error } = useContractWrite(
    // config
    {
      address: contractAddress,
      abi: rest?.ABI, //getContractABI
      functionName,
      args,
      chainId: rest?.chainId, //product chain
      ...additional,
      //   ...rest,
    }
  );
  console.log("useEVM", contractAddress, error);
  console.log(chain?.id, rest?.chainId);

  const _write = () => {
    // check current client chain and product chain
    if (chain?.id !== Number(rest?.chainId)) {
      // todo: switch network 1st
      // toast?.error("Error, wrong network");
      switchNetwork?.(Number(rest?.chainId));
    }
    return write?.();
  };

  return {
    data,
    isLoading,
    isSuccess,
    write: _write,
    error,
  };
}
