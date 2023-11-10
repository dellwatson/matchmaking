import SoloGameApp from "@/_game";
import Interface from "@/_game/hud";
import GameOverModal from "@/components/_ui/modal/gameover-modal";
import ShowRoom from "@/components/showroom";
import React from "react";
import ImageSpace from "@/assets/hydra_constellation.jpg";
import "./room.css";
// canvas for gameplay
export default function MatchRoom() {
  return (
    <div
      // style={{
      //   width: "100%",
      //   height: "100%",
      //   backgroundImage: `url(${ImageSpace})`,
      //   backgroundSize: "cover", // Adjust the sizing as needed
      // }}
      className="absolute "
    >
      {/* <div className="absolute matchRoom border " /> */}
      {/* MatchRoomx */}
      {/* <ShowRoom /> */}
      <Interface />
      <SoloGameApp />
      {/* <GameOverModal /> */}
      {/* game over modal */}
      {/* result match */}
    </div>
  );
}

// cheat detection
// room-id eligible identify
// nft  use
