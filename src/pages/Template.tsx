import Interface from "@/_game/hud";
import WrapperInterface from "@/_game/hud/WrapperInterface";
import GameOverModal from "@/components/gameover/gameover-modal";

// canvas for gameplay
export default function Template() {
  return (
    <WrapperInterface>
      {/* <div className="absolute matchRoom border " /> */}
      {/* MatchRoomx */}
      {/* <ShowRoom /> */}
      <Interface />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          // background: "#00008B",
          background: "transparent",
        }}
        className="w-full h-full"
      />
      {/* <SoloGameApp /> */}
      <GameOverModal />
      {/* game over modal */}
      {/* result match */}
    </WrapperInterface>
  );
}
