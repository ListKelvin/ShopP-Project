import { post } from "../utils/ApiCaller";
import LocalStorageUtils from "../utils/LocalStorageUtils";
import {
  toastSuccess,
  toastWarning,
} from "../Component/ToastNotification/index";
export const login = (formData) => {
  const response = post("/auth/login", formData, {}, {})
    .then((response) => {
      console.log(response.data.message);
      if (response.data.token) {
        LocalStorageUtils.setItem("user", JSON.stringify(response.data.token));
      }
      toastSuccess(response.data.message);
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      toastWarning(error.response.data.message);
    });

  return response;
};
const logout = () => {
  LocalStorageUtils.removeItem("user");
};
export const register = (formData) => {
  const response = post("/account/sign-up", formData)
    .then((response) => {
      toastSuccess(response.data.message);

      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      toastWarning(error.response.data.message);
    });
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
