import { atom, useAtom } from "jotai";
import {
  isHost,
  myPlayer,
  startMatchmaking,
  useMultiplayerState,
  usePlayersList,
  insertCoin,
  getRoomCode,
} from "playroomkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// because of not enough player, the game is on solo 1st mostly, then change into multiplayer later

export default function useLobbyGame() {
  // insert coin, skipLobby, roomCode, maxPlayersPerRoom
  const navigate = useNavigate();
  const [gameState, setGameState] = useMultiplayerState("gameState", "lobby");

  // get from local if lobby has done or not

  useEffect(() => {
    // check if game start
    async function startGame() {
      // const room_code = await getRoomCode();
      // console.log(room_code, "room code");

      const res = await insertCoin(
        {
          skipLobby: true,
          gameId: "6QKkBbt8OJnIBlIQSMi8",
          discord: true,
          matchmaking: true,
          // avatars: // eth
          // roomCode // -> get roomcode from match supabase?
          // enableBots
          // reconnectGracePeriod
          // maxPlayersPerRoom
        }
        // ,onLaunchCallback
        // ondisconnect
      );

      console.log(res, "res");
    }
    startGame();

    // re-trigger
  }, []);

  // set name on

  // check hre if state game -> goes to match page too

  // go to BE and get roomcode
  //check room or join room?

  // create match
  const handlePlay = async () => {
    // // set terrain
    // // set
    // // navigate
    // // player -> 1 -> multiplayer ?
    // setGameState("loading");
    // console.log("matchmaking - loading");
    // const x = await startMatchmaking();
    // console.log("matchmaking find-game", x);
    // setGameState("game");
    // console.log("get room code");

    // const room_code = await getRoomCode();
    // console.log(room_code, "room code");

    // // supabase account + room_code
    // // -> account send
    // // date-today + room_code=> id  ->
    // // -> add account joining -> time
    // // finished

    // // navigate to match-room#
    // //navigate
    // navigate("/match-room?#r=R" + room_code);
    navigate("/match-room?#r=R");
  };

  //
  return {
    handlePlay,
  };
}

// matchmaking -> button click -> move and change state into game --? WAIT
// start matchmaking()

//
