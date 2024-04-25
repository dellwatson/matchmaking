import { ALL_LISTING_PRODUCTS } from "@/_backend/_mockBackend/listing";
import React, { useEffect, useState } from "react";

export default function useListingProduct(_id: string) {
  //
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // load from BE

    function loadData() {
      const res = ALL_LISTING_PRODUCTS?.find((o) => o?.listingId === _id);
      console.log(res, "res", ALL_LISTING_PRODUCTS, _id);
      setData(res);
    }

    //
    loadData();
  }, [_id]);

  return {
    data,
    isLoading,
  };
}
