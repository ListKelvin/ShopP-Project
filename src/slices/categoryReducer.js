import { injectReducer } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  isLoading: false,
  isError: false,
  categories: [],

  //   isSingleLoading: false,
};
export const name = "category";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    fetchApiData: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    fetchApiError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});
injectReducer(name, slice.reducer);
export const { fetchApiData, fetchApiError, setLoading } = slice.actions;

export default slice;
