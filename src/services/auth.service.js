// import { post } from "../utils/ApiCaller";
import axios from "axios";
import LocalStorageUtils from "../utils/LocalStorageUtils";
// import { Navigate } from "react-router-dom";
import {
  toastSuccess,
  toastWarning,
} from "../Component/ToastNotification/index";
import { API_URL } from "../config/config";
export const login = (formData) => {
  const url = `${API_URL}/auth/login`;
  return axios
    .post(url, formData)
    .then((response) => {
      if (response.data.token) {
        LocalStorageUtils.setItem("user", JSON.stringify(response.data.token));
      }
      toastSuccess(response.data.message);
      return response.data;
    })
    .catch((error) => {
      toastWarning(error.response.data.message);
    });
};
const logout = () => {
  LocalStorageUtils.removeItem("user");
};
export const register = (formData, navigate) => {
  const url = `${API_URL}/account/sign-up`;
  return axios
    .post(url, formData)
    .then((response) => {
      toastSuccess(response.data.message);
      navigate("/signIn");
    })
    .catch((error) => {
      toastWarning(error.response.data.message);
    });
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
