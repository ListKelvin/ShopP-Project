import React from "react";
import ChangePassword from "./Components/ChangePassword";
import DashBoard from "./Components/DashBoard";
import { ChangePasswordDiv } from "./style";

const MenuSetting = () => {
  return (
    <ChangePasswordDiv >
      <DashBoard />
      <ChangePassword />
    </ChangePasswordDiv>
  );
};

export default MenuSetting;
