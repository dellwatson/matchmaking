import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";
import useReadContract from "@/helpers/hooks/useReadContract";
import HorizontalScroll from "@/components/_ui/HorizontalScroll";
import CardStore from "@/components/_ui/card/CardStore";

export default function ShopPage() {
  // const {} =useReadContract()

  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      {/* <Shop /> */}
      <ProductDisplay page="shop" />
      {/* <HorizontalScroll>
        <div>
          <div>Title</div>
          <div className="flex border border-green-500 p-10">
            {[1, 1, 1].map((item, i) => (
              <CardStore key={`card-store-${i}`}></CardStore>
            ))}
          </div>
        </div>

        {[1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item, i) => (
            <CardStore key={`card-store-${i}`}></CardStore>
          )
        )}
      </HorizontalScroll> */}
    </div>
  );
}
