import Interface from "@/_game/hud";
import WrapperInterface from "@/_game/hud/WrapperInterface";

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
        className="w-full h-full">
        <iframe
          src="http://localhost:5175"
          title="Widget"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        />
      </div>
      {/* <SoloGameApp /> */}
      {/* <GameOverModal /> */}
      {/* game over modal */}
      {/* result match */}
    </WrapperInterface>
  );
}
