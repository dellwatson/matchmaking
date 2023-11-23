import GlowingText from "@/components/_ui/text/glowing-text";

import SeasonPassSvg from "@assets/svg/lobby/ticket-icon.svg";

export default function Pass() {
  return (
    <div
      onClick={() => alert("on development")}
      className="absolute bottom-1 m-4 cursor-pointer "
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <GlowingText
          color="green"
          effect="pulsate"
          size={20}
          unit="px"
          fontSize="24px"
        >
          SEASON PASS
        </GlowingText>
      </div>
      <img src={SeasonPassSvg} className="w-4/6 rotate-left-20deg" />
    </div>
  );
}
