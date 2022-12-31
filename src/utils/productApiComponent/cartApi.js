import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
import { toastError } from "../../Component/ToastNotification";
const cartApi = {
  // subject api
  updateCart: async (formatData) => {
    const token = LocalStorageUtils.getToken();
    const endpoint = "/cart/update";
    return await post(endpoint, formatData, {}, { Authorization: token }).catch(
      (err) => console.log(err)
    );
  },
  getCart: async () => {
    const token = LocalStorageUtils.getToken();
    const endpoint = "/cart";
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
};

export default cartApi;
