import { injectReducer } from "../../../store/store";

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isNavOpen: null,
};

export const name = "navBar";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    changeIsNavOpen: (state, action) => {
      state.isNavOpen = action.payload;
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;

// const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
