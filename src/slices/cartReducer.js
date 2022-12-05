import { injectReducer } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isCartOpen: false,
  cartItems: [],
};
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, amountInCart: cartItem.amountInCart + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, amountInCart: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.amountInCart === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, amountInCart: cartItem.amountInCart - 1 }
      : cartItem
  );
};

export const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
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
export const { setCartOpen, setCartItems } = slice.actions;

export default slice;
