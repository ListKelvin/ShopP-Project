import React from "react";
import AppAppBar from "../NavBar";
import { ContainerStyled } from "./styles";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <AppAppBar />
      <ContainerStyled maxWidth="xl" sx={{ brackground: "#ECECEC" }}>
        <CssBaseline />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default LayoutComponent;
