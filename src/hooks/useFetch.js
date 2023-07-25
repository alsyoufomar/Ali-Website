import { useEffect, useContext } from "react";
import { StateContext } from "../store/index";

const useFetch = (url, action) => {
  const [state, dispatch] = useContext(StateContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const res = await fetch(url);
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
