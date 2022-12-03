import slice from "../slices/categoryReducer";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectCategories = createSelector(
  [selectDomain],
  (state) => state.categories
);
export const selectIsLoading = createSelector(
  [selectDomain],
  (state) => state.isLoading
);
export const selectIsError = createSelector(
  [selectDomain],
  (state) => state.isError
);
