import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
export const token = LocalStorageUtils.getToken();
const orderProductApi = {
  getOrderOfCustomer: async (id) => {
    console.log(id);
    const endpoint = `/order-product/view/customer/${id}`;
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
};

export default orderProductApi;
