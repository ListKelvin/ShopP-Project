import { injectReducer } from "../store/store";
import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import orderApi from "../utils/productApiComponent/orderApi";
import { toast } from "react-toastify";
import { handler } from "../utils/apiHandler";
import { useState, useEffect } from "react";
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
// export const getAllOrders = createAsyncThunk(
//   "order/getAllOrders",
//   async (token, thunkApi) => {
//     const orderCustomer = await handler("getOrderCustomer", token);
//     const delivering = await handler("getOrderCustomerDeliver", token);
//     const delivered = await handler("getOrderCustomerHistory", token);
//     const cancelled = await handler("getOrderCustomerCancel", token);
//     if (
//       orderCustomer == null ||
//       delivering == null ||
//       delivered == null ||
//       cancelled == null
//     ) {
//       return thunkApi.rejectWithValue("Phiên đăng nhập hết hạn");
//     }
//     if (
//       orderCustomer instanceof Error ||
//       cancelled instanceof Error ||
//       delivered instanceof Error
//     ) {
//       return thunkApi.rejectWithValue(delivering);
//     }
//     return { orderCustomer, delivering, delivered, cancelled };
//   }
// );
export const CalculatePriceOfOrder = (ToTalSelectItem, Discount) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    let newPrice = 0;
    if (Discount) {
      newPrice = (ToTalSelectItem * (100 - Discount)) / 100;
      setState(newPrice);
    } else {
      newPrice = ToTalSelectItem;
      setState(newPrice);
    }
  }, [Discount, ToTalSelectItem]);
  return state;
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
