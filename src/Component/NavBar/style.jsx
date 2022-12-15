import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";

export const ShopButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffffff",
  color: "dark",
  background: "white",
  fontSize: "10px",
  lineHeight: "16px",
  maxWidth: 200,
  width: 200,
  // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  padding: "8px 12px",
  "&:hover": {
    background: "white",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "50ch",
  },
}));
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "100px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const RightToolbar = styled("div")(() => ({
  maxWidth: 250,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
