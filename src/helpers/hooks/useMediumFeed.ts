import { useState, useEffect } from "react";

const MIX_NEWS = ["taraxa-project", "tron-foundation"];

const TOTAL_TOPICS = 10;
const ROTATE_INTERVAL = 30000; // 30 seconds

function useMediumRssFeed() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let pool = [];
    let currentIndex = 0;

    const fetchData = async () => {
      try {
        // Fetch topics for each blog
        const responses = await Promise.all(
          MIX_NEWS.map((blogId) =>
            fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${blogId}`
            )
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => data.items)
          )
        );

        // Extract topics from each response
        const topics = responses.flatMap((items) =>
          items.slice(0, TOTAL_TOPICS / MIX_NEWS.length)
        );

        pool = topics;
        shuffleArray(pool);
        setData(pool.slice(currentIndex, currentIndex + TOTAL_TOPICS));
        setIsLoading(false);

        // Rotate topics every ROTATE_INTERVAL
        setInterval(() => {
          currentIndex = (currentIndex + TOTAL_TOPICS) % pool.length;
          setData(pool.slice(currentIndex, currentIndex + TOTAL_TOPICS));
        }, ROTATE_INTERVAL);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup interval on unmount
    return () => clearInterval(ROTATE_INTERVAL);
  }, []); // The empty dependency array ensures the effect runs only once

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return { data, isLoading, error };
}

export default useMediumRssFeed;
