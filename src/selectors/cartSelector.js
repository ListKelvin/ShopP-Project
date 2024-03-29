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
export const selectProduct = createSelector(
  [selectDomain],
  (state) => state.product
);
export const selectItem = createSelector([selectDomain], (state) => state.item);
export const selectCartTotal = createSelector(
  [selectDomain],
  (state) => state.cartTotalAmount
);
export const selectCartTotalBySelected = createSelector(
  [selectDomain],
  (state) => state.cartTotalBySelected
);
