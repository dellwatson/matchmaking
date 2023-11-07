import SoloGameApp from "@/_game";
import Interface from "@/_game/hud";
import GameOverModal from "@/components/_ui/modal/gameover-modal";
import ShowRoom from "@/components/showroom";
import React from "react";

// cheat detection
// room-id eligible identify
// nft  use

// canvas for gameplay
export default function MatchRoom() {
  return (
    <div className="absolute">
      {/* MatchRoomx */}
      {/* <ShowRoom /> */}
      <Interface />
      <SoloGameApp />
      <GameOverModal />
      {/* game over modal */}
      {/* result match */}
    </div>
  );
}
