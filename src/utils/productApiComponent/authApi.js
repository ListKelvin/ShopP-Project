import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
import { toastError } from "../../Component/ToastNotification";
const authApi = {
  postChangePassword: async (newPass) => {
    const token = LocalStorageUtils.getToken();

    const endpoint = "/auth/change-password";
    return await post(endpoint, newPass, {}, { Authorization: token })
      .then((res) => {
        if (res.data.code !== 200) console.log(res.response);
        return res;
      })
      .catch((err) => toastError(err.response.data.message));
  },
};

export default authApi;
