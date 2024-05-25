import { useEffect, useState } from "react";
import { supabase } from "../client";

// load listing

export const fetchInventoryContracts = async (chainId, provider) => {
  try {
    let query = supabase
      .from("smart_contract")
      .select(` *, network: network! inner ( * ) `)
      .eq("project_id", 1)
      .eq("network.chain_id", chainId)
      .eq("network.provider_name", provider);
    // might need to add filter project_id on last

    const { data, error } = await query;
    console.log(error, "error supabase");

    return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};

export const getMatchWithFindingStatus = async () => {
  const { data, error } = await supabase
    .from("game_match")
    .select("*")
    .eq("status", "finding")
    .single();

  if (error) {
    console.error("Error fetching match with 'finding' status:", error.message);
    return null;
  }

  return data;
};

export const doesMatchExist = async (playroom_id) => {
  const { data, error } = await supabase
    .from("game_match")
    .select("players, status")
    .eq("playroom_id", playroom_id)
    .order("timestamp_column", { ascending: false });

  if (error) {
    console.error("Error fetching match data:", error.message);
    return false;
  }

  // Check if data exists and status is "finding"
  return data.length > 0 && data[0]?.status === "finding";
};

//
export const updateGameMatch = async (playroom_id, obj) => {
  try {
    // let query = supabase
    //   .from("game_match")
    //   .insert({ playroom_id, status: "finding" });
    // // might need to add filter project_id on last
    // const { data, error } = await query;
    // console.log(error, "error supabase");
    // return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};
export const createGameMatch = async (playroom_id) => {
  try {
    let query = supabase
      .from("game_match")
      .insert({ playroom_id, status: "finding" });
    // might need to add filter project_id on last
    const { data, error } = await query;
    console.log(error, "error supabase", data);
    return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};

// Function to fetch match data
export const fetchMatchData = async (playroom_id) => {
  const { data, error } = await supabase
    .from("game_match")
    .select("players")
    .eq("playroom_id", playroom_id)
    .order("timestamp_column", { ascending: false });

  if (error) {
    console.error("Error fetching match data:", error.message);
    return null;
  }

  return data;
};

// Function to add player to match
export const addPlayerToMatch = async (playroom_id, playerId) => {
  const currentPlayers = await fetchMatchData(playroom_id);

  if (!currentPlayers) return;

  const updatedPlayers = [
    ...currentPlayers[0]?.players,
    playerId.toLowerCase(),
  ]; // Convert playerId to lowercase

  const { error } = await supabase
    .from("game_match")
    .update({ players: updatedPlayers })
    .eq("playroom_id", playroom_id);

  if (error) {
    console.error("Error updating match with new player:", error.message);
    return;
  }
};

// Function to remove player from match
export const removePlayerFromMatch = async (playroom_id, playerId) => {
  const currentPlayers = await fetchMatchData(playroom_id);

  if (!currentPlayers) return;

  const updatedPlayers = currentPlayers[0]?.players.filter(
    (player) => player.toLowerCase() !== playerId.toLowerCase() // Compare playerId in lowercase
  );

  const { error } = await supabase
    .from("game_match")
    .update({ players: updatedPlayers })
    .eq("playroom_id", playroom_id);

  if (error) {
    console.error("Error updating match with removed player:", error.message);
    return;
  }
};

export const verifyingAccountOnMatchId = async (matchId, account) => {
  try {
    // let query = supabase
    //   .from("smart_contract")
    //   .select(` *, network: network! inner ( * ) `)
    //   .eq("project_id", 1)
    //   .eq("network.chain_id", chainId)
    //   .eq("network.provider_name", provider);
    // // might need to add filter project_id on last
    // const { data, error } = await query;
    // console.log(error, "error supabase");
    // return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};

const sample = [
  {
    address: "0x123",
    createdAt: "",
    winner: false,
  },
  {
    address: "0x123",
    createdAt: "",
    winner: false,
  },
];

export const fetchDataInventory = async (arIds = []) => {
  try {
    let query = supabase
      .from("draft_product")
      .select(
        `
        *,
        chains: __product_chain! product_detail (
          *,
          network: network! network ( * ),
          smart_contract: smart_contract! smart_contract (
              *,
              network: network! network ( * )
          )
        )
      
      `
      )
      .in("id", arIds)
      .eq("project_id", 1);

    const { data, error } = await query;
    console.log(error, "error supabase");
    return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};

export const fetchDataInventoryTokenId = async (
  // change load array with tokenId + smart_contract here
  arIds = []
) => {
  try {
    let query = supabase
      .from("__product_chain")
      .select(
        `
          *,
          smart_contract: smart_contract! smart_contract ( * ),
          detail: draft_product! product_detail (*)
      `
      )
      .in("token_id", arIds);
    const { data, error } = await query;

    // and then reformat
    console.log(error, "error supabase");
    return data;
  } catch (e) {
    console.log(e);
    // setError("Error fetching data");
  }
};
