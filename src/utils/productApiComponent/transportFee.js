import { get, post, put } from "../ApiCaller";

const transportApi = {
  getTransportFee: async (shopId, token) => {
    const endpoint = `/transport-fee/get/${shopId}`;
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
};

export default transportApi;
