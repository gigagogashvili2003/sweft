import { useState } from "react";
import axios from "axios";

// Custom reusable axios.get hook which get's data from an api.
const useGetRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = (url) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    sendRequest,
    error,
    data,
  };
};

export default useGetRequest;
