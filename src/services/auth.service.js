// import { post } from "../utils/ApiCaller";
import axios from "axios";
import LocalStorageUtils from "../utils/LocalStorageUtils";
import {
  toastSuccess,
  toastWarning,
} from "../Component/ToastNotification/index";
import { API_URL } from "../config/config";
export const login = (formData) => {
  const url = `${API_URL}/auth/login`;
  axios.post(url, formData).then((response) => {
    if (response.data.token) {
      LocalStorageUtils.setItem("user", JSON.stringify(response.data.token));
    }
    // toastSuccess(response.data.message);
    return response.data;
  });
};
const logout = () => {
  LocalStorageUtils.removeItem("user");
};
export const register = (formData) => {
  const url = `${API_URL}/account/sign-up`;
  axios.post(url, formData).then((response) => {
    console.log(response);
    toastSuccess(response.data.message);
    return response.data;
  });
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
