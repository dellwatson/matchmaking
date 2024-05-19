import { NFT_STARSHIP_A } from "@/_backend/_mockBackend/listInventory";
import useGameAsset from "@/_backend/data/useGameAsset";
import useInventory from "@/_core/hooks/useInventory";
import Layout from "@/components/lobby/LayoutHeader";
import Detail from "@/components/product/detail";
// import { PRODUCT_STARSHIP_A } from "@/_backend/_mockBackend/listing";
import { useNavigate, useParams } from "react-router-dom";

export default function InventoryProduct() {
  // const {} = useGetShopList()
  // read : groups, horizontal ? products
  const navigate = useNavigate();
  // load id params
  // load detail items
  // load -> 3d or not?
  // description?
  // sections
  // networks

  // const data = NFT_STARSHIP_A;
  // load from ->
  // and only mobile

  // useGameAsset //load data detail
  // but also now with inventory ? minted?

  // load inventory too?
  // access the minted

  const { productId } = useParams();
  // const { data } = useGameAsset(productId);
  // console.log("inventory-product-page", data, productId);
  const { data, loading } = useInventory();
  // console.log(inventory, "inventory-product-");
  const selectedData = data?.find((o) => o?.id === Number(productId));

  console.log(selectedData, "selectedData", data);
  //
  // tokenId, address, chainId, network
  // detail
  // minted -> address contract, owner, quantity, network, chainId

  // no found match, --> then product isnt OWNED
  // or not connected to network

  return (
    <div className="absolute bg-slate-900 h-full w-full ">
      <Layout />
      {/* BACK BUTTON */}
      <div className="mt-24 h-full">
        {selectedData && (
          <Detail
            page="inventory"
            data={{
              // ...selectedData,
              detail: selectedData,
              minted: selectedData?.minted,
              //
            }}
          />
        )}
      </div>
    </div>
  );
}
