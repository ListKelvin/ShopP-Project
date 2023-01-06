import { get, post, put } from "../ApiCaller";

const voucherApi = {
  getAllVoucherOfShopP: async (token) => {
    const endpoint = `/voucher/list-shopP`;
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
  getVoucherByShop: async (shopId, token) => {
    const endpoint = `/voucher/list-by-shop-id/${shopId}`;
    return await get(endpoint, {}, { Authorization: token });
  },

  postApplyVoucher: async (id, token) => {
    const endpoint = `/voucher/save-voucher/${id}`;
    return await post(endpoint, {}, {}, { Authorization: token }).catch(
      (err) => {
        console.log(err);
        return err.response;
      }
    );
  },
};

export default voucherApi;
