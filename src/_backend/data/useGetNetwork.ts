import { useEffect, useState } from "react";
import { supabase } from "../client";

// load listing
const useGetNetwork = (networkName = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(networkName, "network name");
  useEffect(() => {
    if (!networkName) return;
    let isMounted = true;
    console.log(networkName, "LOAD NETWORK PAYMENT");

    const fetchData = async () => {
      setLoading(true);
      let query = supabase
        .from("network")
        .select(` * `)
        .eq("name", networkName)
        .single();
      //   // Apply title filter if provided
      //   if (title) {
      //     query = query.eq("detail.title", title);
      //   }

      try {
        const { data, error } = await query;
        console.log(data, "--LOAD NETWORK PAYMENT");

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
  }, [networkName]); // Add title to the dependency array to refetch when it changes

  return { data, loading, error };
};

export default useGetNetwork;
