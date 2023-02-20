import { injectReducer } from "../store/store";
import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import orderApi from "../utils/productApiComponent/orderApi";
import { toast } from "react-toastify";
import { handler } from "../utils/apiHandler";
import { useState, useEffect } from "react";
import { formatPrice } from "../utils/helper";
export const initialState = {
  orderItems: [],
  orderQuantity: 0,
  orderTotalAmount: 0,
  orderCustomerList: [],
};
export const fetchOrderListOfThreeStatus = createAsyncThunk(
  "order/orderCustomerList",
  async () => {
    const res = await orderApi.getOrderCustomer();
    console.log(res.data.data);
  }
);

export const CalculatePriceOfOrder = (ToTalSelectItem, Discount) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    let newPrice = 0;
    if (Discount && ToTalSelectItem >= Discount.maxPriceDiscount) {
      newPrice = ToTalSelectItem - Discount.maxPriceDiscount;
      setState(newPrice);
    } else if (Discount) {
      newPrice = (ToTalSelectItem * (100 - Discount.priceDiscount)) / 100;
      setState(newPrice);
    } else {
      newPrice = ToTalSelectItem;
      setState(newPrice);
    }
  }, [Discount, ToTalSelectItem]);

  return state === 0 ? 0 : state;
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
