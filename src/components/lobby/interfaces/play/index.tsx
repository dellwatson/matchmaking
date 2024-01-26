import CornerBox from "@/components/_ui/box/CornerBox";
import GlowingText from "@/components/_ui/text/glowing-text";
import { useNavigate } from "react-router-dom";
import SVG_EXPLORE from "@assets/svg/lobby/play-icon.svg";

import { useLayoutEffect, useState } from "react";
import ModalPlay from "./modal-play";
import { Switch } from "@headlessui/react";

export default function Play() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="absolute bottom-1 right-1 font-bold m-4 cursor-pointer">
        <div onClick={openModal} className="absolute w-full ">
          <div className="relative bottom-7 p-2 pt-1 pb-3 border rounded-md border-red-500 bg-red-500 w-full ">
            <div className="text-xs flex justify-between font-bold text-white uppercase">
              <div className="text-green-200">
                {/* 2300 explorer */}
                Ticket: OFF
              </div>
              <div>mode: solo</div>
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
            // RESET GAME STORE
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
      <ModalPlay
        {...{
          isOpen,
          closeModal,
          openModal,
        }}
      />
    </>
  );
}
