import GlowingText from "@theras_labs/ui/src/text/glowing-text";

import SeasonPassSvg from "@assets/svg/lobby/season-pass.svg";
import { useState } from "react";
import ModalPass from "./modal-pass";

export default function Pass({ isMobile = false }) {
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
        className="absolute bottom-0  cursor-pointer "
      >
        <div className="absolute w-full h-full flex justify-center items-center">
          {isMobile ? (
            <GlowingText
              color="green"
              effect="pulsate"
              unit="px"
              fontSize="16px"
            >
              SEASON PASS
            </GlowingText>
          ) : (
            <GlowingText
              color="green"
              effect="pulsate"
              size={20}
              unit="px"
              fontSize="24px"
            >
              SEASON PASS
            </GlowingText>
          )}
          <div className="absolute w-full h-2 bg-green-500" />
        </div>
        {isMobile ? (
          <img src={SeasonPassSvg} className="w-[130px] h-[130px]" />
        ) : (
          <img src={SeasonPassSvg} className="w-[200px] h-[200px] border" />
        )}
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
