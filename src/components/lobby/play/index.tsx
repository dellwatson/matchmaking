import CornerBox from "@/components/_ui/box/CornerBox";
import GlowingText from "@/components/_ui/text/glowing-text";
import { useNavigate } from "react-router-dom";
import SVG_EXPLORE from "@assets/svg/lobby/play-icon.svg";

import { useLayoutEffect } from "react";
export default function Play() {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute bottom-1 right-1 font-bold m-4 cursor-pointer">
        <div className="absolute w-full ">
          <div className="relative bottom-7 p-2 pt-1 pb-3 border rounded-md border-red-500 bg-red-500 w-full opacity-75">
            <div className="text-xs flex justify-between font-normal">
              <div className="text-green-500">2300 explorer</div>
              <div>mode: solo expedition</div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 -5">
          <img
            src={SVG_EXPLORE}
            className="w-16 h-16 relative right-6 top-5 animate-spin"
          />
        </div>

        <CornerBox
          onClick={() => {
            navigate("/match-room");
          }}
          border
          classNameOutside=" p-8 w-[300px] "
          className="flex justify-center items-center w-full h-full uppercase"
          background="rgba(0, 0, 0, 0.9)"
        >
          <GlowingText
            color="red"
            effect="pulsate"
            size={20}
            unit="px"
            fontSize="24px"
          >
            PLAY
          </GlowingText>
        </CornerBox>
      </div>
    </>
  );
}
