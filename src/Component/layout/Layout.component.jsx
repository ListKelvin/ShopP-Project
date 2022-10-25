import React from "react";
import AppAppBar from "../NavBar";
import { Container } from "@mui/system";
import { ContainerStyled } from "./styles";
import Home from "../../pages/Home";
import { CssBaseline } from "@mui/material";
import SuggestContainer from "../../pages/Home/Components/CategoryFilter";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <AppAppBar />
      <ContainerStyled>
        <CssBaseline />
        <SuggestContainer />
        <Home />
        <Home />
        <Home />
      </ContainerStyled>
    </>
  );
};

export default LayoutComponent;
