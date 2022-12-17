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
      console.log(initialState);
      state.user = initialState;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchCategories.pending, (state, action) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(fetchCategories.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.categories = action.payload;
  //       })
  //       .addCase(fetchCategories.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.isError = true;
  //       });
  //   },
});
injectReducer(name, slice.reducer);
export const { setUser, deleteUser } = slice.actions;

export default slice;
