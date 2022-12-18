import {
  IconStyle,
  TypoTitle,
  StyleTable,
  TitleStyle,
  StyleOfTr,
  ButtonDiv,
  CenterIcon,
  LogTr,
  LinkStyle,
  WrapperLinked,
  WrapperSettings,
} from "../style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogOutButton from "./LogOutButton";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarRateIcon from "@mui/icons-material/StarRate";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import React from "react";

const DashBoard = () => {
  return (
    <>
      <WrapperSettings>
        <TitleStyle>SHOPP</TitleStyle>
        <WrapperLinked>
          <LinkStyle to="">
            <AccountCircleIcon />
            Profile
          </LinkStyle>
          <LinkStyle to="address">
            <HomeIcon />
            Address
          </LinkStyle>
          <LinkStyle to="purchase">
            <ShoppingCartIcon />
            Purchase
          </LinkStyle>
          <LinkStyle to="bank">
            <CreditCardIcon /> Bank & Cards
          </LinkStyle>
          <LinkStyle to="coins">
            <AttachMoneyIcon />
            My ShopP Coins
          </LinkStyle>
          <LinkStyle to="evaluation">
            <StarRateIcon /> My Evaluation
          </LinkStyle>
          <LinkStyle to="vouchers">
            <LoyaltyIcon /> My Vouchers
          </LinkStyle>
          <LinkStyle to="changePassword">
            <LockIcon />
            Change Password
          </LinkStyle>
          <LinkStyle to="notifications">
            <NotificationsActiveIcon /> Notifications
          </LinkStyle>
        </WrapperLinked>
        <LogOutButton />
      </WrapperSettings>
    </>
  );
};

// <StyleTable>
// <thead>
//   <tr style={{ height: "50px" }}>
//     <th colspan="2">
//       <TitleStyle>SHOPP</TitleStyle>
//     </th>
//   </tr>
// </thead>
// <tbody>
//   <StyleOfTr>
//     <LinkStyle to="ChangePassword">
//       <CenterIcon>
//         <AccountCircleIcon />
//       </CenterIcon>
//       <TypoTitle>Profile</TypoTitle>
//     </LinkStyle>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <HomeIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>Address</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <ShoppingCartIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>Purchase</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <CreditCardIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>Bank & Cards</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <AttachMoneyIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>My ShopP Coins</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <StarRateIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>My Evaluation</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <LoyaltyIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>My Vouchers</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <LockIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>Change Password</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <StyleOfTr>
//     <IconStyle>
//       <CenterIcon>
//         <NotificationsActiveIcon />
//       </CenterIcon>
//     </IconStyle>
//     <td>
//       <TypoTitle>Notification</TypoTitle>
//     </td>
//   </StyleOfTr>
//   <LogTr>
//     <td colSpan="2"></td>
//   </LogTr>
// </tbody>
// </StyleTable>
export default DashBoard;
