import GlowingText from "@/components/_ui/text/glowing-text";

import SeasonPassSvg from "@assets/svg/lobby/season-pass.svg";
import { useState } from "react";
import ModalPass from "./modal-pass";

export default function Pass() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div
        onClick={() => openModal()}
        className="absolute bottom-0  cursor-pointer ">
        <div className="absolute w-full h-full flex justify-center items-center">
          <GlowingText
            color="green"
            effect="pulsate"
            size={20}
            unit="px"
            fontSize="24px">
            SEASON PASS
          </GlowingText>
        </div>
        <img src={SeasonPassSvg} className="w-[200px] h-[200px]" />
      </div>
      <ModalPass
        {...{
          isOpen,
          closeModal,
          openModal,
        }}
      />
    </>
  );
}
