import { injectReducer } from "../store/store";
import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const initialState = {
  orderItems: [],
  orderQuantity: 0,
  orderTotalAmount: 0,
};

export const name = "order";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orderItems = [...action.payload];
    },
    getTotalOrder(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { amount, cartQuantity } = cartItem;
          const itemTotal = amount * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.orderQuantity = quantity;
      state.orderTotalAmount = total;
    },
  },
});

injectReducer(name, slice.reducer);
export const { addToOrder, getTotals } = slice.actions;

export default slice;
