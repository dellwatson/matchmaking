import ProductDisplay from "@/components/product";
import Layout from "@/components/lobby/LayoutHeader";
import CornerBox from "@theras_labs/ui/src/Box/CornerBox";
import GlowingText from "@theras_labs/ui/src/text/glowing-text";
import useReadContract from "@/helpers/hooks/useReadContract";
import { PASS_NFT, SHIP_NFT, TICKET_NFT } from "@/web3/contract-list";
import { useAccount } from "wagmi";
import { formatUnits } from "viem";

export default function InventoryPage() {
  const { address } = useAccount();
  const { data: dataShip, isLoading: loadingShip } = useReadContract(
    SHIP_NFT,
    "balanceOf",
    [address]
  );
  const { data: dataPass, isLoading: loadingPass } = useReadContract(
    PASS_NFT,
    "balanceOf",
    [address]
  );
  const { data: dataTicket, isLoading: loadingTicket } = useReadContract(
    TICKET_NFT,
    "balanceOf",
    [address]
  );

  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      <div>
        {/* <Shop /> */}
        <ProductDisplay
          {...{
            // todo: refactor better load
            data: {
              ship: !!dataShip ? parseInt(dataShip) : 0,
              pass: !!dataPass ? parseInt(dataPass) : 0,
              ticket: !!dataTicket ? parseInt(dataTicket) : 0,
            },
          }}
        />
        {/* <div>test</div> */}
        <br />
        <br />
        <CornerBox
          border
          classNameOutside="rounded-md"
          className="p-16 rounded-md "
          corner={false}>
          <div className="text-center mb-10 uppercase text-xl  text-red-500 font-bold">
            Coming soon
          </div>
          <div className="w-full flex items-center">
            <div>
              <GlowingText className="font-bold">CRAFTING </GlowingText>
            </div>
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
