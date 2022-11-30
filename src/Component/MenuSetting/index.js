import React from "react";
import ChangePassword from "./Components/ChangePassword";
import DashBoard from './Components/DashBoard';

const MenuSetting = () => {
  return (
    <div style = {{display: "flex", justifyContent: "space-around"}}>
    <DashBoard/>
    <ChangePassword/>
    </div>
  );
};

export default MenuSetting;
