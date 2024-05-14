import React, { useEffect, useState } from "react";
import {
  ALL_PRODUCTS,
  MOCK_ADDRESS_INVENTORY,
  MOCK_INVENTORY,
} from "../../_backend/_mockBackend/listInventory";
import { profileStore } from "./useProfile";
import { MOCK_LIST_ALL_CONTRACTS } from "../../_backend/_mockBackend/allContracts";
import { viewAptos } from "./contract/useViewAptos";
import { equipmentStore } from "./useEquipment";
import { getAptosNFTs } from "@/_backend/_mockBackend/loadAptos";

//v1
// inventory require to load from backend
// need to combine and separate the NFT from different blockchain?
// combine them all in backend ----->

//v2
// load nfts from evm-accounts.
// if connected or disconnect or change network or change address -> must release the equipment (using local instead?)
// and later on the game verifying -> backend simply verify, if curent address has NFT...
//
//
export default function useInventory() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { profiles } = profileStore();
  const { equipments } = equipmentStore();

  //useEVMReadContracts

  //equipments
  useEffect(() => {
    if (data?.length && equipments?.length) {
      const updatedData = data?.map((item) => {
        if (item?.category?.toLowerCase() !== "ship") return item; // Skip

        const equipment = equipments.find(
          (equip) =>
            equip?.id === item?.id && equip?.category?.toLowerCase() === "ship"
        );

        if (equipment) {
          return { ...item, equipped: true };
        }

        return item;
      });

      // Update the state or do whatever you need with the updatedData
      // For example, if you're using hooks:
      setData(updatedData);
    }
  }, []);

  // v2: everytime profile evm change
  // or other profile added, it will change the list available
  // limit equipment to have all in same network chain ??
  //
  useEffect(() => {
    // load from contracts, and fetch metadata?
    // load the detail products ?
    // combined them

    async function load() {
      setLoading(true);
      // load NFTs
      // console.log(profiles, "profiles");
      if (!profiles?.length) return;
      profiles?.map(async (item, i) => {
        // if (item?.network?.toLowerCase() === "aptos") {
        //   getAptosNFTs(
        //     item?.address,
        //     "0xe895013a4360a07c13829974865fd90988d7287e13a41342a4e62d6f1be32576"
        //   );
        // }

        const res = await getNFTs(item?.address, item?.network); // item chain
        console.log("total nfts", res);
        setData([...res]);
        // setData([...data, ...res]);

        setLoading(false);
      });

      // 2 equips (aptos and eth)
      // category = ship, -->
      //
      // change address, the other
      // ship 0x123 eth equipped
      // change 0xAA has ship... ->
      //
      // onPlay/onLobby -> equipped -> validate on inventory (BASED ON)
      //

      // for (let i = 0; profiles?.length; i++) {
      //   const item = profiles[i];
      //   const res = await getNFTs(item?.address, item?.network);
      //   console.log(res, "res");
      //   setData([...data, ...res]);
      // }
      // setData(MOCK_INVENTORY);
    }
    load();
  }, [
    profiles?.length,

    //
  ]);
  // todo: reload after changing acc
  // detect network / account change...

  return {
    data,
    isLoading,
  };
}

// function toLowerCaseRecursive(obj) {
//   if (obj !== null && typeof obj === "object") {
//     for (const key in obj) {
//       if (typeof obj[key] === "string") {
//         obj[key] = obj[key].toLowerCase();
//       } else if (Array.isArray(obj[key])) {
//         obj[key].forEach((item) => toLowerCaseRecursive(item));
//       } else if (typeof obj[key] === "object") {
//         toLowerCaseRecursive(obj[key]);
//       }
//     }
//   }
// }

function filterContracts(network, category) {
  return MOCK_LIST_ALL_CONTRACTS.flatMap((contractGroup) => {
    // Check if network matches or network is not provided
    if (
      !network ||
      contractGroup?.network.toLowerCase() === network.toLowerCase()
    ) {
      return contractGroup.list_contracts.map((contract) => {
        // If contract doesn't have a network, inherit from parent contract group
        if (!contract?.network) {
          // Return a new object with the inherited network property
          return { ...contract, network: contractGroup.network };
        }
        return contract;
      });
    }
    return [];
  }).filter((contract) => {
    // Filter based on category if provided
    return (
      !category || contract.category.toLowerCase() === category.toLowerCase()
    );
  });
}

// category
const getAssetContracts = (network = "aptos", category = "nft") => {
  return filterContracts(network, category);
};

const getAllproductsMeta = () => {
  return ALL_PRODUCTS;
};

// allAssetContracts as 3rd arguments instead
// move it to backend !

const prepareLoadNFTs = async (
  ownerAddress: string,
  network: string,
  chainId: any
) => {
  //
  // get network chainId of the contracts
  const listContracts = [];
  //  set store?
  //
  // if EVM -> load
  //
  // read contracts
};

// ownerAddress
// network
// collectionId
// chainId
const getNFTs = async (ownerAddress: string, network: string, chainId: any) => {
  //
  // load network contract address;
  // dataContractAddress
  const allAssetContracts = getAssetContracts(network) as any; // [nfts,nfts,nfts_address]
  const allProductsMeta = getAllproductsMeta();
  //
  const result = MOCK_ADDRESS_INVENTORY?.find(
    (o) =>
      o?.address?.toLowerCase() === ownerAddress?.toLowerCase() &&
      network?.toLowerCase() === o?.network?.toLowerCase()
  )?.list as any;

  let result_real = [];
  // allAssetContracts?.map((item, i) =>

  await Promise.all(
    allAssetContracts?.map(async (item) => {
      if (item?.provider === "evm") {
        // load from wagmi
        // balanceOf(address)
      } else if (item?.provider === "move") {
        // load from
        // balanceOf get from
        // // getBalance yeah get from contract
        // const res = await viewAptos({
        //   contractAddress: item?.address,
        //   contractName: item?.title,
        //   functionName: item?.address,
        //   args: [address],
        // });

        const dataNFTs = await getAptosNFTs(ownerAddress, item?.collectionId);
        console.log(
          dataNFTs,
          "dataNFTs",
          filterAndCombineObjects(allProductsMeta, dataNFTs, network)
        );
        const newArray = filterAndCombineObjects(
          allProductsMeta,
          dataNFTs,
          network
        );
        result_real = result_real?.concat(newArray);
      }
    })
  );

  // load each address on contracts and return inventory
  // read if contracts type evm
  // else read by Aptos
  //
  //
  // or from GRAPH

  return result_real;
  // return [...result, ...result_real];
};

function filterAndCombineObjects(products, tokens, network) {
  const result = [];

  tokens?.forEach((tokenObj) => {
    const tokenName = tokenObj?.current_token_data?.token_name;
    const match = tokenName.match(/MODEL_(\d+)_/i); // Extracting the number from the token_name

    if (match) {
      const productId = match[1]; // Extracted product ID

      // Finding the product with matching ID
      const product = products.find((product) => product?.id === productId);

      if (product) {
        // Finding the matched nft with the given network
        const matchedNetwork = product?.nfts?.find(
          (nft) => nft.network.toLowerCase() === network.toLowerCase()
        );

        if (matchedNetwork) {
          // Constructing the result object
          result.push({
            ...product,
            minted: {
              ...matchedNetwork,
              ...tokenObj,
            },
          });
        }
      }
    }
  });

  return result;
}
