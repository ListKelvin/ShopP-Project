import React from "react";
import Toolbar from "../component/ToolBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { OutlinedButton, BaseButton } from "../../Button.styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AvaUnknown from "../../../assets/Avaunknow/istockphoto-1223671392-612x612.jpg";
import Stack from "@mui/material/Stack";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
const NavBarUnder = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const token = LocalStorageUtils.getUser();
  // const { email } = token;

  return (
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
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
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
            display: { xs: "none", md: "flex", sm: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {token ? (
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar
                alt="Unknown user"
                src={AvaUnknown}
                sx={{ width: 32, height: 32 }}
              />
              <Typography sx={{ color: "dark" }}>
                {token.email ? token.email : "user "}
              </Typography>
            </Stack>
          ) : (
            <>
              {" "}
              <OutlinedButton
                component={Link}
                to="/signIn"
                sx={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "2px solid white",
                  color: "white",
                  marginTop: "0px",
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
                component={Link}
                to="/register"
                sx={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "5px",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "18px",
                }}
              >
                Register
              </BaseButton>
            </>
          )}
        </Box>
      </Box>
    </Toolbar>
  );
};

export default NavBarUnder;
