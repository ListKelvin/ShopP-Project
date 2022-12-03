import { get } from "./ApiCaller";

export const getAllCategory = () => {
  const url = "/category/list-all";
  return get(url);
};

export const getAllProduct = () => {
  const url = "/product/list-all";
  return get(url);
};
