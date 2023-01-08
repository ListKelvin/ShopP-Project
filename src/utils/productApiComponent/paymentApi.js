import { get, post, put } from "../ApiCaller";

const paymentApi = {
  postNewShop: async (formData, token) => {
    const endpoint = "/shop/new";
    return await post(
      endpoint,
      formData,
      {},
      { Authorization: token, "content-type": "multipart/form-data" }
    ).catch((err) => {
      console.log(err);
      return err.response;
    });
  },
  getAllPayMent: async (id, token) => {
    const endpoint = `/payment/list-all`;
    return await get(endpoint, {}, {}).catch((err) => console.log(err));
  },
};

export default paymentApi;
