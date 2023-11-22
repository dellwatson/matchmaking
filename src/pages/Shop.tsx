import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";

export default function ShopPage() {
  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      {/* <Shop /> */}
      <ProductDisplay />
    </div>
  );
}
