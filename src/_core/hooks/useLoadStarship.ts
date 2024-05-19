import React, { useEffect, useState } from "react";
import { equipmentStore } from "./useEquipment";
import { profileStore } from "./useProfile";
import gameshipStore from "@/_game/players/star-ship/starship-store";

export default function useLoadStarship() {
  // check params -> if about to enter game, check the ownership of NFT again

  const [stateModel, setStateModel] = useState(null);
  const { loadEquipment } = equipmentStore();
  const { profiles } = profileStore();
  const [loading, setLoading] = useState(true);
  const { setGameShip } = gameshipStore();

  // todo: check if changing account, or network will remove and goes into guest mode state
  useEffect(() => {
    function loadModel() {
      setLoading(true);
      // console.log(profiles, "PORFILES LOADz");
      if (!profiles?.length) return;
      let dataFound = false; // Flag to track whether data is found

      //   console.log(profiles?.length);
      // console.log(profiles);

      profiles?.forEach((item, i) => {
        // console.log(dataFound, "dataFound", i);
        if (dataFound) return;

        // console.log("load 3dmodel");
        const data = loadEquipment(
          item?.address,
          item?.provider,
          item?.chainId,
          "ship"
        );

        // console.log(
        //   data,
        //   "data-3d",
        //   item?.address,
        //   item?.provider,
        //   item?.chainId
        // );
        // // console.log(data, "data FROM", item?.address, item?.network);
        // // console.log(data, "DATA ?", item?.address, item?.network);

        if (!!data) {
          //
          setStateModel(data);
          setLoading(false);
          setGameShip(data);

          //todo: move it to store/backend for game ?? -> instead just check the the ownership of starship
          // game match: create id match + data of starship used there. finished: true/false
          // on game, must load backend match + profile used sync
        }
      });
    }
    loadModel();
  }, [profiles]);

  return {
    stateModel,
    loading,
  };
}
