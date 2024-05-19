import { ABI_TRC1155 } from "@/_core/abis/TRC1155";
import { useEffect } from "react";
import { useReadContracts } from "wagmi";

// useReadInventory(contractsArray)
// --> useViewEVM()

//contracts
function useViewContractsEVM(contracts = []) {
  const {
    data,
    failureCount,
    failureReason,
    isFetched,
    isFetching,
    isLoading,
    isRefetching,
    error,
  } = useReadContracts({
    //cacheKey
    contracts,
  });

  console.log(failureCount, failureReason, "failureReason");
  console.log(
    isFetched, //
    isFetching,
    isLoading,
    isRefetching,
    "loading evmContracts"
  );

  useEffect(() => {
    // update the store
  }, []);

  return {
    data,
    error,
  };
}

export default useViewContractsEVM;
