import useTX from "@/helpers/hooks/useTX";
import { SHOP, TOKEN_GEM, getContractAddress } from "@/web3/contract-list";

import { toast } from "react-toastify";
import { parseUnits } from "viem";

export default function BuyProduct({ product }) {
  const { data, isLoading, write, isSuccess } = useTX(SHOP, "buyProduct", [
    0, //token id
    // parseUnits(String(product?.price[0]?.price), 18),
    product?.price[0]?.price * 1000000000000000000,
    getContractAddress(TOKEN_GEM),
    1, // quantity
    2, // contract type
  ]);

  //   APPROVE 1ST
  return (
    <>
      <button
        onClick={() => {
          write?.();
          //   toast("Hello World");
          //   console.log(
          //     0, //token id
          //     parseUnits(String(product?.price[0]?.price), 18),
          //     getContractAddress(TOKEN_GEM),
          //     1, // quantity
          //     2
          //   );
        }}
        className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8"
      >
        BUY
      </button>
    </>
  );
}
