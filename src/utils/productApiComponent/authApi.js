import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
import { toastError } from "../../Component/ToastNotification";
const authApi = {
  postChangePassword: async (newPass) => {
    const token = LocalStorageUtils.getToken();

    const endpoint = "/auth/change-password";
    return await post(endpoint, newPass, {}, { Authorization: token })
      .then((res) => {
        // if (res.data.code !== 200) console.log(res.response);
        return res;
      })
      .catch((err) => {
        {
          const mute = err;
        }
        return err;
      });
  },
  postForgotPassword: async (email) => {
    const token = LocalStorageUtils.getToken();
    const endpoint = "/auth/forgot-password";
    return await post(endpoint, email, {}, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        {
          const mute = err;
        }
        return err;
      });
  },
  postResetPassword: async (formData) => {
    const token = LocalStorageUtils.getToken();
    const endpoint = "/auth/reset-password";
    return await post(endpoint, formData, {}, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        {
          const mute = err;
        }
        return err.response;
      });
  },
  getRefreshToken: async () => {
    const token = LocalStorageUtils.getToken();
    const endpoint = "/auth/refresh";
    return await get(endpoint, {}, { "content-type": "application/json" })
      .then((res) => {
        console.log("line 54: ", res);
        return res;
      })
      .catch((err) => {
        console.log(err.response);
        {
          const mute = err;
        }
        return err.response;
      });
  },
};

export default authApi;
