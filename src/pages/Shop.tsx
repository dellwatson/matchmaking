import Shop from "@/components/shop";
import Layout from "@components/lobby/LobbyInterface";

export default function ShopPage() {
  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      {/* <Shop /> */}
      <Shop />
    </div>
  );
}
