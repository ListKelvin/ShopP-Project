import { get, post, put } from "../ApiCaller";
import LocalStorageUtils from "../LocalStorageUtils";
const customerApi = {
  // subject api
  createCustomer: async (customer) => {
    const token = LocalStorageUtils.getToken();

    const endpoint = "/customer/new";
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
  editCustomer: async (customer) => {
    const token = LocalStorageUtils.getToken();
    console.log(token);
    const endpoint = `/customer/edit`;
    return await post(
      endpoint,
      customer,
      {},
      {
        Authorization: token,
        "content-type": "multipart/form-data",
      }
    )
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

export default customerApi;
