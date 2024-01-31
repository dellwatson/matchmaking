import assetLsp8 from "@/web3/abis/asset-lsp8";
import pointsLsp7 from "@/web3/abis/points-lsp7";
import gemLsp7 from "@/web3/abis/gem-lsp7";
import shipLsp8 from "@/web3/abis/ship-lsp8";
import passLsp8 from "@/web3/abis/pass-lsp8";
import ticketLsp8 from "@/web3/abis/ticket-lsp8";
import managerClaim from "@/web3/abis/manager-claim";
import explorePlay from "@/web3/abis/explore-play";
import shop from "@/web3/abis/shop";

export const CHAIN_ID = import.meta.env.VITE_CHAIN_ID;

export const TOKEN_GEM = "gemtoken";
export const EXPOINTS = "expoints";
export const ASSET_NFT = "asset";
export const SHIP_NFT = "nftship";
export const PASS_NFT = "nftpass";
export const TICKET_NFT = "nftticket";
export const CLAIM_MANAGER = "managerclaim";
export const EXPLORE_PLAY = "exploreplay";
export const SHOP = "shop";

// export const ADDRESS_TOKEN_GEM = import.meta.env.VITE_ADDRESS_TOKEN_GEM;
// export const ADDRESS_EXPOINTS = import.meta.env.VITE_ADDRESS_EXPOINTS;
// export const ADDRESS_ASSET_NFT = import.meta.env.VITE_ADDRESS_ASSET_NFT;
// export const ADDRESS_SHIP_NFT = import.meta.env.VITE_ADDRESS_SHIP_NFT;
// export const ADDRESS_PASS_NFT = import.meta.env.VITE_ADDRESS_PASS_NFT;
// export const ADDRESS_TICKET_NFT = import.meta.env.VITE_ADDRESS_TICKET_NFT;
// export const ADDRESS_CLAIM_MANAGER = import.meta.env.VITE_ADDRESS_CLAIM_MANAGER;
// export const ADDRESS_EXPLORE_PLAY = import.meta.env.VITE_ADDRESS_EXPLORE_PLAY;
// export const ADDRESS_SHOP = import.meta.env.VITE_ADDRESS_SHOP;

const ADDRESS_CONTRACT = [
  {
    name: "Aeron",
    chainId: 462,
    list: {
      ADDRESS_EXPOINTS: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
      ADDRESS_TOKEN_GEM: "0xbe0833eB8f4Ff9BD5aEAFc2ee61925a227D58ABA",
      ADDRESS_ASSET_NFT: "0xC8E633D1Da2b23A12458682cB0d065A4452b6030",
      ADDRESS_TICKET_NFT: "0x5b6288be71623E408D61D0417A51572d7CBC10e2",
      ADDRESS_PASS_NFT: "0x9EcB83f041a8A3b76bcd9DafC078812047535ABc",
      ADDRESS_STARSHIP_NFT: "0xa921a43516A0c85504d61bd3BD8bcE354a7bBEf1",
      ADDRESS_SHOP: "0xed3f3e6eBf67cf360C5EF3f650e0E69CC3a70CAb",
      ADDRESS_CLAIM_MANAGER: "0x5c347CE1CA5606d992Fb31AB529C8A3d55a6E2d4",
      ADDRESS_EXPLORE_PLAY: "0x283C4Cc50D0209dA029b9a599EB28C80B3957B34",
      // Add more addresses as needed
    },
  },
  {
    name: "Artela",
    chainId: 11822,
    list: {
      ADDRESS_EXPOINTS: "0xFe9DF23d3EFAB6cC71D3395aFFB3aa505d1935eB",
      ADDRESS_TOKEN_GEM: "0x16F0EB9CD042e3D9e519baf660c18f4E8E4eF93e",
      ADDRESS_ASSET_NFT: "0x9D2067BeB1c165FDE0F89E40Bd97f3276C153385",
      ADDRESS_TICKET_NFT: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
      ADDRESS_PASS_NFT: "0xbe0833eB8f4Ff9BD5aEAFc2ee61925a227D58ABA",
      ADDRESS_STARSHIP_NFT: "0xC8E633D1Da2b23A12458682cB0d065A4452b6030",
      ADDRESS_SHOP: "0x5b6288be71623E408D61D0417A51572d7CBC10e2",
      ADDRESS_CLAIM_MANAGER: "0x9EcB83f041a8A3b76bcd9DafC078812047535ABc",
      ADDRESS_EXPLORE_PLAY: "0xa921a43516A0c85504d61bd3BD8bcE354a7bBEf1",
      // Add more addresses as needed
    },
  },
  {
    name: "viction testnet",
    chainId: 89,
    list: {
      ADDRESS_TOKEN_GEM: "0x9D2067BeB1c165FDE0F89E40Bd97f3276C153385",
      ADDRESS_EXPOINTS: "0x16F0EB9CD042e3D9e519baf660c18f4E8E4eF93e",
      ADDRESS_ASSET_NFT: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
      ADDRESS_SHIP_NFT: "0x5b6288be71623E408D61D0417A51572d7CBC10e2",
      ADDRESS_PASS_NFT: "0xC8E633D1Da2b23A12458682cB0d065A4452b6030",
      ADDRESS_TICKET_NFT: "0xbe0833eB8f4Ff9BD5aEAFc2ee61925a227D58ABA",
      ADDRESS_CLAIM_MANAGER: "0xa921a43516A0c85504d61bd3BD8bcE354a7bBEf1",
      ADDRESS_EXPLORE_PLAY: "0xed3f3e6eBf67cf360C5EF3f650e0E69CC3a70CAb",
      ADDRESS_SHOP: "0x9EcB83f041a8A3b76bcd9DafC078812047535ABc",
      // Add more addresses as needed
    },
  },
  {
    name: "inevm caldera",
    chainId: 1738,
    list: {
      ADDRESS_TOKEN_GEM: "0x9D2067BeB1c165FDE0F89E40Bd97f3276C153385",
      ADDRESS_EXPOINTS: "0x16F0EB9CD042e3D9e519baf660c18f4E8E4eF93e",
      ADDRESS_ASSET_NFT: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
      ADDRESS_SHIP_NFT: "0x5b6288be71623E408D61D0417A51572d7CBC10e2",
      ADDRESS_PASS_NFT: "0xC8E633D1Da2b23A12458682cB0d065A4452b6030",
      ADDRESS_TICKET_NFT: "0xbe0833eB8f4Ff9BD5aEAFc2ee61925a227D58ABA",
      ADDRESS_CLAIM_MANAGER: "0xa921a43516A0c85504d61bd3BD8bcE354a7bBEf1",
      ADDRESS_EXPLORE_PLAY: "0xed3f3e6eBf67cf360C5EF3f650e0E69CC3a70CAb",
      ADDRESS_SHOP: "0x9EcB83f041a8A3b76bcd9DafC078812047535ABc",
      // Add more addresses as needed
    },
  },
  {
    name: "klaytn baobab",
    chainId: 1001,
    list: {
      ADDRESS_TOKEN_GEM: "0xFe9DF23d3EFAB6cC71D3395aFFB3aa505d1935eB",
      ADDRESS_EXPOINTS: "0x16F0EB9CD042e3D9e519baf660c18f4E8E4eF93e",
      ADDRESS_ASSET_NFT: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
      ADDRESS_SHIP_NFT: "0x9D2067BeB1c165FDE0F89E40Bd97f3276C153385",
      ADDRESS_PASS_NFT: "0x5b6288be71623E408D61D0417A51572d7CBC10e2",
      ADDRESS_TICKET_NFT: "0xbe0833eB8f4Ff9BD5aEAFc2ee61925a227D58ABA",
      ADDRESS_CLAIM_MANAGER: "0xC8E633D1Da2b23A12458682cB0d065A4452b6030",
      ADDRESS_EXPLORE_PLAY: "0x9EcB83f041a8A3b76bcd9DafC078812047535ABc",
      ADDRESS_SHOP: "0xa921a43516A0c85504d61bd3BD8bcE354a7bBEf1",
      // Add more addresses as needed
    },
  },
];

