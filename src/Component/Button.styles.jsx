import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)({
  backgroundColor: "#BA4E3A",
  borderRadius: "50px",
  width: "320px",
  height: "52px",
  color: "#FFFFFF",
  padding: "6px 12px",
  lineHeight: 1.5,
  "&:hover": {
    backgroundColor: "#E35F46",
    boxShadow: "none",
  },
});

export const OutlinedButton = styled(Button)({
  borderRadius: "50px",
  width: "320px",
  height: "52px",
  padding: "6px 12px",
  marginTop: "15px",
  backgroundColor: "transparent",
  // borderColor: "#BA4E3A",
  border: "2px solid #BA4E3A ",
  lineHeight: "1.5",
  color: "#BA4E3A",
  transition: "all 0.5s",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  "&:hover": {
    borderColor: "#E35F46",
    backgroundColor: "#BA4E3A",
    color: "#FFFFFF",
  },
});
