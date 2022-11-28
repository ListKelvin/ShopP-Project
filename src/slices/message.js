import { createSlice } from "@reduxjs/toolkit";
import { injectReducer } from "../store/store";
const initialState = {};
export const name = "message";
const messageSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { actions } = messageSlice;
injectReducer(name, messageSlice.reducer);

export const { setMessage, clearMessage } = actions;
export default messageSlice;
