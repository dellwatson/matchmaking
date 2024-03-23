import { TProvider } from "@/_type/Contract";
import React from "react";
import useWriteAptos from "./contract/useWriteAptos";

// get from useContract shop ?
export default function usePurchase(
  // network
  //   data, //data for?
  provider: TProvider = "evm",
  network: string,
  { contractAddress = "", contractName = "", functionName = "", args = [] }
) {
  //native
  // const { write: writeEVM, isLoading: isLoadingEVM, error: errorEVM } = useWriteEVM({
  //     contractAddress: "",
  //     contractName: "",
  //     functionName: "",
  //     args: [],
  // });

  // become option Gateaway to choose tx hooks
  // getContractAddress
  const {
    write: writeAptos,
    isLoading: isLoadingAptos,
    error: errorAptos,
  } = useWriteAptos({
    contractAddress,
    contractName,
    functionName,
    args,
  });

  return {
    write: writeAptos,
    isLoading: isLoadingAptos,
    error: errorAptos,
  };
}
