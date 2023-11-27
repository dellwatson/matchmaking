import useTX from "@/helpers/hooks/useTX";
import { SHOP, TOKEN_GEM, getContractAddress } from "@/web3/contract-list";

import { toast } from "react-toastify";
import { parseUnits } from "viem";

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
    2, // contract type
  ]);

  // Handle the approval and buyProduct logic
  const handleBuy = async () => {
    try {
      // Attempt approval first
      toast("approving");
      await approve();

      // If approval is successful, proceed to buyProduct
      await toast("making buy transaction");
      await write?.();
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
        onClick={handleBuy}
        className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8"
        disabled={isApprovalLoading || isBuyProductLoading}
      >
        {isApprovalLoading
          ? "Approving..."
          : isBuyProductLoading
          ? "Buying..."
          : "Buy"}
      </button>
    </>
  );
}
