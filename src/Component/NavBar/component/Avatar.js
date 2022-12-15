import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AvaUnknown from "../../../assets/Avaunknow/istockphoto-1223671392-612x612.jpg";
import Stack from "@mui/material/Stack";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import React from "react";
import Typography from "@mui/material/Typography";
import { OutlinedButton, BaseButton } from "../../Button.styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { logout } from "../../../slices/auth";
import { UserMenu, UserItem } from "./Styled.components";
const settings = [
  { route: "Profile", link: "userProfile" },
  { route: "Account", link: "Account" },
  { route: "Dashboard", link: "Dashboard" },
];
const AvatarUser = () => {
  const dispatch = useDispatch();
  const token = LocalStorageUtils.getJWTUser();
  const [open, setOpen] = React.useState(false);
  console.log(token);
  const handleUserMenuClose = () => {
    setOpen(false);
  };

  const handleUserMenuOpen = () => {
    setOpen(true);
  };
  const ToggleUserMenu = () => {
    setOpen(!open);
  };
  return (
    <ClickAwayListener onClickAway={handleUserMenuClose}>
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
            sx={{
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={ToggleUserMenu}
          >
            <Avatar
              alt="Unknown user"
              src={AvaUnknown}
              sx={{ width: 32, height: 32 }}
            />
            <Typography sx={{ color: "dark" }}>
              {token.email ? token.email : "user"}
            </Typography>

            <UserMenu open={open}>
              {settings.map((setting, id) => (
                <UserItem key={id} to={setting.link}>
                  <Typography textAlign="center">{setting.route}</Typography>
                </UserItem>
              ))}
              <UserItem
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <Typography color="red" textAlign="center">
                  LogOut
                </Typography>
              </UserItem>
            </UserMenu>
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
    </ClickAwayListener>
  );
  //   <Menu
  //   sx={{ mt: "45px" }}
  //   id="menu-appbar"
  //   anchorEl={open}
  //   anchorOrigin={{
  //     vertical: "top",
  //     horizontal: "right",
  //   }}
  //   keepMounted
  //   transformOrigin={{
  //     vertical: "top",
  //     horizontal: "right",
  //   }}
  //   open={Boolean(open)}
  //   onClose={handleUserMenuClose}
  // >
  //   {settings.map((setting) => (
  //     <MenuItem key={setting} onClick={handleUserMenuClose}>
  //       <Typography textAlign="center">{setting}</Typography>
  //     </MenuItem>
  //   ))}
  // </Menu>
};

export default AvatarUser;
