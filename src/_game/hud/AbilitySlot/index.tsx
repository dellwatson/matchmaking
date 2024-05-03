import React from "react";
import { CiLock } from "react-icons/ci";
import abilityStore from "./ability-store";
import useBoostStore from "@/_game/ability/Boost/store";
import useLineBoost from "@/_game/ability/Boost/useLineBoost";

export default function Abilities() {
  // get from profile the ability
  const { abilities, activate } = abilityStore();

  return (
    <div className="flex space-x-2 cursor-pointer ,">
      {/* {abilities.map((item, i) => (
        <div
          key={`box-ability-${i}`}
          className={"h-32 w-32  backdrop-blur-xl "}>
          {item?.locked ? (
            <div className="flex justify-center items-center w-full h-full border-3 border-gray-300 rounded-md ">
              <CiLock size={24} />
            </div>
          ) : (
            <div
              onClick={() => {
                if (item?.supply !== 0) {
                  activate(item);
                  //   trigger activate hook
                }
              }}
              className={`w-full h-full border-3 border-green-300 rounded-md  ${
                !item?.supply && "opacity-50"
              } `}>
              <div className="absolute z-10 text-xl p-1 font-bold">
                {item?.supply}
              </div>
              <img
                src={item?.image}
                alt="abilitiy"
                className="w-full h-full opacity-75 object-cover"
              />
            </div>
          )}
        </div>
      ))} */}
      <BoostButton />
    </div>
  );
}

function BoostButton() {
  const { boostBars, useBoost, chargeProgress, superBoost } = useBoostStore();

  function handleLineBoost() {
    if (!!boostBars && !superBoost) {
      useBoost();
    }
  }
  // const { handleLineBoost } = useLineBoost();
  return (
    <button
      onClick={() => {
        handleLineBoost();
      }}>
      {/* super: {superBoost ? "yes" : "no"}
      <br /> */}
      BOOST
      {/* {boostBars}
      <br />
      {Math.round(chargeProgress)}
      <br /> */}
    </button>
  );
}

//
