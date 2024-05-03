import React, { useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { audio, playAudio } from "@/_game/store";
// import countdownAsset from "/lottie/countdown.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Countdown() {
  useEffect(() => {
    playAudio(audio.countdown);
  }, []);
  return (
    <div className="absolute w-full h-full z-10 flex justify-center items-center bg-transparent">
      {/* <Player
        background="transparent"
        autoplay
        // loop
        src={`/lottie/countdown3.json`}
        //  src={countdownAsset}
        style={
          {
            //   height: "300px", width: "300px"
            // background: "transparent",
          }
        }>
        <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
      </Player> */}
      <DotLottieReact src={`/lottie/countdown3.lottie`} autoplay />
    </div>
  );
}
