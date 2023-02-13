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

export const selectShopVoucher = createSelector(
  [selectDomain],
  (state) => state.shopVoucher
);

export const selectVoucherDiscount = createSelector(
  [selectDomain],
  (state) => state.voucherDiscount
);
export const selectVoucherFreeShip = createSelector(
  [selectDomain],
  (state) => state.voucherFreeShip
);

export const selectApplyVoucher = createSelector(
  [selectDomain],
  (state) => state.applyVoucher
);
export const selectShopVoucherOfUser = createSelector(
  [selectDomain],
  (state) => state.shopVoucherOfUser
);
