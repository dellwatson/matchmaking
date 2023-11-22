import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";

export default function InventoryPage() {
  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      {/* <Shop /> */}
      <ProductDisplay />
    </div>
  );
}
