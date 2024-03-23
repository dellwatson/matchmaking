import { Model as MercyA } from "@/_backend/starship/mercyA/Scene";
import { Model as OrchidA } from "@/_backend/starship/orchid/Scene";
import { Model as SparrowA } from "@/_backend/starship/sparrow/Scene";
import { Model as StarshipA } from "@/_backend/starship/starshipA/Ship";
import { Model as StarshipB } from "@/_backend/starship/starshipB/Scene";
import { equipmentStore } from "@/_core/hooks/useEquipment";
import { profileStore } from "@/_core/hooks/useProfile";

import React, { useEffect, useState } from "react";

const LIST_STARSHIPS = [
  <StarshipA scale={[1.1, 1.1, 1.1]} position={[0, 0, 0]} />,
  // <OrchidA scale={[1, 1, 0.8]} position={[0, 0.5, 0]} />,
  // <SparrowA scale={[0.65, 0.65, 0.65]} />,
  <StarshipB scale={[1.3, 1.3, 1.3]} />,
  <MercyA scale={[0.5, 0.5, 0.5]} />,
];

export default function LoadStarship() {
  const [stateModel, setStateModel] = useState(null);
  const { loadEquipment } = equipmentStore();
  const { profiles } = profileStore();

  // todo: check if changing account, or network will remove and goes into guest mode state
  useEffect(() => {
    function loadModel() {
      if (!profiles?.length) return;
      let dataFound = false; // Flag to track whether data is found
      //   console.log(profiles?.length);
      // console.log(profiles);
      profiles?.forEach((item, i) => {
        // console.log(dataFound, "dataFound", i);
        if (dataFound) return;
        const data = loadEquipment(item?.address, item?.network, "ship");
        // console.log(data, "data FROM", item?.address, item?.network);
        // console.log(data, "DATA ?", item?.address, item?.network);

        if (!!data) {
          //
          setStateModel(data);
          //todo: move it to store/backend for game
          // game match: create id match + data of starship used there. finished: true/false
          // on game, must load backend match + profile used sync
        }
      });
    }
    loadModel();
  }, [profiles]);

  return (
    <>
      {/* //   state */}
      {stateModel && LIST_STARSHIPS[stateModel?.modelId]}
    </>
  );
}
