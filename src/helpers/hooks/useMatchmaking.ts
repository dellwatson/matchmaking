import { atom, useAtom } from "jotai";

import { useEffect, useState } from "react";
import {
  Joystick,
  isHost,
  onPlayerJoin,
  useMultiplayerState,
} from "playroomkit";

export default function useMatchmaking() {
  // insert coin, skipLobby, roomCode, maxPlayersPerRoom

  const host = isHost();
  const [players, setPlayers] = useState([]);
  const [stage, setStage] = useMultiplayerState("gameStage", "waiting_players"); // if solo then ready
  const [soloGame, setSoloGame] = useState(false);

  // load account_roomcode
  // read date+room_code
  // get mode -> multiplayer or solo player?
  // get accounts -> match the account on the app

  useEffect(() => {
    //player setup -> skin, asset, name

    //if account doesnt match from supabase -> kick or not return

    console.log(host, "host", stage);
    if (!host) {
      return;
    }
    // if (stage === "lobby") {
    //   // back to lobby? navigate
    //   return;
    // }

    onPlayerJoin((state) => {
      console.log(state, "state"); // check me -> account and add account there

      const controls = new Joystick(state, {
        type: "angular",
        buttons: [{ id: "Boost", label: "Boost" }],
      });
      const newPlayer = {
        state, // has accounts
        controls,
      };
      console.log(newPlayer, "newplayer");

      if (host) {
        // read state if already 2 players + 15secs, begin to go
        //
        setStage("starting");
        //update DB -> started_time
        // change start game

        //
        //

        // if winner exist
        //
      }

      // setPlayer based on account instead of id
      setPlayers((players) => [...players, newPlayer]);
      state.onQuit(() => {
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
    });
  }, []);

  // set name on

  // set readiness?

  // check hre if state game -> goes to match page too

  // go to BE and get roomcode
  // check room or join room?
  return {
    stage,
    players,
  };
}

// matchmaking -> button click -> move and change state into game --? WAIT
// start matchmaking()

//
