import assetLsp8 from "@/web3/abis/asset-lsp8";
import pointsLsp7 from "@/web3/abis/points-lsp7";
import gemLsp7 from "@/web3/abis/gem-lsp7";
import shipLsp8 from "@/web3/abis/ship-lsp8";
import passLsp8 from "@/web3/abis/pass-lsp8";
import ticketLsp8 from "@/web3/abis/ticket-lsp8";
import managerClaim from "@/web3/abis/manager-claim";
import explorePlay from "@/web3/abis/explore-play";
import shop from "@/web3/abis/shop";

export const TOKEN_GEM = "gemtoken";
export const EXPOINTS = "expoints";
export const ASSET_NFT = "asset";
export const SHIP_NFT = "nftship";
export const PASS_NFT = "nftpass";
export const TICKET_NFT = "nftticket";
export const CLAIM_MANAGER = "managerclaim";
export const EXPLORE_PLAY = "exploreplay";
export const SHOP = "shop";

export function getContractAddress(type = "") {
  switch (type) {
    case TOKEN_GEM:
      return "0x5c347CE1CA5606d992Fb31AB529C8A3d55a6E2d4"; // GEMTOKEN

    case EXPOINTS:
      return "0x283C4Cc50D0209dA029b9a599EB28C80B3957B34"; // EXPOINTS

    case ASSET_NFT:
      return "0xd65d3146f6a46158741DB47E56da197115879938"; // NFTASSET

    case SHIP_NFT:
      return "0x9cf184163351a9b2cAb63a351F34532EA2913764"; // NFTSHIP

    case PASS_NFT:
      return "0x7A596d23C80000Cc3aeCf9CdD6be086cd8A2AB6C"; // NFTPASS

    case TICKET_NFT:
      return "0xd290428E60932A34551CD385AdcBB9FAf8850c89"; // NFTTICKET

    case CLAIM_MANAGER:
      return "0xE2eec3443AF330514E9fb6B3Fa6880f56c069D8C"; // MANAGERCLAIM

    case EXPLORE_PLAY:
      return "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A"; // EXPLOREPLAY

    case SHOP:
      // return "0x558A682636988925F48eF58d3975293665b69C86"; // SHOP
      return "0x21D344ddB590C202b7420f5666E89B9a76790157"; // SHOP

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
