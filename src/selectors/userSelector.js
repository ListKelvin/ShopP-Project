import slice from "../slices/user";

import { createSelector } from "@reduxjs/toolkit";
const { initialState, name } = slice;

const selectDomain = (state) => state[name] || initialState;

export const selectUser = createSelector([selectDomain], (state) => state.user);
