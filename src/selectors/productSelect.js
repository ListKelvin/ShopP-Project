import slice from "../slices/productReducer";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectProducts = createSelector(
  [selectDomain],
  (state) => state.products
);
export const selectIsLoading = createSelector(
  [selectDomain],
  (state) => state.isLoading
);
export const selectIsError = createSelector(
  [selectDomain],
  (state) => state.isError
);
