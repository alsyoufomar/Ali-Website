import { useEffect, useContext, useState } from "react";
import { StateContext } from "../store/index";

const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const useFetch = (url, action, options = getOptions) => {
  const [state, dispatch] = useContext(StateContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json.error.status + " " + json.error.message);
        }
        dispatch({ type: action, payload: json });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error };
};

export default useFetch;
