import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";
import CornerBox from "@/components/_ui/box/CornerBox";
import GlowingText from "@/components/_ui/text/glowing-text";

export default function InventoryPage() {
  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      <div>
        {/* <Shop /> */}
        <ProductDisplay />
        {/* <div>test</div> */}
        <br />
        <br />
        <CornerBox
          border
          classNameOutside="rounded-md"
          className="p-16 rounded-md "
          corner={false}
        >
          <div className="text-center mb-10 uppercase text-xl  text-red-500 font-bold">
            Coming soon
          </div>
          <div className="w-full flex items-center">
            <GlowingText className="font-bold">CRAFTING</GlowingText>
            <div className="px-10">
              Combine materials from gameplay, unlock fractions, and forge
              unique items and abilities.
              <br />
              Tailor your ship for speed, defense, or strategy.
              <br />
              With endless possibilities, craft your cosmic arsenal and stand
              out among the stars!
            </div>
          </div>
        </CornerBox>
      </div>
    </div>
  );
}
