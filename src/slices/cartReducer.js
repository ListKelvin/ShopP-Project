import { injectReducer } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isCartOpen: false,
  cartItems: [],
};

export const name = "Cart";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});
injectReducer(name, slice.reducer);
export const { setCartOpen } = slice.actions;

export default slice;
