import { decodeToken, isExpired } from "react-jwt";

import { get } from "./ApiCaller";

import { LOCAL_STORAGE_TOKEN } from "../config/config";

class LocalStorageUtils {
  getItem(key, defaultValue = "") {
    if (typeof localStorage === "undefined") {
      return undefined;
    }
    let item = localStorage.getItem(key);
    if (item === undefined) {
      item = defaultValue;
    }
    return item;
  }
  setItem(key, value = "") {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    }
  }
  removeItem(key) {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  }
  getJWTUser() {
    if (typeof localStorage !== "undefined") {
      const token = this.getItem(LOCAL_STORAGE_TOKEN);
      if (token) {
        try {
          const jwtUser = decodeToken(token);
          return jwtUser;
        } catch (err) {
          if (err.response && err.response.status === 401) {
            this.deleteUser();
          }
        }
      } else return token;
    }
    return undefined;
  }

  getUser() {
    if (typeof localStorage !== "undefined") {
      const token = this.getItem(LOCAL_STORAGE_TOKEN);
      if (isExpired(token)) {
        this.deleteUser();

        return undefined;
      }
      if (token) {
        try {
          const fetchedUser = get(
            `/account/own`,
            {},
            { Authorization: token }
          ).then((res) => res.data);

          return fetchedUser;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          if (err.response && err.response.status === 401) {
            this.deleteUser();
          }
        }
      } else {
        return undefined;
      }
    }
  }

  deleteUser() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  }
  getToken() {
    return this.getItem(LOCAL_STORAGE_TOKEN);
  }
  clear() {
    localStorage.clear();
  }
}

export default new LocalStorageUtils();
