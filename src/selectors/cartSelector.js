import slice from "../slices/cartReducer";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectIsCartOpen = createSelector(
  [selectDomain],
  (state) => state.isCartOpen
);
export const selectCartItems = createSelector(
  [selectDomain],
  (state) => state.cartItems
);
