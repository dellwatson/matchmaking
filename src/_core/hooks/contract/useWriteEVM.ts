import { useState } from "react";
import { toast } from "react-toastify";
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
import { profileStore } from "../useProfile";

export function useCheckNetworkChain() {
  const { chain } = useAccount();
  const { switchChain, error } = useSwitchChain();

  const { isProfileNetworkFound } = profileStore();

  const changingNetwork = (productChain) => {
    // move to here, as it will always trigger
    switchChain({ chainId: Number(productChain) });

    if (chain?.id !== Number(productChain)) {
      // todo: switch network 1st
      // notify
      // toast?.error("Error, wrong network");
      // switchChain({ chainId: Number(productChain) });
      toast("Please change your network");
    }
  };
  return {
    changingNetwork,
    isProfileNetworkFound,
    error,
  };
}

export default function useWriteEVM(
  { contractAddress = "", contractName = "", functionName = "", args = [] },
  rest = {}
) {
  // reconnect = () => {}
  const { chain } = useAccount();

  const { changingNetwork } = useCheckNetworkChain();

  // console.log(args, "newly args");
  const additional =
    args[0] === false
      ? {}
      : {
          value: args[3], // use price for native token
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
    useWaitForTransactionReceipt({ hash: data });

  const _write = (v) => {
    // console.log("final-args", args, chain?.id, rest.chainId);
    // check current client chain and product chain

    changingNetwork(rest?.chainId);
    //if v exist use args v

    console.log("EXECUTING contract:----->", {
      address: contractAddress,
      abi: rest?.ABI, //getContractABI
      functionName,
      args: v ? v : args,
      chainId: rest?.chainId, //product chain
      ...additional,
      //   ...rest,
    });
    //change into
    return writeContract?.({
      address: contractAddress,
      abi: rest?.ABI, //getContractABI
      functionName,
      args: v ? v : args,
      chainId: rest?.chainId, //product chain
      ...additional,
      //   ...rest,
    });
  };
  console.log(
    isLoading,
    isSuccess,
    isConfirmed,
    isConfirming,
    "confirming status",
    data,
    error
  );

  return {
    data,
    isLoading,
    isSuccess,
    isConfirming,
    isConfirmed,
    write: _write,
    error,
    chain,
  };
}
