import React, { useEffect } from "react";
import { audio, playAudio } from "@/_game/store";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function WarningLine() {
  // const { } = useMessageStore()
  useEffect(() => {
    playAudio(audio.beepWarning, 1, true);
    return () => {
      audio.beepWarning.pause();
    };
  }, []);

  return (
    <div className="absolute w-full h-full z-10 flex justify-center items-center bg-transparent">
      <DotLottieReact src={`/lottie/danger.lottie`} loop autoplay />
      <br />
    </div>
  );
}
