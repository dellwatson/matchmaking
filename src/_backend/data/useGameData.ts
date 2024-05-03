import { useState } from "react";
import { supabase } from "../client"; // Import your Supabase client instance

export function useGameData(tableName = "starex_game_match") {
  const [updatedData, setUpdatedData] = useState(null);
  const [insertedData, setInsertedData] = useState(null);

  const [error, setError] = useState(null);

  async function updateData(filter, newData) {
    try {
      const { data: updatedData, error } = await supabase
        .from(tableName)
        .update(newData)
        .where(filter);
      if (error) {
        setError(error.message);
      } else {
        setUpdatedData(updatedData);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  async function insertData(data) {
    try {
      const { data: insertedData, error } = await supabase
        .from(tableName)
        .insert(data)
        .single();
      if (error) {
        setError(error.message);
      } else {
        setInsertedData(insertedData);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return { updatedData, insertedData, error, insertData, updateData };
}
