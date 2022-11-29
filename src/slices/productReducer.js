import { injectReducer } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
export const name = "product";

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
});
injectReducer(name, slice.reducer);
export const { productsReducer } = slice.actions;

export default slice;
