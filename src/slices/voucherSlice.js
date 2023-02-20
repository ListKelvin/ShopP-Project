import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { injectReducer } from "../store/store";
import { STATUS } from "../utils/status";
import voucherApi from "../utils/productApiComponent/voucherApi";
import LocalStorageUtils from "../utils/LocalStorageUtils";
const initialState = {
  voucherFreeShip: {},
  voucherDiscount: {},
  voucherSelected: [],
  applyVoucher: [],
  shopVoucher: [],
  shopPVoucher: [],
  freeShipVoucher: [],
  discountVoucher: [],
  shopVoucherOfUser: [],
  shopPVoucherStatus: STATUS.IDLE,
  discountStatus: STATUS.IDLE,
  freeShipStatus: STATUS.IDLE,
  shopVoucherStatus: STATUS.IDLE,
  shopVoucherOfUserStatus: STATUS.IDLE,
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
export const fetchShopVoucherOfUser = createAsyncThunk(
  "voucher/fetchShopVoucherOfUser",
  async () => {
    // thunkApi.dispatch(setDiscountStatus(STATUS.LOADING));
    try {
      const token = LocalStorageUtils.getToken();
      const res = await voucherApi.getShopVoucherOfUser(token);
      const data = await res.data.data;

      return data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }
);
export const fetchShopVoucher = createAsyncThunk(
  "voucher/fetchShopVoucher",
  async (shopId) => {
    // thunkApi.dispatch(setDiscountStatus(STATUS.LOADING));
    try {
      const token = LocalStorageUtils.getToken();
      const res = await voucherApi.getVoucherByShop(shopId, token);
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
export const fetchShopPVoucher = createAsyncThunk(
  "voucher/fetchShopPVoucher",
  async () => {
    // thunkApi.dispatch(setDiscountStatus(STATUS.LOADING));
    try {
      const token = LocalStorageUtils.getToken();
      const res = await voucherApi.getAllVoucherOfShopP(token);
      const data = await res.data.data;

      return data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }
);
// export const applyVoucher = (voucherCode) => {
//   if (voucherCode === "DISCOUNT10") {
//     setDiscountedPrice(props.price - props.price * 0.1);
//   }
// };

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setVoucherOfShop: (state, action) => {
      state.voucherSelected = action.payload;
    },
    setApplyVoucher: (state, action) => {
      state.applyVoucher = action.payload;
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
    setVoucherDiscount: (state, action) => {
      state.voucherDiscount = action.payload;
    },
    setVoucherFreeShip: (state, action) => {
      state.voucherFreeShip = action.payload;
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
      })
      .addCase(fetchShopVoucher.pending, (state, action) => {
        state.shopVoucherStatus = STATUS.LOADING;
      })
      .addCase(fetchShopVoucher.fulfilled, (state, action) => {
        state.shopVoucherStatus = STATUS.IDLE;
        state.shopVoucher = action.payload;
      })
      .addCase(fetchShopVoucher.rejected, (state, action) => {
        state.shopVoucherStatus = STATUS.ERROR;
      })
      .addCase(fetchShopVoucherOfUser.pending, (state, action) => {
        state.shopVoucherOfUserStatus = STATUS.LOADING;
      })
      .addCase(fetchShopVoucherOfUser.fulfilled, (state, action) => {
        state.shopVoucherOfUserStatus = STATUS.IDLE;
        state.shopVoucherOfUser = action.payload;
      })
      .addCase(fetchShopVoucherOfUser.rejected, (state, action) => {
        state.shopVoucherOfUserStatus = STATUS.ERROR;
      })
      .addCase(fetchShopPVoucher.pending, (state, action) => {
        state.shopPVoucherStatus = STATUS.LOADING;
      })
      .addCase(fetchShopPVoucher.fulfilled, (state, action) => {
        state.shopPVoucherStatus = STATUS.IDLE;
        state.shopPVoucher = action.payload;
      })
      .addCase(fetchShopPVoucher.rejected, (state, action) => {
        state.shopPVoucherStatus = STATUS.ERROR;
      });
  },
});

injectReducer(name, slice.reducer);
export const {
  setApplyVoucher,
  setFreeShipVoucher,
  setDiscountVoucher,
  setDiscountStatus,
  setIsSelected,
  setVoucherDiscount,
  setVoucherFreeShip,
  setVoucherOfShop,
} = slice.actions;

export default slice;
