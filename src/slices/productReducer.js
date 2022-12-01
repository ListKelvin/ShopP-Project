import { injectReducer } from "../store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../config/config";
import axios from "axios";
export const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
export const PRODUCT_URL = API_URL + "/product/list-all";
export const name = "product";
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get(PRODUCT_URL);
    return response.data;
  }
);
export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (idProduct) => {
    const SINGLEPRODUCT_URL = API_URL + `/product/get-one-by-id/${idProduct}`;

    const response = await axios.get(SINGLEPRODUCT_URL);
    return response.data;
  }
);
export const slice = createSlice({
  name,
  initialState,
  reducers: {
    productsReducer: (state, action) => {
      switch (action.type) {
        case "SET_LOADING":
          return {
            ...state,
            isLoading: true,
          };

        case "SET_API_DATA":
          // const featureData = action.payload.filter((curElem) => {
          //   return curElem.featured === true;
          // });

          return {
            ...state,
            isLoading: false,
            products: action.payload,
            // featureProducts: featureData,
          };

        case "API_ERROR":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };

        case "SET_SINGLE_LOADING":
          return {
            ...state,
            isSingleLoading: true,
          };

        case "SET_SINGLE_PRODUCT":
          return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
          };

        case "SET_SINGLE_ERROR":
          return {
            ...state,
            isSingleLoading: false,
            isError: true,
          };

        default:
          return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.isSingleLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.isSingleLoading = false;
        state.singleProduct = action.payload;
      });
  },
});
injectReducer(name, slice.reducer);
export const { productsReducer } = slice.actions;

export default slice;
