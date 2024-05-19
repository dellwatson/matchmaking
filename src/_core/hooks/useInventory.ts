import React, { useEffect, useState } from "react";
import usePrepareInventory from "./usePrepareInventory";
import { fetchDataInventory } from "@/_backend/data/loadSupabase";

export default function useInventory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    inventory: inventoryIds,
    // isLoading
    // refetched?
  } = usePrepareInventory();

  useEffect(() => {
    async function loadInventoryDatabase() {
      setLoading(true);

      try {
        console.log("LOAD INVENTORY DB", inventoryIds);
        const Ids = inventoryIds?.map((o) => o?.tokenId);
        console.log(Ids, " ONLY THE IDS");

        // IMPLYING IF tokenId based on theras-product-id
        const result = await fetchDataInventory(Ids);

        console.log(result, "RESULT DATABSAE");
        //

        const reformatPayload = result?.reduce((acc, nft) => {
          // using tokenId
          const minted = inventoryIds?.find((m) => m?.tokenId === nft?.id);
          console.log(minted, "MINTED MINTED MINTED");

          // //turning off since the other evm address similar on testnet
          //   const mintedChain = nft?.chains?.find(
          //     (j) =>
          //       j?.smart_contract?.address?.toLowerCase() ===
          //       minted?.address?.toLowerCase()
          //   );

          const mintedChain = nft?.chains?.find(
            (j) => j?.network?.chain_id === minted?.chainId
          );

          if (mintedChain?.smart_contract) {
            acc.push({
              ...nft,
              minted: {
                ...minted,
                network: mintedChain?.network,
                smart_contract: mintedChain?.smart_contract,
              },
            });
          }

          return acc;
        }, []);
        console.log(reformatPayload, "reformat");
        setData(reformatPayload);

        setLoading(false);
      } catch (error) {
        //console.log(error)
        setLoading(false);
      }
    }
    loadInventoryDatabase();
  }, [inventoryIds]);

  return {
    data,
    loading,
  };
}
