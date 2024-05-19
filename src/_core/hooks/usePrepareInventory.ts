import React, { useEffect, useState } from "react";
// import useViewEVM from "./contract/useViewEVM";
import { ABI_TRC1155 } from "../abis/TRC1155";
import { useReadContracts } from "wagmi";
import useViewContractsEVM from "./contract/useViewContractsEVM";
import { create } from "zustand";
import { fetchInventoryContracts } from "@/_backend/data/loadSupabase";

// usePrepareInventory
export default function usePrepareInventory() {
  // read contract inventory updated?
  // contract EVM ?
  const [contracts, setContracts] = useState([]);
  const { inventory, setInventory } = inventoryStore();

  // load new state read value
  // ..

  //   useViewEVM;
  const { data, error } = useViewContractsEVM(contracts);
  console.log(data, "DATA INVENTORY");

  async function updateInventoryContracts(profile) {
    console.log(profile, "THIIS PREPARATION ");

    // provider - chain
    const loadContracts = await fetchInventoryContracts(
      profile?.chainId,
      profile?.provider
    );

    // console.log(loadContracts, "loadContracts ??");

    // should load abi from here too?
    // LIS mock
    const contractList = loadContracts?.map((c) => c?.address);
    // console.log(contractList, "contraclist now");
    // setContracts

    // evm
    const preparedContracts = contractList.map((nftAddress) => ({
      address: nftAddress,
      abi: ABI_TRC1155, // change abi if different evm ?
      functionName: "balanceOfAll",
      args: [profile?.address],
      chainId: profile?.chainId,
      network: profile?.network,
    }));
    console.log(preparedContracts, "preparedContracts");
    // EVMcontracts
    setContracts(preparedContracts);

    // or INKS
  }

  // todo: reformat data into suitable inventory
  useEffect(() => {
    // when data change and prev contracts too?
    // then update to storeInventory/stateInventory

    const updatingInventory = () => {
      // condition if(!data) return;

      const inv = [];
      // beware with the address here:
      data?.map((item, i) => {
        // 3 arrays -> id, quantity, supply
        const basePayload = {
          address: contracts[i]?.address,
          owner: contracts[i]?.args[0],
          chainId: contracts[i]?.chainId,
          network: contracts[i]?.network,
        };

        // sampleData = [{result: [
        //     [1,2],
        //     [1,1],
        //     [1,1],
        // ],status:'success'}]
        // iterate per address
        const TOKEN_IDS = item?.result?.[0];
        const TOKEN_QUANTITY = item?.result?.[1];
        const TOKEN_SUPPLY = item?.result?.[2];

        for (let z = 0; z < TOKEN_IDS?.length; z++) {
          const payload = {
            ...basePayload,
            tokenId: Number(TOKEN_IDS[z]),
            quantity: Number(TOKEN_QUANTITY[z]),
            supply: Number(TOKEN_SUPPLY[z]),
          };
          console.log(
            typeof TOKEN_IDS[z],
            typeof Number(TOKEN_IDS[z]),
            typeof parseInt(TOKEN_IDS[z]),

            Number(TOKEN_IDS[z]),
            parseInt(TOKEN_IDS[z]),
            "TYPEOF BIG int?"
          );
          inv.push(payload);
        }
      });

      // probably load supabase batch with tokenIds
      // or based on drat-id products let's ssee

      console.log(inv, "FINAL new reformat data");
      // update into store inventory
      setInventory(inv);
    };
    updatingInventory();
  }, [data]);
  //useEffect -> contracts ??

  return {
    //
    //
    updateInventoryContracts,
    // isLoading
    error,
    inventory,
  };
}

export const inventoryStore = create((set, get) => {
  return {
    set,
    get,
    inventory: [],
    setInventory: (v: any) => {
      set({
        inventory: v,
      });
    },
    resetInventory: () => {
      set({
        inventory: [],
      });
    },
  };
});
