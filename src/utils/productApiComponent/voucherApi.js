import { get, post, put } from "../ApiCaller";

const voucherApi = {
  getAllVoucherOfShopP: async (shopId, token) => {
    const endpoint = `/voucher/list-by-shop-id/${shopId}`;
    return await get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
  getDiscountVoucherOfUser: async (token) => {
    const endpoint = `/voucher/customer-discount`;
    return await get(endpoint, {}, { Authorization: token });
  },
  getFreeShipVoucherOfUser: async (token) => {
    const endpoint = `/voucher/customer-freeship`;
    return await get(endpoint, {}, { Authorization: token });
  },
};

export default voucherApi;
