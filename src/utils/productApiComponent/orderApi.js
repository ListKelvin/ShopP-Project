import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
import { toastError } from "../../Component/ToastNotification";
const orderApi = {
  // subject api
  createOrder: async (order) => {
    const token = LocalStorageUtils.getToken();
    const endpoint = "/order/new";
    return await post(endpoint, order, {}, { Authorization: token }).catch(
      (err) => console.log(err)
    );
  },
};

export default orderApi;
