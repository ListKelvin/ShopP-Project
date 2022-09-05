import { useState, useEffect } from "react";
import sessionStorageUtils from "./sessionStorageUtils";

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(
    () => sessionStorageUtils.getUser(key) || defaultValue
  );
  useEffect(() => {
    sessionStorageUtils.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};
