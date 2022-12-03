import React from "react";
import AppAppBar from "../NavBar";
import { ContainerStyled } from "./styles";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterHomePage from "../FooterComponents.js/FooterHomePage";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <AppAppBar />
      <ContainerStyled maxWidth={false}>
        <CssBaseline />
        <Outlet />
      </ContainerStyled>
      <FooterHomePage />
    </>
  );
};

export default LayoutComponent;
