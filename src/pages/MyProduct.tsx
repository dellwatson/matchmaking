import { NFT_STARSHIP_A } from "@/_backend/_mockBackend/listInventory";
import Layout from "@/components/lobby/LayoutHeader";
import Detail from "@/components/product/detail";
import { PRODUCT_STARSHIP_A } from "@/_backend/_mockBackend/listing";
import { useNavigate } from "react-router-dom";

export default function MyProductPage() {
  // const {} = useGetShopList()
  // read : groups, horizontal ? products
  const navigate = useNavigate();
  // load id params
  // load detail items
  // load -> 3d or not?
  // description?
  // sections
  // networks

  const data = NFT_STARSHIP_A;
  // load from ->
  // and only mobile

  return (
    <div className="absolute bg-slate-900 h-full w-full ">
      <Layout />
      {/* BACK BUTTON */}
      <div className="mt-24 h-full">
        <Detail page="inventory" data={data} />
      </div>
    </div>
  );
}
