import useMatchmaking from "@/helpers/hooks/useMatchmaking";
import React, { useEffect, useState } from "react";
import {
  Joystick,
  isHost,
  onPlayerJoin,
  useMultiplayerState,
  myPlayer,
} from "playroomkit";
import useProfile, { profileStore } from "@/_core/hooks/useProfile";
export default function SampleMatch() {
  //
  const { stage, players } = useMatchmaking();
  const me = myPlayer();
  console.log(players, " ON PAGE");

  // --> check if after 1sec -> array length 0 (break) --> check again after 3sec (break) --> still array 0 -> insert coin -->
  //----------------------------------------------------------------------------------------------

  // subscribe error read from where ->

  //----------------------------------------------------------------------------------------------
  // if host -> control game -> checkin starting on 4sec ---> waiting player [OPTIONAL]
  // ->>>
  // ---> each player check PARAM as id DB-> DB access -> verify has its own address as ID -> else kick
  // --> PROBLEM: 6/6 -> there's the 7th (kick this)...?? ...

  // on player joining (((me))) -< assign id to players me -> // update DB to check READY on player

  // --> host check if all players has address verified on STATE
  // ---> then host change gameState from waiting to START

  // all players subscribe gamestate -> if START -> then countdown begin, and moving out

  // host take a while to reconnect
  // match can leave without end
  // match can end

  return (
    <div>
      player {players?.length}
      {JSON.stringify(players?.map((o) => o?.state?.id))}
      <br />
      itsme --
      {me?.id}
    </div>
  );
}

const buttons = [{ id: "Respawn", label: "Spawn" }];

// OPTIONAL WAITING PLAYERS on lobby
function useMatch() {
  const [players, setPlayers] = useState([]);
  const [stage, setStage] = useMultiplayerState("gameStage", "waiting_players"); // if solo then ready
  // const {} = useProfile()
  const { profiles } = profileStore();
  const me = myPlayer();
  const host = isHost();

  // check if me profile

  // get params or match-id

  // update and verify DB site with
  useEffect(() => {
    function verifyingPlayer() {
      if (!profiles?.length) return;
      if (!me?.getState("name")) {
        // get current id/email/address client access-id
        const myAccount = profiles[0]?.address;
        // verify to database if players in this match-id

        // yes
        // setState('') // update db -> user joined [ optional ]
        me?.setState("name", "0x");
        // else
        // -> give warn -> (clear params id) and kick player ?
        // need to check if kicked

        // --------> problems: playersList from playroom based on joining,
        // --------> need to kick
      }
    }
  }, [me]);
  // only return players with name too

  // OPTIONAL -> HOST check all players ready
  // HOST check at least half of players ready?
  // starting game in 5sec -> gamestate to start
  //

  // host starting game
  useEffect(() => {
    // upon changing host -> user leaving, do we need to checking back ?
    // if host exist and still waiting game
    // ----> host start game -> change it and DB also execute?
    //
  }, [host]);

  // host checking game situation and kicking players

  useEffect(() => {
    /// on modal pop up shows?
    onPlayerJoin((state) => {
      const controls = new Joystick(state, {
        type: "angular",
        buttons, // change buttons
      });

      const newPlayer = { state, controls };
      setPlayers((players) => [...players, newPlayer]);
      state.onQuit(() => {
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
    });
  }, []);

  return {
    stage,
    players: players.reduce(
      (acc, player) => {
        const id = player?.state?.id;
        // also kick if not having address in the state

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
