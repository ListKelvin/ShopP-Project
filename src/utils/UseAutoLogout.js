import { useEffect } from "react";
import LocalStorageUtils from "./LocalStorageUtils";
export function useAutoLogout(jwt) {
  useEffect(() => {
    if (jwt) {
      console.log("check hook use auto-logout");
      const expirationTime = jwt.exp;
      const timeoutId = setTimeout(() => {
        // Logout user
        LocalStorageUtils.removeItem("token");
        LocalStorageUtils.removeItem("cartItems");
      }, (expirationTime - Date.now() / 1000) * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [jwt]);
}
