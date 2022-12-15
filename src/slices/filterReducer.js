import { injectReducer } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const name = "filter";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    loadFilterProduct: (state, action) => {
      let priceArr = action.payload.map((curElem) => curElem.amount);
      console.log(
        "🚀 ~ file: filterReducer.js ~ line 29 ~ filterReducer ~ priceArr",
        priceArr
      );
      let maxPrice = Math.max(...priceArr);
      console.log(
        "🚀 ~ file: filterReducer.js ~ line 34 ~ filterReducer ~ maxPrice",
        maxPrice
      );
      state.filter_products = [...action.payload];
      state.all_products = [...action.payload];
      state.filters = { ...state.filters, maxPrice, price: maxPrice };
    },
    filterProducts: (state, action) => {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category.name === category
        );
      }

      //   if (company !== "all") {
      //     tempFilterProduct = tempFilterProduct.filter(
      //       (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
      //     );
      //   }

      //   if (color !== "all") {
      //     tempFilterProduct = tempFilterProduct.filter((curElem) =>
      //       curElem.colors.includes(color)
      //     );
      //   }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.amount == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.amount <= price
        );
      }

      state.filter_products = tempFilterProduct;
    },
    updateFilterValues: (state, action) => {
      const { name, value } = action.payload;

      state.filters = { ...state.filters, [name]: value };
    },
  },
});
injectReducer(name, slice.reducer);
export const { filterProducts, loadFilterProduct, updateFilterValues } =
  slice.actions;

export default slice;
