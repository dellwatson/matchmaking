import { Model as AnimatedDragon } from "@/_backend/conveyance/animatedDragon/Animated_dragon";
import { Model } from "@/_backend/conveyance/fireDragon/Fire_dragon";
// import { Model } from "@/_backend/conveyance/demonDragon/Demon_dragon";
import { Model as IcyDragon } from "@/_backend/conveyance/icyDragon/Icy_dragon";
import { Model as Phoenix } from "@/_backend/conveyance/phoenix/Phoenix_bird";
import { Model as MercyA } from "@/_backend/starship/mercyA/Scene";
import { Model as OrchidA } from "@/_backend/starship/orchid/Scene";
import { Model as SparrowA } from "@/_backend/starship/sparrow/Scene";
import { Model as StarshipA } from "@/_backend/starship/starshipA/Ship";
import { Model as StarshipB } from "@/_backend/starship/starshipB/Scene";
import { equipmentStore } from "@/_core/hooks/useEquipment";
import useLoadStarship from "@/_core/hooks/useLoadStarship";
import { profileStore } from "@/_core/hooks/useProfile";
import { Sphere } from "@react-three/drei";

import React, { useEffect, useState } from "react";

const LIST_STARSHIPS = [
  <StarshipA scale={[1.1, 1.1, 1.1]} position={[0, 0, 0]} />,
  // <OrchidA scale={[1, 1, 0.8]} position={[0, 0.5, 0]} />,
  // <SparrowA scale={[0.65, 0.65, 0.65]} />,
  <StarshipB scale={[1.3, 1.3, 1.3]} />,
  <MercyA scale={[0.5, 0.5, 0.5]} />,
];

const STARSHIP_MODELS = {
  4: <StarshipA scale={[1.1, 1.1, 1.1]} position={[0, 0, 0]} />,
  3: <StarshipB scale={[1.3, 1.3, 1.3]} />,
  130: <MercyA scale={[0.5, 0.5, 0.5]} />,
};

export default function LoadStarship() {
  const { stateModel } = useLoadStarship();
  return (
    <>
      {/* //   state */}
      {stateModel && STARSHIP_MODELS[stateModel?.detail?.id]}
      {!stateModel && <Sphere />}
      {/* <Model scale={[10, 10, 10]} /> */}
      {/* <Phoenix scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]} /> */}
      {/* <AnimatedDragon scale={[2, 2, 2]} /> */}
      {/* <IcyDragon scale={[0.03, 0.03, 0.03]} /> */}
      {/* <Model /> */}
      {/* <AnimatedDragon /> */}
      {/* <Model /> */}
    </>
  );
}
