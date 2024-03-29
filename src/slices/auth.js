import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import { injectReducer } from "../store/store";
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";
import { toastWarning } from "../Component/ToastNotification";
import LocalStorageUtils from "../utils/LocalStorageUtils";
import { readCookie } from "../utils/cookie.utils";
const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async (formdata, thunkAPI) => {
    try {
      const response = await AuthService.register(formdata);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.response.data.message ||
        error.toString();

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formdata, thunkAPI) => {
    try {
      const data = await AuthService.login(formdata);
      console.log("line 38:", data);

      LocalStorageUtils.setItem("token", data.data.token);
      return { user: data.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.message ||
        error.message ||
        error.toString();
      console.log("line 49", error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const name = "auth";
const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

injectReducer(name, authSlice.reducer);
const { reducer } = authSlice;
export default reducer;
