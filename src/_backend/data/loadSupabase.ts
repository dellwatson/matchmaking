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
