import slice from "../slices/filterReducer";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectFilterProducts = createSelector(
  [selectDomain],
  (state) => state.filter_products
);
export const selectAllProducts = createSelector(
  [selectDomain],
  (state) => state.all_products
);
export const selectFilters = createSelector(
  [selectDomain],
  (state) => state.filters
);
export const selectFilterProductsApi = createSelector(
  [selectDomain],
  (state) => state.filterProductsApi
);
