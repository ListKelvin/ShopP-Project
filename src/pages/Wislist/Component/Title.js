import React from "react";
import ImgBrand from "../../../assets/Branding/image 163.png";
import { TitleH1, TitleStyle } from "../style";
const Title = () => {
  return (
    <>

    <TitleStyle>
        <img src={ImgBrand} width="136px" height="60px" alt="" />
        <TitleH1>Wishlist</TitleH1>
    </TitleStyle>

    </>
  );
};

export default Title;