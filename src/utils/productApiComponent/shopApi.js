import { get, post, put } from "../ApiCaller";

const shopApi = {
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
  getShopById: async (id, token) => {
    const endpoint = `/shop/get-shop/${id}`;
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
};

export default shopApi;
