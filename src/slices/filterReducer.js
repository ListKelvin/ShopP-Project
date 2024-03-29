import { injectReducer } from "../store/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../config/config";
import axios from "axios";
export const initialState = {
  filter_products: [],
  all_products: [],
  filterProductsApi: [],
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterProductApi = createAsyncThunk(
  "filter/FilterProductApi",
  async (product) => {
    const endpoint = API_URL + "/product/filter";

    try {
      const result = await axios.post(endpoint, product);

      return result.data.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
);

export const name = "filter";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    loadFilterProductAPi: (state, action) => {
      state.filterProductsApi = action.payload;
    },
    loadFilterProduct: (state, action) => {
      state.filter_products = [...action.payload];
      state.all_products = [...action.payload];
    },
    filterProducts: (state, action) => {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      state.filter_products = tempFilterProduct;
    },
    updateFilterValues: (state, action) => {
      const { name, value } = action.payload;
      state.filters = { ...state.filters, [name]: value };
    },
    clearFilterProducts: (state, action) => {
      state.filterProductsApi = [];
    },
    updateFilterProductByPrice: (state, action) => {
      const arrayOfPrice = action.payload;
      const tmpArrayOfPrice = [...arrayOfPrice];
      state.filter_products = tmpArrayOfPrice;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FilterProductApi.fulfilled, (state, action) => {
      state.filterProductsApi = action.payload;
    });
  },
});
injectReducer(name, slice.reducer);
export const {
  filterProducts,
  loadFilterProduct,
  updateFilterValues,
  clearFilterProducts,
  updateFilterProductByPrice,
  loadFilterProductAPi,
} = slice.actions;

export default slice;
