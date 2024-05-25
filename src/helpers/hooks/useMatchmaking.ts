import { atom, useAtom } from "jotai";

import { useEffect, useState } from "react";
import {
  Joystick,
  isHost,
  onPlayerJoin,
  useMultiplayerState,
  myPlayer,
  usePlayersList,
} from "playroomkit";
import useStore from "@/_game/store";
import useMessageStore from "@/_game/hud/Message/store";
import { useGameData } from "@/_backend/data/useGameData";
import authStore from "@/store/auth-store";

export default function useMatchmaking() {
  // insert coin, skipLobby, roomCode, maxPlayersPerRoom
  const { game_over, setEndTime } = useStore();
  const { setCountdown } = useMessageStore();
  // const { updateData, insertData } = useGameData("starex_game_match");
  const me = myPlayer();
  console.log(
    me,
    "MEE ME ME",
    me?.state?.profile?.name,
    me?.getProfile()?.name
  );

  const host = isHost();
  const [players, setPlayers] = useState([]);
  const [stage, setStage] = useMultiplayerState("gameStage", "waiting_players"); // if solo then ready
  const { profiles } = authStore();
  const playerList = usePlayersList();

  console.log(playerList, "playerList");

  //   const [soloGame, setSoloGame] = useState(false);

  // load account_roomcode
  // read date+room_code
  // get mode -> multiplayer or solo player?
  // get accounts -> match the account on the app
  console.log(stage, "stage out of useeffect", "host:", host);

  useEffect(() => {
    if (!me?.getState("name")) {
      //
      me?.setState("name", "0x");
    }
  }, []);

  useEffect(() => {
    console.log(
      stage,
      "USEEFFECT stage",
      host,
      me?.getState("name"),
      me,
      "EFFECT"
    );

    //player setup -> skin, asset, name
    //if account doesnt match from supabase -> kick or not return

    // console.log(host, "host", stage);
    // if (!host) return;

    onPlayerJoin((state) => {
      // console.log(state, "state"); // check me -> account and add account there
      //   const controls = new Joystick(state, {
      //     type: "angular",
      //     buttons: [{ id: "Boost", label: "Boost" }],
      //   });
      const newPlayer = {
        state, // has accounts
        // controls,
      };
      // console.log(newPlayer, "newplayer");
      // ---> if multiplayer --->

      // host detect and start the game when all conditions good
      if (host) {
        //solo
        console.log("host is exist waiting");

        if (stage === "waiting_players") {
          // read state if already 2 players + 15secs, begin to go

          console.log("ON WAITING PLAYERS", state, players);
          // --> else starting solo
          // setStage("starting");

          // --
        }
      }

      // setPlayer based on account instead of id
      setPlayers((players) => [...players, newPlayer]);
      state.onQuit(() => {
        console.log("quitting");
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
    });
  }, []);

  // set name on

  // set readiness?

  // check hre if state game -> goes to match page too

  // go to BE and get roomcode
  // check room or join room?

  // on game starting
  // store -> starting game // -> move to playroom-state?
  //
  useEffect(() => {
    if (stage === "starting" && host) {
      //countdown begin
      setCountdown(true);

      setTimeout(() => {
        setStage("playing");
        setCountdown(false);
        //update DB -> started_time
        // change start game

        //   release countdown + music

        // if winner exist
      }, 3000);
    }
    // if (stage === "playing") {
    //   setCountdown(false);
    // }
  }, []);

  useEffect(() => {
    if (game_over) {
      console.log("END TIME CREATED");
      //set finish time
      //reset on timeout
      // DB record end match
      setEndTime(Date.now());
      // if connected account -> store DB collected
    }
  }, [game_over]);

  return {
    stage,
    players: players.reduce(
      (acc, player) => {
        const id = player?.state?.id;

        // Check if the id is already present in the accumulator
        if (!acc.ids[id]) {
          // If not, add the player to the accumulator and mark the id as seen
          acc.ids[id] = true;
          acc.players.push(player);
        }
        return acc;
      },
      { players: [], ids: {} }
    ).players,
  };
}

// matchmaking -> button click -> move and change state into game --? WAIT
// start matchmaking()

// winner -> score,
