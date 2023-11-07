import { useState, useEffect } from "react";

function useMediumRssFeed() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL
    const apiUrl =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/kindeck-social-app";

    // Make the API request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData?.items);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  return { data, isLoading, error };
}

export default useMediumRssFeed;
