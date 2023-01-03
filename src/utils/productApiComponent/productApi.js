import { get, post, put } from "../ApiCaller";

const productApi = {
  getAllProduct: async () => {
    const endpoint = "/product/list-all";
    return await get(endpoint, {}, {}).catch((err) => console.log(err.message));
  },
  getProductByName: async (name) => {
    const endpoint = `/product/search-by-name/${name}`;
    return await get(endpoint, {}, {}).catch((err) => console.log(err.message));
  },
  filterProductByPrice: async (product) => {
    const { minRange, maxRange } = product;
    const endpoint = `/product/filter-by-price/${
      maxRange ? maxRange : 100000
    }/${minRange ? minRange : 1}`;
    return await get(endpoint, {}, {}).catch((err) => console.log(err.message));
  },
  filterProduct: async (product) => {
    const endpoint = `/product/filter`;
    return post(endpoint, product, {}, {}).catch((err) => console.log(err));
  },
  getProductByShopId: async (shopId) => {
    const endpoint = `/product/search-by-shop/${shopId}`;
    return get(endpoint, {}, {}).catch((err) => console.log(err));
  },
  getProductAdditionalInfo: async (productId, token) => {
    const endpoint = `/product-additional-info/product-information/${productId}`;
    return get(endpoint, {}, { Authorization: token }).catch((err) =>
      console.log(err)
    );
  },
};

export default productApi;
