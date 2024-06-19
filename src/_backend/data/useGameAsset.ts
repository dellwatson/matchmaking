import { useEffect, useState } from "react";
import { supabase } from "../client";

// load listing
const useGameAsset = (product_id = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
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
        .eq("id", product_id)
        .single();
      //   // Apply title filter if provided
      //   if (title) {
      //     query = query.eq("detail.title", title);
      //   }

      try {
        const { data, error } = await query;

        if (isMounted) {
          if (error) {
            setError(error.message);
          } else {
            setData(data);
          }
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); // Add title to the dependency array to refetch when it changes

  return { data, loading, error };
};

export default useGameAsset;