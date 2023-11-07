import CornerBox from "@/components/_ui/box/CornerBox";
import GlowingText from "@/components/_ui/text/glowing-text";
import React from "react";
import { FaDiscord } from "react-icons/fa";
//
export default function Discord() {
  return (
    <div>
      <CornerBox
        border
        corner={false}
        classNameOutside="mx-4 p-4 w-[300px]"
        className="flex justify-center items-center w-full h-full uppercase"
      >
        <FaDiscord size={24} />

        <GlowingText
          color="white"
          effect="pulsate"
          size={20}
          unit="px"
          fontSize="12px"
        >
          join discord
        </GlowingText>
      </CornerBox>
    </div>
  );
}
