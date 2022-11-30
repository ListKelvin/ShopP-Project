import {IconStyle, TypoTitle, StyleTable, TitleStyle, StyleOfTr, ButtonDiv, CenterIcon} from './style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogOutButton from "./Components/LogOutButton";
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarRateIcon from '@mui/icons-material/StarRate';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import React from "react";

const MenuSetting = () => {
  return (
    <>
    <StyleTable>
      <thead>
        <tr style = {{height: "50px"}}>
          <th colspan= "2"><TitleStyle>SHOPP</TitleStyle></th>
        </tr>
      </thead>
      <tbody>
        <StyleOfTr style = {{backgroundColor: "rgba(85, 171, 171, 0.5)"}}>
          <IconStyle><CenterIcon><AccountCircleIcon/></CenterIcon></IconStyle>
          <td><TypoTitle style = {{fontWeight: "bold"}}>Profile</TypoTitle></td>
          </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><HomeIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>Address</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><ShoppingCartIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>Purchase</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><CreditCardIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>Bank & Cards</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><AttachMoneyIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>My ShopP Coins</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><StarRateIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>My Evaluation</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><LoyaltyIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>My Vouchers</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><LockIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>Change Password</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr>
          <IconStyle><CenterIcon><NotificationsActiveIcon/></CenterIcon></IconStyle>
          <td><TypoTitle>Notification</TypoTitle></td>
        </StyleOfTr>
        <StyleOfTr style = {{height: "40px"}}>
          <td colspan = "2" ><ButtonDiv><LogOutButton/></ButtonDiv></td>
        </StyleOfTr>
      </tbody>
    </StyleTable>
    </>
  );
};

export default MenuSetting;
