import { injectReducer } from "../../../store/store";

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isNavOpen: null,
};

export const name = "navBar";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    changeIsNavOpen: (state, action) => {
      console.log(action.payload);
      state.isNavOpen = action.payload;
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
