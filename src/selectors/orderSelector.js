import slice from "../slices/orderReducer";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectOrderItems = createSelector(
  [selectDomain],
  (state) => state.orderItems
);
