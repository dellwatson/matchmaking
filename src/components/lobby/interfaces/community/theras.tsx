import CornerBox from "@theras_labs/ui/src/Box/CornerBox";
import GlowingText from "@theras_labs/ui/src/text/glowing-text";
import React from "react";
import { FaDiscord } from "react-icons/fa";
//
export default function Theras() {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        window.open("https://theras.xyz", "_blank");
      }}>
      <CornerBox
        border
        corner={false}
        classNameOutside="mx-4 p-4 w-[300px]"
        background="#64FFDB"
        className="flex justify-center items-center w-full h-full uppercase">
        <div className="text-[#142a46] font-bold">BY THERAS LABS</div>
      </CornerBox>
    </div>
  );
}
