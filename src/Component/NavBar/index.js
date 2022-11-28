import * as React from "react";
import AppBar from "./component/AppBar";
import Divider from "@mui/material/Divider";
import NavBarUnder from "./component/navBarUnder";
import NavBarAbove from "./component/navBarAbove";
import { GlobalThemeOverride } from "../../theme/theme";
const AppAppBar = () => {
  const pages = [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist" },
    { label: "Product", path: "/product" },
    { label: "Support", path: "/support" },
    { label: "Contact", path: "/contact" },
    { label: "cartPage", path: "/cartPage" },
  ];

  return (
    <GlobalThemeOverride>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "primary",
        }}
      >
        <NavBarAbove />
        <Divider sx={{ backgroundColor: "white" }} />
        <NavBarUnder pages={pages} />
      </AppBar>
    </GlobalThemeOverride>
  );
};

export default AppAppBar;
