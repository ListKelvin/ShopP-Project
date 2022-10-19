import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "./component/AppBar";
import Toolbar from "./component/ToolBar";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import IconButton from "@mui/material/IconButton";
import { BaseButton, OutlinedButton } from "../Button.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledInputBase,
  Search,
  SearchIconWrapper,
  RightToolbar,
} from "./style";
import { GlobalThemeOverride } from "../../theme/theme";
// import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { selectIsNavOpen } from "./slice/selector";
import { actions } from "./slice";
const AppAppBar = () => {
  const pages = [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist" },
    { label: "Product", path: "/product" },
    { label: "Support", path: "/support" },
    { label: "Contact", path: "/contact" },
  ];
  const dispatch = useDispatch();
  const isNavOpen = useSelector(selectIsNavOpen);
  return (
    <GlobalThemeOverride>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "primary",
        }}
      >
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
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                sx={{ color: "white" }}
              >
                <Badge badgeContent={2} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "dark",
                background: "white",
                fontSize: "10px",
                lineHegiht: "16px",
                maxWidth: 200,
                width: 200,
                padding: "8px 12px",
              }}
              endIcon={<StorefrontIcon sx={{ color: "" }} />}
            >
              Shop Channel
            </Button>
          </RightToolbar>
        </Toolbar>
        <Divider sx={{ backgroundColor: "white" }} />
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none", md: "none", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => {
                dispatch(actions.changeIsNavOpen(e.currentTarget));
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              // anchorEl={isNavOpen}
              anchorOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              open={Boolean(isNavOpen)}
              onClose={() => {
                dispatch(actions.changeIsNavOpen(false));
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", sm: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={page.path}
                  key={page.label}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                width: "230px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <OutlinedButton
                sx={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "2px solid white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "transparent",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
                  },
                }}
              >
                Sign In
              </OutlinedButton>
              <BaseButton
                sx={{ width: "100px", height: "30px", borderRadius: "5px" }}
              >
                Register
              </BaseButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </GlobalThemeOverride>
  );
};

export default AppAppBar;
