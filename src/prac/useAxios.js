import defaultAxios from "axios";
import React, { useState, useEffect } from "react";
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refectchState = () => {
    setState({ loading: true });
    setTrigger(Date.now()); // random number
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((response) => {
        setState({ loading: false, data: response });
      })
      .catch((error) => {
        setState({ loading: false, error: error });
      });
    return () => {};
  }, [trigger]);
  if (!opts.url) {
    return;
  }
  return { ...state, refectchState };
};
export default useAxios;
