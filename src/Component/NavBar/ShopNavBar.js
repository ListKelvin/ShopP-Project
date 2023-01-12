import * as React from "react";
import AppBar from "./component/AppBar";
import Divider from "@mui/material/Divider";
import NavBarUnder from "./component/navBarUnder";
import NavBarAbove from "./component/navBarAbove";
import { GlobalThemeOverride } from "../../theme/theme";
const NavBarShop = () => {
  return (
    <GlobalThemeOverride>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "primary",
        }}
      >
        <NavBarAbove />
      </AppBar>
    </GlobalThemeOverride>
  );
};

export default NavBarShop;
