import CornerBox from "@theras_labs/ui/src/Box/CornerBox";
import GlowingText from "@theras_labs/ui/src/text/glowing-text";
import { useNavigate } from "react-router-dom";

import { useLayoutEffect, useState } from "react";
import ModalPlay from "../lobby/interfaces/play/modal-play";
import GameEvent from "@/components/play/LobbyEvent";
import useLobbyGame from "@/helpers/hooks/useLobbyGame";
import LoadingBar from "./LoadingBar";
import PlayArrow from "./PlayArrow";
import useLoadStarship from "@/_core/hooks/useLoadStarship";

export default function Play({ isMobile = true }) {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  const { gameState, handlePlay, loading } = useLobbyGame();

  console.log(gameState, "gameState nOT RESPONSIVE?");

  return (
    <>
      {!isMobile && (
        <div className="absolute  w-full bottom-4 flex justify-center items-center ">
          <GameEvent />
        </div>
      )}
      <div
        className={`absolute bottom-4 ${
          isMobile ? "px-2" : "right-4"
        } font-bold cursor-pointer   ${isMobile && " w-full "} `}
      >
        {isMobile && (
          <div className="w-full  mb-2 ">
            <GameEvent />
          </div>
        )}
        {/* <div className="absolute bottom-1 right-1 font-bold m-4 cursor-pointer border"> */}
        {/* <div onClick={openModal} className="absolute w-full border">
          <div className="relative bottom-7 p-2 pt-1 pb-3 border rounded-md border-red-500 bg-red-500 w-full ">
            <div className="text-xs flex justify-between font-bold text-white uppercase">
              <div className="text-green-200">
                Ticket: OFF
              </div>
              <div>mode: solo</div>
            </div>
          </div>
        </div> */}
        {/* <div className="absolute z-10 -5">
          <img
            src={SVG_EXPLORE}
            className="w-16 h-16 relative right-6 top-5 animate-spin"
          />
        </div> */}

        <CornerBox
          onClick={() => {
            handlePlay();
            // navigate("/match-room");
            // alert("Events are closed");
            // RESET GAME STORE
          }}
          border
          classNameOutside={" p-6 lg:p-8 lg:w-[300px] w-full"}
          className="flex justify-center items-center w-full h-full uppercase"
          background="rgba(0, 0, 0, 0.9)"
        >
          {/* <GlowingText color="red" effect="pulsate" unit="px" fontSize="24px"> */}
          {!loading ? (
            // {gameState === "lobby" ? (
            <>
              {/* <div className="relative border border-red-500"> */}
              PLAY
              <PlayArrow />
            </>
          ) : (
            <>
              FINDING MATCH
              <LoadingBar />
            </>
          )}
          {/* loading */}
          {/* </GlowingText> */}
        </CornerBox>
      </div>
      {/* <ModalPlay
        {...{
          isOpen,
          closeModal,
          openModal,
        }}
      /> */}
    </>
  );
}
