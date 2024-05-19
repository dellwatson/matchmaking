import useLoadStarship from "@/_core/hooks/useLoadStarship";
import StarshipA from "./ships/StarshipA";
import StarshipB from "./ships/StarshipB";
import DefaultStarship from "./ships";
import gameshipStore from "./starship-store";
import { useMemo } from "react";
import useStore from "@/_game/store";

const STARSHIP_MODELS = {
  3: <StarshipB />,
  4: <StarshipA />,
  // 130: <MercyA scale={[0.5, 0.5, 0.5]} />,
};

// might want to use playRoom for help the decision of

// starship streaming from backend
export default function LoadStarship() {
  const ship = useStore((s) => s?.ship);

  const { stateModel } = useLoadStarship();
  // console.log(stateModel, "statemodel");
  // const { ship_detail } = gameshipStore();
  // console.log(ship_detail, "ship detail");
  // const selectedStarship = useMemo(() => {
  //   return ship_detail ? (
  //     STARSHIP_MODELS[ship_detail?.detail?.id]
  //   ) : (
  //     <DefaultStarship />
  //   );
  // }, [ship_detail]);
  console.log("selectedStarship", stateModel?.detail?.id);

  return (
    <>
      <group ref={ship}>
        {stateModel &&
          // stateModel?.detail?.id &&
          STARSHIP_MODELS[stateModel?.detail?.id]}
        {!stateModel && <DefaultStarship />}
        {/* {stateModel?.detail?.id === 4 && STARSHIP_MODELS[4]} */}
        {/* {STARSHIP_MODELS[4]} */}
        {/* {selectedStarship} */}
      </group>
    </>
  );
}
