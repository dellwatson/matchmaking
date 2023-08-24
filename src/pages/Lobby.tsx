import LobbyInterface from "@components/lobby/LobbyInterface";
import ShowRoom from "@components/showroom";

export default function Lobby() {
  return (
    <div
      className="absolute dark:bg-black min-h-0px h-full w-full "
      style={{ width: "100vw", height: "100vh" }}
    >
      <ShowRoom />
      <LobbyInterface />
    </div>
  );
}
