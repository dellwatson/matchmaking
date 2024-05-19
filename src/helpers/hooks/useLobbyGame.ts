import { useGameData } from "@/_backend/data/useGameData";
import { equipmentStore } from "@/_core/hooks/useEquipment";
import useLoadStarship from "@/_core/hooks/useLoadStarship";
import { profileStore } from "@/_core/hooks/useProfile";
import authStore from "@/store/auth-store";
import { getDateId } from "@/utils/date";
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
import { toast } from "react-toastify";

// because of not enough player, the game is on solo 1st mostly, then change into multiplayer later

export default function useLobbyGame() {
  // insert coin, skipLobby, roomCode, maxPlayersPerRoom
  const navigate = useNavigate();
  const [gameState, setGameState] = useMultiplayerState("gameState", "lobby");
  const [loading, setLoading] = useState(false);

  const { stateModel } = useLoadStarship();
  // const []

  // console.log(gameState, "gameState");
  const { insertData } = useGameData();
  const me = myPlayer();
  const { profiles } = authStore();
  // addProfile({
  //   provider: "EVM",
  //   address: addressEVM,
  //   network: chainEVM?.name,
  //   chainId: chainEVM?.id,
  // });

  // get from local if lobby has done or not

  useEffect(() => {
    // check if game start
    // startGame();
    // re-trigger
  }, []);
  async function startGame() {
    // const room_code = await getRoomCode();
    // console.log(room_code, "room code");

    await insertCoin(
      {
        skipLobby: true,
        gameId: "6QKkBbt8OJnIBlIQSMi8",
        discord: true,
        matchmaking: true,
        reconnectGracePeriod: 300,
        maxPlayersPerRoom: 1,
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

  // set name on

  // check hre if state game -> goes to match page too

  // go to BE and get roomcode
  //check room or join room?

  // create match
  const handlePlay = async () => {
    // MUST CLEAR ROOM CODE ///////////////
    navigate("/");
    console.log("CONTINUE TO GAME START");
    if (!stateModel) {
      toast("You need to equip a starship to play!");
      return;
    }

    setLoading(true);
    // -----> check equipment ready
    // -----> check the validity of ownership equipment
    // //
    // // set terrain
    // // set
    // // navigate
    // // player -> 1 -> multiplayer ?
    // setGameState("loading");
    // console.log("matchmaking - loading");

    // change it for solo
    // await startMatchmaking(); // FOR MULTIPLAYER
    await startGame();
    console.log("get room code");

    const room_code = await getRoomCode();
    console.log(room_code, "room code");
    // // http://localhost:5174/#r=RPUB_O9BQZH_3EDO9JYS3
    // setGameState("game");
    // console.log("matchmaking find-game");

    // // const id  = `${getDateId()}_${room_code}`
    // if (profiles?.length) {
    //   //not a guest

    //   await insertData({
    //     id: room_code,
    //     players: [
    //       {
    //         // provider: "guest", //discord //wallet // guest
    //         // account: "", /// guest (use playroom id)
    //         ...profiles[0],
    //       },
    //     ],
    //   });
    // }

    // supabase account + room_code
    // -> account send
    // date-today + room_code=> id  ->
    // -> add account joining -> time
    // finished

    // navigate to match-room#
    //navigate
    setLoading(false);

    navigate("/match-room?#r=R" + room_code);
    // navigate("/match-room?#r=R");
  };

  //
  return {
    handlePlay,
    gameState,
    loading,
  };
}

// matchmaking -> button click -> move and change state into game --? WAIT
// start matchmaking()

//
