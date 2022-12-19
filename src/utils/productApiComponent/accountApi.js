import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
import { toastError } from "../../Component/ToastNotification";
const accountApi = {
  getOwnUser: async (token) => {
    const endpoint = "/account/own";
    return await get(endpoint, {}, { Authorization: token })
      .then((res) => {
        if (res.status === 200) {
          return res.data.data;
        }
        return undefined;
      })
      .catch((err) => {
        {
          const mute = err;
        }
        return err;
      });
  },
};

export default accountApi;
