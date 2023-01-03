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
  return axios.post(url, formData);
};
// .then((response) => {
//   console.log(response);
//   if (response.data.token) {
//     LocalStorageUtils.setItem("token", response.data.token);
//   }
//   toastSuccess(response.data.message);
//   return response.data;
// })
// .catch((error) => {
//   toastWarning(error.response.data.message);
//   return error.response.data;
// });
const logout = () => {
  LocalStorageUtils.removeItem("token");
  LocalStorageUtils.removeItem("cartItems");
};
export const register = (formData, navigate) => {
  const url = `${API_URL}/account/sign-up`;
  return axios
    .post(url, formData)
    .then((response) => {
      navigate("/signIn");
      toastSuccess(response.data.message);
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
