import React from "react";
import ChangePassword from "./Components/ChangePassword";
import DashBoard from './Components/DashBoard';
import FooterHomePage from "./FooterComponents.js/FooterHomePage";


const MenuSetting = () => {
  return (
    <div style = {{display: "flex", justifyContent: "space-around"}}>
    {/* <DashBoard/>
    <ChangePassword/> */}
    <FooterHomePage/>
    </div>
  );
};

export default MenuSetting;
