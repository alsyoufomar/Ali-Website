import { useEffect, useContext } from "react";
import { StateContext } from "../store/index";

const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const useFetch = (url, action, options = getOptions) => {
  const [state, dispatch] = useContext(StateContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        dispatch({ type: action, payload: json });
        dispatch({ type: "SET_LOADING", payload: false });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err });
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, [url, dispatch]);

  //   return { loading, error, data };
};

export default useFetch;
