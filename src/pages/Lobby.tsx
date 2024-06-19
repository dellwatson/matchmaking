// import connect from "@/web3/connect";
import { useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import {
  isHost,
  myPlayer,
  startMatchmaking,
  useMultiplayerState,
  usePlayersList,
} from "playroomkit";
import PlayMatch from "@/components/play/PlayMatch";

// 1. show button to go find match
// 2. show

export default function LobbyPage() {
  return (
    <div className="absolute dark:bg-black  h-full w-full !overflow-hidden">
      <PlayMatch />

      {/* button lobby together joining  */}

      {/* button terrain 1 */}
      {/* button terrain 2 */}
    </div>
  );
}
