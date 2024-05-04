import { TProvider } from "@/_type/Contract";
import React from "react";
import useWriteAptos from "./contract/useWriteAptos";
import useWriteEVM from "./contract/useWriteEVM";

// // get from useContract shop ?
// export default function usePurchase(
//   // network
//   //   data, //data for?
//   provider: TProvider = "evm",
//   network: string,
//   { contractAddress = "", contractName = "", functionName = "", args = [] }
// ) {
//   // check if network and current network is different then switch

//   //native
//   const { write: writeEVM, isLoading: isLoadingEVM, error: errorEVM } = useWriteEVM({
//       contractAddress: "",
//       contractName: "",
//       functionName: "",
//       args: [],
//   });

//   // become option Gateaway to choose tx hooks
//   // getContractAddress
//   const {
//     write: writeAptos,
//     isLoading: isLoadingAptos,
//     error: errorAptos,
//   } = useWriteAptos({
//     contractAddress,
//     contractName,
//     functionName,
//     args,
//   });

//   return {
//     write: writeAptos,
//     isLoading: isLoadingAptos,
//     error: errorAptos,
//   };
// }

export default function usePurchase(
  provider: TProvider = "evm",
  network: string = "sepolia",
  { contractAddress = "", contractName = "", functionName = "", args = [] }
) {
  console.log(args, "AGAIN ARGS");
  let writeHook, isLoadingHook, errorHook;

  // instead get from DB, abi (CONTRACT-NAME), and chainId here
  // but if there's  rest ={} then it replace it with rest

  // -----------------------------------
  // get network-chain-id
  let chainId;
  if (network === "testnet-taraxa") {
    chainId = 842;
  } else if (network === "sepolia") {
    chainId = 11155111;
  }
  // -----------------------------------

  switch (provider) {
    case "evm":
      ({
        write: writeHook,
        isLoading: isLoadingHook,
        error: errorHook,
      } = useWriteEVM(
        {
          contractAddress,
          contractName,
          functionName,
          args,
        },
        {
          // abi here is optional
          ABI: ABI_THERAS_SHOP,
          chainId,
        }
      ));
      break;

    case "starknet":
      ({
        write: writeHook,
        isLoading: isLoadingHook,
        error: errorHook,
      } = useWriteAptos({ contractAddress, contractName, functionName, args }));
      break;

    case "aptos":
      ({
        write: writeHook,
        isLoading: isLoadingHook,
        error: errorHook,
      } = useWriteAptos({ contractAddress, contractName, functionName, args }));
      break;

    default:
      console.error("Invalid provider:", provider);
      writeHook = null;
      isLoadingHook = false;
      errorHook = "Invalid provider";
      break;
  }

  return { write: writeHook, isLoading: isLoadingHook, error: errorHook };
}

const ABI_THERAS_SHOP = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isNativeToken",
        type: "bool",
      },
      {
        internalType: "address payable",
        name: "productAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "enum TherasShop.TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "payoutAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payoutPercentageDenominator",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "brokerAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct TherasShop.Ticket",
        name: "_ticket",
        type: "tuple",
      },
    ],
    name: "buyProduct",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOffchainSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_offchainSigner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_vendorAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_offchainSigner",
        type: "address",
      },
    ],
    name: "setupOffchain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setupTherasFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "therasFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
