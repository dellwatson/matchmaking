import {
  addPlayerToMatch,
  createGameMatch,
  getMatchWithFindingStatus,
} from "@/_backend/data/loadSupabase";
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
  console.log(me, "LOBBY Mme");
  const { profiles } = authStore();
  // addProfile({
  //   provider: "EVM",
  //   address: addressEVM,
  //   network: chainEVM?.name,
  //   chainId: chainEVM?.id,
  // });

  // get from local if lobby has done or not

  // useEffect(() => {
  //   // check if game start
  //   // startGame();
  //   // re-trigger
  // }, []);

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
  async function startGameCode(v) {
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
        roomCode: v,
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

  // ->
  const handleFindingMatch = async () => {
    const res = await getMatchWithFindingStatus();
    if (!!res) {
      //
      await addPlayerToMatch(res?.playroom_id, "account");
    } else {
      //
    }
  };

  // create match
  const handlePlay = async () => {
    // MUST CLEAR ROOM CODE ///////////////
    navigate("/");
    // console.log("CONTINUE TO GAME START");
    // if (!stateModel) {
    //   toast("You need to equip a starship to play!");
    //   return;
    // }

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

    // bug: after finding match and quit room -> will not be able to get unless reload?
    try {
      // open for 15sec -> empty still go alone
      console.log("finding player");
      // await startMatchmaking(); // FOR MULTIPLAYER
      // if the room has not hit max players, new player will be added there
      // if no room is available, a new room is created
      //
      // --> check region
      // --> finding DB with exist slot
      // 0> game start with roomcode?
      // no --------> created -> assign self -> open load modal() -> match players (1/6) on exit -> update DB
      // yes--------> assign (update DB) == mybe if last player? (add + db update [must success] starting game (db update) -> trigger roomCode -> move out
      // --->

      // -----------------------------------
      // -> useEffect
      // -> subscribe (roomId) ? --> if DB update -> move page (if last person not needed)
      // -------> moving it with NFT asset->>

      await startGame(); // solo
      console.log("get room code");

      //---> finding player ->
      const room_code = await getRoomCode();
      console.log(room_code, "room code");
      await createGameMatch(room_code);

      // ((((())))) ==> check if database exist? and still allowed to play? else DO something here: -> create private?
      // --> mitigate to playroom DB ?
      // ((((())))) ==> might need to ask dev, how to create new matchmaking?

      // --> set players ID _> into database
      // -->

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
      // if (room_code) {
      //   navigate("/match-room-sample?#r=R" + room_code);
      // } else {
      //   // throw
      //   throw Error("room code not generated");
      // }
      // navigate("/match-room?#r=R");
    } catch (error) {
      console.log(error, "erro");
      setLoading(false);
    }
  };

  const handlePlayTest = async (room_code) => {
    try {
      await startGameCode(room_code); // solo
      console.log("waitng", me);
      await createGameMatch(room_code);

      // --> todo: move into hooks me and DB correct
      setTimeout(() => {
        console.log(me, "after timeout");
        me?.setState("name", "this is address");
        // navigate("/match-room-sample?#r=R" + room_code);
      }, 1000);

      // --> test to insert
      //
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handlePlaySolo = async (v) => {
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

    // solo
    navigate("/match-room?#r=R" + room_code);
    // navigate("/match-room?#r=R");
  };

  //
  return {
    handlePlayTest,
    handlePlay,
    gameState,
    loading,
  };
}

// matchmaking -> button click -> move and change state into game --? WAIT
// start matchmaking()

//
