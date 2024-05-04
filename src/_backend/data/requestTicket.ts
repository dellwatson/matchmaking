import { useState } from "react";
import axios from "axios";

const useTicketApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ticketData, setTicketData] = useState(null);

  const requestTicket = async (requestData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://anuievfybpmxudmplmqy.supabase.co/functions/v1/ticket-request",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
        }
      );

      console.log(response.data, "response");
      setTicketData(response.data);
      return response.data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, ticketData, requestTicket };
};

export default useTicketApi;
