import slice from "../slices/voucherSlice";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectDiscountVoucher = createSelector(
  [selectDomain],
  (state) => state.discountVoucher
);
export const selectFreeShipVoucher = createSelector(
  [selectDomain],
  (state) => state.freeShipVoucher
);
export const selectDiscountStatus = createSelector(
  [selectDomain],
  (state) => state.discountStatus
);

export const selectFreeShipStatus = createSelector(
  [selectDomain],
  (state) => state.freeShipStatus
);
