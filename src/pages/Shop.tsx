import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";
import useReadContract from "@/helpers/hooks/useReadContract";
import HorizontalScroll from "@theras_labs/ui/src/HorizontalScroll";
import CardProduct from "@theras_labs/ui/src/Card/CardStore";
import GroupCards from "@theras_labs/ui/src/group/GroupCards";
import { useNavigate } from "react-router-dom";
import { MOCK_SHOP } from "@/components/product/mock-shop";
import useLoadListing from "@/_backend/data/loadListing";

export default function ShopPage() {
  // const {} = useGetShopList()
  // read : groups, horizontal ? products
  const navigate = useNavigate();

  const { data } = useLoadListing();

  return (
    <div className="absolute bg-slate-900  h-full w-full overflow-hidden">
      <Layout />
      {/* BACK BUTTON */}
      {/* <Shop /> */}
      {/* <ProductDisplay page="shop" /> */}
      <HorizontalScroll
        // header= //stickyHeader for space
        Header={<div className="p-20"></div>}
      >
        {data?.length &&
          data?.map((item, i) => {
            return (
              <GroupCards
                key={i}
                onNavigate={(_idPath) => navigate("/product/" + _idPath)} //ID LISTING or starex nft ID  ?
                {...item}
              />
            );
          })}
      </HorizontalScroll>
    </div>
  );
}
