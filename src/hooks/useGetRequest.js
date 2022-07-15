import { useCallback, useState } from "react";
import axios from "axios";

// Custom reusable axios.get hook which get's data from an api.
const useGetRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((url, additionalFunction) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);

        // Custom additionalFunction which's responsible to set some states and so on.
        // I'm using it conditionally cause i dont want to call this function on every request.
        additionalFunction && additionalFunction(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    sendRequest,
    error,
    data,
    setData,
  };
};

export default useGetRequest;
