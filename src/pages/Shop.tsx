import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";
import useReadContract from "@/helpers/hooks/useReadContract";
import HorizontalScroll from "@/_ui/HorizontalScroll";
import CardProduct from "@/_ui/card/CardStore";
import GroupCards from "@/_ui/group/GroupCards";
import { useNavigate } from "react-router-dom";
import { MOCK_SHOP } from "@/components/product/mock-shop";

export default function ShopPage() {
  // const {} = useGetShopList()
  // read : groups, horizontal ? products
  const navigate = useNavigate();
  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      {/* BACK BUTTON */}
      {/* <Shop /> */}
      {/* <ProductDisplay page="shop" /> */}
      <HorizontalScroll
        // header= //stickyHeader for space
        Header={<div className="p-20"></div>}>
        {MOCK_SHOP?.shop_list?.map((item, i) => {
          return (
            <GroupCards
              key={i}
              onNavigate={(_idPath) => navigate("/product/" + _idPath)}
              {...item}
            />
          );
        })}
      </HorizontalScroll>
    </div>
  );
}
