import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
import { toastError } from "../../Component/ToastNotification";
const orderApi = {
  // subject api
  createOrder: async (customer) => {
    const token = LocalStorageUtils.getToken();

    const endpoint = "/order/new";
    return await post(
      endpoint,
      customer,
      {},
      { Authorization: token, "content-type": "multipart/form-data" }
    )
      .then((res) => {
        if (res.data.code !== 200) console.log(res);
        return res;
      })
      .catch((err) => console.log(err));
  },
};

export default orderApi;
