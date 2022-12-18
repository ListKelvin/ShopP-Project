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

      let maxPrice = Math.max(...priceArr);

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
    clearFilterProducts: (state, action) => {
      state.filter_products = [];
    },
    updateFilterProductByPrice: (state, action) => {
      const arrayOfPrice = action.payload;
      const tmpArrayOfPrice = [...arrayOfPrice];
      state.filter_products = tmpArrayOfPrice;
    },
  },
});
injectReducer(name, slice.reducer);
export const {
  filterProducts,
  loadFilterProduct,
  updateFilterValues,
  clearFilterProducts,
  updateFilterProductByPrice,
} = slice.actions;

export default slice;
