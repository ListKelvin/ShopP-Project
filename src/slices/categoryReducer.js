import { injectReducer } from "../store/store";
import axios from "axios";
import { API_URL } from "../config/config";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
export const initialState = {
  isLoading: false,
  isError: false,
  categories: [],
};

const urlGetCategories = API_URL + "/category/list-all";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await axios.get(urlGetCategories);
      const data = await res.data;

      return data;
    } catch (error) {
      return error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
injectReducer(name, slice.reducer);
export const { fetchApiData, fetchApiError, setLoading } = slice.actions;

export default slice;
