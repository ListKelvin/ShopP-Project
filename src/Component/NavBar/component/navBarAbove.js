import React from "react";
import Divider from "@mui/material/Divider";
import Toolbar from "../component/ToolBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { selectIsCartOpen } from "../../../selectors/cartSelector";

import StorefrontIcon from "@mui/icons-material/Storefront";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CartIcon from "./CartIcon";

import {
  ShopButton,
  StyledInputBase,
  Search,
  SearchIconWrapper,
  RightToolbar,
} from "../style";

const NavBarAbove = () => {
  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          mr: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "black",
            marginRight: 2,
            marginLeft: 4,
          }}
        ></Box>
        ShopP
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "white" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <RightToolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            sx={{ color: "white", marginRight: "5px" }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
          <Divider
            textAlign="left"
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "white",
              borderWidth: "1px",
              height: "25px",
              alignSelf: "center",
            }}
          />
          <CartIcon />
        </Box>
        <ShopButton
          variant="contained"
          endIcon={<StorefrontIcon sx={{ color: "" }} />}
        >
          Shop Channel
        </ShopButton>
      </RightToolbar>
    </Toolbar>
  );
};

export default NavBarAbove;
