import useTX from "@/helpers/hooks/useTX";
import { SHOP, TOKEN_GEM, getContractAddress } from "@/web3/contract-list";

import { toast } from "react-toastify";
import { parseUnits } from "viem";

const _SECOND = import.meta.env.VITE_SECOND === "true" ? 3 : 2;
// uint256 productId,
// uint256 paymentAmount,
// address paymentToken,
// uint256 quantity,
// uint256 tokenType

export default function BuyProduct({ product }) {
  // First useTX for approval
  const {
    data: approvalData,
    isLoading: isApprovalLoading,
    write: approve,
  } = useTX(TOKEN_GEM, "approve", [
    getContractAddress(SHOP),
    product?.price[0]?.price * 2 * 1000000000000000000,
  ]);

  // Second useTX for buyProduct
  const {
    data: buyProductData,
    isLoading: isBuyProductLoading,
    write,
  } = useTX(SHOP, "buyProduct", [
    product?.listedStoreId,
    product?.price[0]?.price * 1000000000000000000,
    getContractAddress(TOKEN_GEM),
    1, // quantity
    // 2,  // contract type //KLAYTN -->
    product?.category === "ship" ? _SECOND : 2,
  ]);

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
    try {
      // If approval is successful, proceed to buyProduct
      await toast("making buy transaction");
      await write?.();
      await toast(
        "Transaction requested, it will be completed depending on the network congestion."
      );
    } catch (error) {
      // Handle errors
      toast("Something Error");
      console.log(error, "error");
      console.error("Error during approval or purchase:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleApprove}
        className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8 mr-1"
        disabled={isApprovalLoading || isBuyProductLoading}
      >
        {isApprovalLoading ? "Approving..." : "approve"}
      </button>
      <button
        onClick={handleBuy}
        className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8"
        disabled={isApprovalLoading || isBuyProductLoading}
      >
        {isBuyProductLoading ? "Buying..." : "Buy"}
      </button>
    </>
  );
}
