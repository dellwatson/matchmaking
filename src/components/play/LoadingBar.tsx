import React, { useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { audio, playAudio } from "@/_game/store";
// import countdownAsset from "/lottie/countdown.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoadingBar() {
  // useEffect(() => {
  //   playAudio(audio.countdown);
  // }, []);
  return (
    <div className="absolute w-full h-full bottom-3 scale-125  flex justify-center items-center bg-transparent">
      <DotLottieReact src={`/lottie/loading_bar_green.lottie`} autoplay loop />
    </div>
  );
}
