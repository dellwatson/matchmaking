import Layout from "@/components/lobby/LayoutHeader";
import Detail from "@/components/product/detail";
import { PRODUCT_STARSHIP_A } from "@/_backend/_mockBackend/listing";
import { useNavigate, useParams } from "react-router-dom";
import useListingProduct from "@/_core/hooks/useListingProduct";
import useGameListing from "@/_backend/data/useGameListing";

// note this is for product with price, product that been selling?
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
  const { listingId } = useParams();

  const { data, isLoading } = useGameListing(listingId);
  // either listing or theras/draft-products

  return (
    <div className="absolute bg-slate-900 h-full w-full ">
      <Layout
      // set name?
      />
      {/* BACK BUTTON */}
      <div className="mt-24 h-full">
        {data && <Detail page="shop" data={data} />}
      </div>
    </div>
  );
}

// still need id listing to prioritise for getting main highlight
//
