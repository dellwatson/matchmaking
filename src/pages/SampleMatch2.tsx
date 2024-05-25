import useMatchmaking from "@/helpers/hooks/useMatchmaking";
import React, { useEffect } from "react";
import {
  Joystick,
  isHost,
  onPlayerJoin,
  useMultiplayerState,
  myPlayer,
  insertCoin,
} from "playroomkit";
export default function SampleMatch2() {
  //
  const { stage, players } = useMatchmaking();

  useEffect(() => {
    // check if game start
    startGame();
    // re-trigger
  }, []);

  // check DB and then load
  async function startGame() {
    // const room_code = await getRoomCode();
    // console.log(room_code, "room code");

    await insertCoin(
      {
        skipLobby: true,
        gameId: "6QKkBbt8OJnIBlIQSMi8",
        // discord: true,
        // matchmaking: true,
        reconnectGracePeriod: 50000,
        maxPlayersPerRoom: 2,
        // avatars: // eth
        // roomCode // -> get roomcode from match supabase?
        // enableBots
        // reconnectGracePeriod
        // maxPlayersPerRoom
      }
      // ,onLaunchCallback
      // ondisconnect
    );

    // console.log(res, "res");
  }

  const me = myPlayer();
  console.log(players, " ON PAGE");

  // player comes in ==> verify account BE (orPlayroom) correct in the client?
  // player setup -> skin, asset, name
  // (((()))) -> kick (viewer mode) or proceed
  return (
    <div>
      player {players?.length}
      {JSON.stringify(players?.map((o) => o?.state?.id))}
      <br />
      itsme --> 
      {me?.id}
    </div>
  );
}
