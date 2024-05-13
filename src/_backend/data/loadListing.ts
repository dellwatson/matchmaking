import { useEffect, useState } from "react";
import { supabase } from "../client";

const useLoadListing = (project_id = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      let query = supabase
        .from("sale")
        .select(
          `
              *,
              list: __sale_products! sale_id ( 
                *, 
                highlight: payment! highlight_price ( 
                  *,
                  crypto: crypto! crypto_token ( 
                    *,
                    currency: currency! currency ( * )
                  )
                ),
                product: draft_product! product_id ( 
                  *,
                  chains: __product_chain! product_detail (
                      *,
                      smart_contract: smart_contract! smart_contract (
                          *,
                          network: network! network ( * )
                      )
                  ),
                  payments: payment! product_id (
                      *,
                      crypto: crypto! crypto_token ( 
                          *,
                          currency: currency! currency ( * )
                          )
                      )
                  )
              )
          `
        )
        .eq("project_id", project_id);

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

export default useLoadListing;
