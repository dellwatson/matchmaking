import React, { useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { audio, playAudio } from "@/_game/store";
// import countdownAsset from "/lottie/countdown.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function PlayArrow() {
  // useEffect(() => {
  //   playAudio(audio.countdown);
  // }, []);
  return (
    <>
      <div className="absolute h-32 w-[80px] right-5 rotate-270   bg-transparent">
        <DotLottieReact
          // style={{ width: 400 }}
          src={`/lottie/ARROW_glow.lottie`}
          autoplay
          loop
        />
      </div>
      <div className="absolute h-32 w-[80px] left-8 rotate-270   bg-transparent">
        <DotLottieReact
          // style={{ width: 400 }}
          src={`/lottie/ARROW_glow.lottie`}
          autoplay
          loop
        />
      </div>
    </>
  );
}
