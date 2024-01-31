import useTX from "@/helpers/hooks/useTX";
import networkStore from "@/store/network-store";
import { SHOP, TOKEN_GEM, getContractAddress } from "@/web3/contract-list";

import { toast } from "react-toastify";
import { formatEther, parseEther, parseUnits } from "viem";

const _SECOND = import.meta.env.VITE_SECOND === "true" ? 3 : 2;
// uint256 productId,
// uint256 paymentAmount,
// address paymentToken,
// uint256 quantity,
// uint256 tokenType

export default function BuyProduct({ product, tokenSelected, price = 25 }) {
  const { selectedNetwork } = networkStore();

  // First useTX for approval
  const {
    data: approvalData,
    isLoading: isApprovalLoading,
    write: approve,
  } = useTX(TOKEN_GEM, "approve", [
    getContractAddress(SHOP, selectedNetwork.chainId),
    product?.price[0]?.price * 2 * 1000000000000000000,
  ]);

  // Second useTX for buyProduct

  // uint256 productId,
  // uint256 paymentAmount,
  // address paymentToken,
  // uint256 quantity,
  // uint256 tokenType //todo: remove this and use from contracts??
  const {
    data: buyProductData,
    isLoading: isBuyProductLoading,
    write,
    error: errorx,
  } = useTX(
    SHOP,
    "buyProduct",
    [
      product?.category === "ship" && !tokenSelected?.native
        ? product?.listedStoreId
        : 5,
      // product?.price[0]?.price * 1000000000000000000,
      // getContractAddress(TOKEN_GEM, selectedNetwork.chainId),
      // 1, // quantity
      // 2,
      // parseEther(price),
      product?.price[0]?.price * 1000000000000000000,
      getContractAddress(TOKEN_GEM, selectedNetwork.chainId),
      1,
      // 2,
      product?.category === "ship" ? _SECOND : 2,
    ],
    tokenSelected?.native
      ? {
          value: parseEther("0.4"),
        }
      : {}
  );

  // Handle the approval and buyProduct logic
  const handleApprove = async () => {
    try {
      // Attempt approval first
      toast("approving");
      await approve();
      toast("success approval, please proceed to buy");
    } catch (error) {
      // Handle errors
      toast("Something Error");
      console.log(error, "error");
      console.error("Error during approval or purchase:", error);
    }
  };
  // Handle the approval and buyProduct logic
  const handleBuy = async () => {
    // console.log(
    //   buyProductData,
    //   "buyProductData",
    //   SHOP,
    //   parseEther("400000000000000000"),
    //   parseEther("0.4"),
    //   formatEther("400000000000000000")
    //   // formatEther(0.4)
    // );
    try {
      // If approval is successful, proceed to buyProduct
      await toast("making buy transaction");
      const res = await write?.();
      console.log(res, "RESPONSE");
      await toast(
        "Transaction requested, it will be completed depending on the network congestion."
      );
    } catch (error) {
      // Handle errors
      toast("Something Error");
      alert("ERROR MANA ALERTNYA");
      console.log(error, "error");
      console.error("Error during approval or purchase:", error);
    }
  };

  console.log(errorx, "errorx");

  return (
    <>
      {/* if native token no need approve */}
      {!tokenSelected?.native && (
        <button
          onClick={handleApprove}
          className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8 mr-1"
          disabled={isApprovalLoading || isBuyProductLoading}>
          {isApprovalLoading ? "Approving..." : "approve"}
        </button>
      )}
      <button
        onClick={handleBuy}
        className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8"
        disabled={
          // isApprovalLoading ||
          isBuyProductLoading
        }>
        {isBuyProductLoading ? "Buying..." : "Buy"}
      </button>
    </>
  );
}
