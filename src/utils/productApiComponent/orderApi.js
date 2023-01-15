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
  getOrderCustomer: async (token) => {
    const endpoint = "/order/customer";
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
  getOrderCustomerDeliver: async (token) => {
    const endpoint = "/order/customer-deliver";
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
  getOrderCustomerHistory: async (token) => {
    const endpoint = "/order/customer-history";
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
  getOrderCustomerCancel: async (token) => {
    const endpoint = "/order/customer-cancel";
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
};

export default orderApi;