export function getContractAddress(type = "", chainId = 0) {
  const BASE_CONTRACT = ADDRESS_CONTRACT.find(
    (contract) => contract.chainId === chainId
  );

  // console.log(type, chainId, BASE_CONTRACT);

  if (!BASE_CONTRACT) {
    console.error(`No contract found for chainId: ${chainId}`);
    return "0x0000000000000000000000000000000000000000";
  }

  switch (type) {
    case TOKEN_GEM:
      return BASE_CONTRACT.list.ADDRESS_TOKEN_GEM; // GEMTOKEN

    case EXPOINTS:
      return BASE_CONTRACT.list.ADDRESS_EXPOINTS; // EXPOINTS

    case ASSET_NFT:
      return BASE_CONTRACT.list.ADDRESS_ASSET_NFT; // NFTASSET

    case SHIP_NFT:
      return BASE_CONTRACT.list.ADDRESS_SHIP_NFT; // NFTSHIP

    case PASS_NFT:
      return BASE_CONTRACT.list.ADDRESS_PASS_NFT; // NFTPASS

    case TICKET_NFT:
      return BASE_CONTRACT.list.ADDRESS_TICKET_NFT; // NFTTICKET

    case CLAIM_MANAGER:
      return BASE_CONTRACT.list.ADDRESS_CLAIM_MANAGER; // MANAGERCLAIM

    case EXPLORE_PLAY:
      return BASE_CONTRACT.list.ADDRESS_EXPLORE_PLAY; // EXPLOREPLAY

    case SHOP:
      return BASE_CONTRACT.list.ADDRESS_SHOP; // SHOP

    default:
      return "0x0000000000000000000000000000000000000000";
  }
}
export function getContractABI(type = "") {
  switch (type) {
    case "gemtoken":
      return gemLsp7; // GEMTOKEN

    case "expoints":
      return pointsLsp7; // EXPOINTS

    case "asset":
      return assetLsp8; // NFTASSET

    case "nftship":
      return shipLsp8; // NFTSHIP

    case "nftpass":
      return passLsp8; // NFTPASS

    case "nftticket":
      return ticketLsp8; // NFTTICKET

    case "managerclaim":
      return managerClaim; // MANAGERCLAIM

    case "exploreplay":
      return explorePlay; // EXPLOREPLAY

    case "shop":
      return shop; // SHOP

    default:
      return [];
  }
}
