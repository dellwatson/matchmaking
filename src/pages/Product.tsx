import Layout from "@/components/lobby/LayoutHeader";
import Detail from "@/components/product/detail";
import { PRODUCT_STARSHIP_A } from "@/components/product/mock_products/starshipA";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  // const {} = useGetShopList()
  // read : groups, horizontal ? products
  const navigate = useNavigate();
  // load id params
  // load detail items
  // load -> 3d or not?
  // description?
  // sections
  // networks

  const data = PRODUCT_STARSHIP_A;

  return (
    <div className="absolute bg-slate-900 h-full w-full ">
      <Layout />
      {/* BACK BUTTON */}
      <div className="mt-24 h-full">
        <Detail page="shop" data={data} />
      </div>
    </div>
  );
}
