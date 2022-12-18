import { get, post, put } from "../ApiCaller";

const productApi = {
  getAllProduct: async () => {
    const endpoint = "/product/list-all";
    return await get(endpoint, {}, {})
      .then((res) => {
        if (res.data.code !== 200) console.log(res.data.message);
        return res;
      })
      .catch((err) => console.log(err.message));
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
};

export default productApi;
