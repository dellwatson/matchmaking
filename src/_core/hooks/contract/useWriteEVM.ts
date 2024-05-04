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

  args[10] = [
    "0x5912a6272ca96d20e991d7959d1e7818bf966fd1299807e817c9dc63e4c35d00",
    "0x6b9fa67af3200a539ed3309228a32f08661d2899b7be21152682f96738e7858e",
    28,
  ];

  console.log(args, "newly args");
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
