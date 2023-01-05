import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { injectReducer } from "../store/store";
import { STATUS } from "../utils/status";
import voucherApi from "../utils/productApiComponent/voucherApi";
import LocalStorageUtils from "../utils/LocalStorageUtils";
const initialState = {
  voucher: {},
  isSelected: {
    voucherId: "",
    selected: false,
  },
  freeShipVoucher: [],
  discountVoucher: [],
  discountStatus: STATUS.IDLE,
  freeShipStatus: STATUS.IDLE,
};
export const name = "voucher";

export const fetchDiscountVoucher = createAsyncThunk(
  "voucher/fetchDiscountVoucher",
  async () => {
    // thunkApi.dispatch(setDiscountStatus(STATUS.LOADING));
    try {
      const token = LocalStorageUtils.getToken();
      const res = await voucherApi.getDiscountVoucherOfUser(token);
      const data = await res.data.data;
      return data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }
);
export const fetchFreeShipVoucher = createAsyncThunk(
  "voucher/fetchFreeShipVoucher",
  async () => {
    // thunkApi.dispatch(setDiscountStatus(STATUS.LOADING));
    try {
      const token = LocalStorageUtils.getToken();
      const res = await voucherApi.getFreeShipVoucherOfUser(token);
      const data = await res.data.data;

      return data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }
);
const slice = createSlice({
  name,
  initialState,
  reducers: {
    setVoucher: (state, action) => {
      state.voucher = action.payload;
    },
    setFreeShipVoucher: (state, action) => {
      state.voucher = action.payload;
    },
    setDiscountVoucher: (state, action) => {
      state.voucher = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setDiscountStatus: (state, action) => {
      state.discountStatus = action.payload;
    },
    setIsSelected: (state, action) => {
      state.isSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscountVoucher.pending, (state, action) => {
        state.discountStatus = STATUS.LOADING;
      })
      .addCase(fetchDiscountVoucher.fulfilled, (state, action) => {
        state.discountStatus = STATUS.IDLE;
        state.discountVoucher = action.payload;
      })
      .addCase(fetchDiscountVoucher.rejected, (state, action) => {
        state.discountStatus = STATUS.ERROR;
      })
      .addCase(fetchFreeShipVoucher.pending, (state, action) => {
        state.freeShipStatus = STATUS.LOADING;
      })
      .addCase(fetchFreeShipVoucher.fulfilled, (state, action) => {
        state.freeShipStatus = STATUS.IDLE;
        state.freeShipVoucher = action.payload;
      })
      .addCase(fetchFreeShipVoucher.rejected, (state, action) => {
        state.freeShipStatus = STATUS.ERROR;
      });
  },
});

injectReducer(name, slice.reducer);
export const {
  setVoucher,
  setFreeShipVoucher,
  setDiscountVoucher,
  setDiscountStatus,
  setIsSelected,
} = slice.actions;

export default slice;
