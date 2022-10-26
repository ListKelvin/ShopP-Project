import React from "react";
import AppAppBar from "../NavBar";
import { ContainerStyled } from "./styles";
import { CssBaseline } from "@mui/material";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <AppAppBar />
      <ContainerStyled maxWidth="xl" sx={{ brackground: "#ECECEC" }}>
        <CssBaseline />
        {children}
      </ContainerStyled>
    </>
  );
};

export default LayoutComponent;
