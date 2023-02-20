import { get, post, put } from "../ApiCaller";

const paymentApi = {
  getAllPayMent: async (token) => {
    const endpoint = `/payment/list-all`;
    return await get(endpoint, {}, {}).catch((err) => console.log(err));
  },
};

export default paymentApi;
