import { equipmentStore } from "@/_core/hooks/useEquipment";
import { profileStore } from "@/_core/hooks/useProfile";
import BlockTitle from "@theras_labs/ui/src/block/BlockTitle";
import React, { useState } from "react";

export default function InventorySlot(props) {
  // load status here

  const { getProfileNetwork } = profileStore();
  const { addEquipment, isEquipped, removeEquipment } = equipmentStore();
  const [hovered, setHovered] = useState(false);
  return (
    <div className="mt-12">
      <div className="grid xl:grid-cols-2 !uppercase gap-5 mb-12">
        {props?.category?.toLocaleLowerCase() === "ship" && (
          <>
            {isEquipped(props) ? (
              <button
                onClick={() => {
                  const res = getProfileNetwork(props?.minted?.network);
                  if (!!res) {
                    removeEquipment(
                      props,
                      res?.address,
                      props?.minted?.network
                    );
                  } else {
                    alert("Account is not connected");
                  }
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="w-full p-4 bg-green-600 hover:bg-orange-600 rounded-md uppercase font-medium"
              >
                {hovered ? "Unequip" : "Equipped"}
              </button>
            ) : (
              <button
                onClick={() => {
                  const res = getProfileNetwork(props?.minted?.network);
                  if (!!res) {
                    addEquipment(props, res?.address, props?.minted?.network);
                  } else {
                    alert("Account is not connected");
                  }
                }}
                className="w-full p-4 bg-green-600 rounded-md uppercase font-medium"
              >
                Equip
              </button>
            )}
          </>
        )}

        <button
          disabled
          className="!cursor-not-allowed w-full p-4 bg-blue-600 rounded-md uppercase font-medium"
        >
          create order
        </button>
        <button
          disabled
          className="!cursor-not-allowed w-full p-4 bg-gray-600 rounded-md uppercase font-medium"
        >
          Craft
        </button>
        {props?.category?.toLowerCase() === "ship" && (
          <button
            disabled
            className="!cursor-not-allowed w-full p-4 bg-gray-600 rounded-md uppercase font-medium"
          >
            Staking
          </button>
        )}
      </div>
      {/* <div>button here</div> */}

      <BlockTitle title="progress" variant="progress" />

      {/* progress */}
      <ProgressAsset />
    </div>
  );
}
const ProgressAsset = () => {
  return (
    // <div className="flex w-full justify-center items-center min-h-60 bg-[#111322] rounded-md mt-2">
    <div className="flex w-full justify-center items-center min-h-90 border border-gray-700 rounded-md mt-2">
      <span className="uppercase text-xs">No Progress</span>
    </div>
  );
};
