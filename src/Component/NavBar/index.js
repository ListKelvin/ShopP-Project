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
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { StyledInputBase, Search, SearchIconWrapper } from "./style";
import { GlobalThemeOverride } from "../../theme/theme";
// import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { selectIsNavOpen } from "./slice/selector";
import { actions } from "./slice";
const AppAppBar = () => {
  const pages = [
    { label: "Products", path: "/products" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
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
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: "block",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
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
              anchorEl={isNavOpen}
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
                dispatch(actions.changeIsNavOpen(null));
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
        </Toolbar>
      </AppBar>
    </GlobalThemeOverride>
  );
};

export default AppAppBar;
