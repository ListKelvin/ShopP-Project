import { initialState, name } from ".";

import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state) => state[name] || initialState;

export const selectIsNavOpen = createSelector(
  [selectDomain],
  (state) => state.isNavOpen
);
