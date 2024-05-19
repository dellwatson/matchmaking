import { ABI_TRC1155 } from "@/_core/abis/TRC1155";
import { useReadContracts } from "wagmi";

// useReadInventory(contractsArray)
// --> useViewEVM()

//contracts
function useViewEVM(
  { contractAddress = "", contractName = "", functionName = "", args = [] },
  rest = {}
  //   contracts
) {
  // useEffect contracts changed ?

  const { data } = useReadContracts({
    //cacheKey
    contracts: [
      {
        address: contractAddress,
        abi: rest?.ABI,
        functionName: functionName,
        args,
        chainId: rest?.chainId,
      },
      // ...
    ],
  });

  return {
    data,
  };
}

export default useViewEVM;
