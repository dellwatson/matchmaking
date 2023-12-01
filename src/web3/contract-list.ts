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

export const ADDRESS_TOKEN_GEM = import.meta.env.VITE_ADDRESS_TOKEN_GEM;
export const ADDRESS_EXPOINTS = import.meta.env.VITE_ADDRESS_EXPOINTS;
export const ADDRESS_ASSET_NFT = import.meta.env.VITE_ADDRESS_ASSET_NFT;
export const ADDRESS_SHIP_NFT = import.meta.env.VITE_ADDRESS_SHIP_NFT;
export const ADDRESS_PASS_NFT = import.meta.env.VITE_ADDRESS_PASS_NFT;
export const ADDRESS_TICKET_NFT = import.meta.env.VITE_ADDRESS_TICKET_NFT;
export const ADDRESS_CLAIM_MANAGER = import.meta.env.VITE_ADDRESS_CLAIM_MANAGER;
export const ADDRESS_EXPLORE_PLAY = import.meta.env.VITE_ADDRESS_EXPLORE_PLAY;
export const ADDRESS_SHOP = import.meta.env.VITE_ADDRESS_SHOP;

export function getContractAddress(type = "") {
  switch (type) {
    case TOKEN_GEM:
      return ADDRESS_TOKEN_GEM; // GEMTOKEN

    case EXPOINTS:
      return ADDRESS_EXPOINTS; // EXPOINTS

    case ASSET_NFT:
      return ADDRESS_ASSET_NFT; // NFTASSET

    case SHIP_NFT:
      return ADDRESS_SHIP_NFT; // NFTSHIP

    case PASS_NFT:
      return ADDRESS_PASS_NFT; // NFTPASS

    case TICKET_NFT:
      return ADDRESS_TICKET_NFT; // NFTTICKET

    case CLAIM_MANAGER:
      return ADDRESS_CLAIM_MANAGER; // MANAGERCLAIM

    case EXPLORE_PLAY:
      return ADDRESS_EXPLORE_PLAY; // EXPLOREPLAY

    case SHOP:
      return ADDRESS_SHOP; // SHOP

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
