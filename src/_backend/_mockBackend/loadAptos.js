import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
const config = new AptosConfig({
  network: Network.DEVNET,
});
export const aptos = new Aptos(config);

export const getAptosNFTs = async (ownerAddr, COLLECTION_ID) => {
  try {
    const result = await aptos.getAccountOwnedTokensFromCollectionAddress({
      accountAddress: ownerAddr,
      collectionAddress: COLLECTION_ID,
    });

    return result;
  } catch (error) {
    console.log(error, "erro");
    return [];
  }
};
