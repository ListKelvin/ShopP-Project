import { injectReducer } from "../store/store";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const initialState = {
  user: {
    customer: null,
    email: "",
    id: null,
    phone: "",
    role: null,
    shop: null,
  },
};

export const name = "user";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state, action) => {
      state.user = initialState.user;
    },
  },
});
injectReducer(name, slice.reducer);
export const { setUser, deleteUser } = slice.actions;

export default slice;
