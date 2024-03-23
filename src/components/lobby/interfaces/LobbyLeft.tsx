// on mobile have peek
import CornerBox from "@/_ui/Box/CornerBox";
import DailyPerformances from "./performances";
import Claim from "./claim";
import QuestLobby from "@/components/quest/QuestLobby";
import Pass from "./pass";
import SeasonPass from "@/_ui/Lobby/SeasonPassBtn";

export default function LobbyLeft() {
  return (
    <div className="absolute left-0 mt-32 z-10  mx-4">
      {/* <Claim /> */}
      <QuestLobby />

      <div className="lg:hidden relative mt-18">
        {/* <Pass isMobile /> */}
        <SeasonPass />
      </div>
      {/* FEEDBACK MODAL */}
    </div>
  );
}
