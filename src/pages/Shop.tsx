import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";
import useReadContract from "@/helpers/hooks/useReadContract";

export default function ShopPage() {
  // const {} =useReadContract()

  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      {/* <Shop /> */}
      <ProductDisplay page="shop" />
    </div>
  );
}
