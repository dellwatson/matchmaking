import Layout from "@components/lobby/LobbyInterface";
import LobbyRight from "@/components/lobby/interfaces/LobbyRight";
import { LobbyInterfaceBot } from "@components/lobby/LobbyInterface";
import ShowRoom from "@components/showroom";

export default function LobbyPage() {
  // load from DB? and wallet?
  // set main vehicle on lobby
  return (
    <div className="absolute dark:bg-black  h-full w-full overflow-hidden">
      <Layout />
      <LobbyRight />
      <ShowRoom />
      <LobbyInterfaceBot />
    </div>
  );
}
