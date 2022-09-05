import jwt_decode from "jwt-decode";
import { SESSION_TOKEN_NAME } from "../config/config";
class SessionStorageUtils {
  getItem(key, defaultValue = '""') {
    if (typeof sessionStorage === "undefined") {
      return undefined;
    }
    let item = sessionStorage.getItem(key);
    if (item && item === "undefined") {
      item = defaultValue;
    }
    return JSON.parse(item);
  }

  setItem(key, value = "") {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeItem(key) {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem(key);
    }
  }

  getUser() {
    if (typeof sessionStorage !== "undefined") {
      const token = this.getItem(SESSION_TOKEN_NAME);
      if (token) {
        try {
          return jwt_decode(token);
        } catch (err) {
          if (err.response && err.response.status === 401) {
            this.deleteUser();
          }
        }
      } else return token;
    }
    return undefined;
  }

  deleteUser() {
    sessionStorage.removeItem(SESSION_TOKEN_NAME);
  }

  getToken() {
    return this.getItem(SESSION_TOKEN_NAME);
  }

  clear() {
    sessionStorage.clear();
  }
}
export default new SessionStorageUtils();
