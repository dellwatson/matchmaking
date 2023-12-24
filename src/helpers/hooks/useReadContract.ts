import networkStore from "@/store/network-store";
import {
  CHAIN_ID,
  getContractABI,
  getContractAddress,
} from "@/web3/contract-list";
import { useContractRead } from "wagmi";

export default function useReadContract(
  type = "",
  functionName = "",
  args = []
) {
  const { selectedNetwork } = networkStore();

  const { data, isError, isLoading } = useContractRead({
    address: getContractAddress(type, selectedNetwork.chainId),
    abi: getContractABI(type),
    functionName,
    args,
    chainId: Number(CHAIN_ID),
  });

  console.log(
    data,
    isError,
    isLoading,
    "data, isError, isLoading",
    getContractAddress(type, selectedNetwork.chainId),
    type
  );

  return {
    data,
    isError,
    isLoading,
  };
}
