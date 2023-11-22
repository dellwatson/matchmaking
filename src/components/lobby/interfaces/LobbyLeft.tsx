// on mobile have peek
import CornerBox from "@/components/_ui/box/CornerBox";
import DailyPerformances from "../daily-performances";
import Claim from "./claim";

export default function LobbyLeft() {
  return (
    <div className="absolute left-0 mt-32 z-10  mx-4">
      <Claim />
      <div className="absolute">
        <CornerBox
          classNameOutside=" w-[400px] xl:min-h-[700px] "
          className="w-full h-full "
          background="rgba(0, 0, 0, 0.9)"
        >
          <DailyPerformances />
        </CornerBox>
      </div>
      {/* FEEDBACK MODAL */}
    </div>
  );
}
