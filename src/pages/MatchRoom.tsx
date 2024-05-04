import SoloGameApp from "@/_game";
import Interface from "@/_game/hud";
import WrapperInterface from "@/_game/hud/WrapperInterface";
import GameOverModal from "@/components/gameover/gameover-modal";
import ShowRoom from "@/components/showroom";
import React from "react";

// canvas for gameplay
export default function MatchRoomPage() {
  return (
    <WrapperInterface>
      {/* <div className="absolute matchRoom border " /> */}
      {/* MatchRoomx */}
      {/* <ShowRoom /> */}
      <Interface />
      <SoloGameApp />
      <GameOverModal />
      {/* game over modal */}
      {/* result match */}
    </WrapperInterface>
  );
}

// cheat detection
// room-id eligible identify
// nft  use

// ${base}
// text-align: right;
// top: 40px;
// right: 50px;
// font-size: 2em;
// transform: skew(-5deg, -5deg);
// pointer-events: all;
// cursor: pointer;
// & > a {
//   color: indianred;
//   text-decoration: none;
// }
// @media only screen and (max-width: 900px) {
//   font-size: 1.5em;
// }
