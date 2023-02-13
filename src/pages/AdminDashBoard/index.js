import Flexbox from "../../Component/Flexbox";
import {
  AdminDashBoardContainer,
  IconStyle,
  TitleStyle,
  FuncDiv,
} from "./styled";
import WindowIcon from "@mui/icons-material/Window";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import FlagIcon from "@mui/icons-material/Flag";
import ListIcon from "@mui/icons-material/List";
import EventIcon from "@mui/icons-material/Event";
import PaymentsIcon from "@mui/icons-material/Payments";
import { ContainerStyled } from "../../Component/layout/styles";
import { Outlet } from "react-router-dom";
const List = [
  { id: 1, iconList: <WindowIcon />, title: "Dashboard", linkTo: "" },
  { id: 2, iconList: <GroupIcon />, title: "Customer", linkTo: "" },
  {
    id: 3,
    iconList: <LocalShippingIcon />,
    title: "Delivery Unit",
    linkTo: "",
  },
  { id: 4, iconList: <StoreIcon />, title: "Shop", linkTo: "" },
  { id: 5, iconList: <FlagIcon />, title: "Report", linkTo: "" },
  { id: 6, iconList: <ListIcon />, title: "Category", linkTo: "" },
  { id: 7, iconList: <EventIcon />, title: "Event", linkTo: "" },
  { id: 8, iconList: <PaymentsIcon />, title: "Voucher", linkTo: "" },
];
const AdminDashBoard = () => {
  return (
    <AdminDashBoardContainer>
      {List.map(({ id, iconList, title, linkTo }) => {
        return (
          <FuncDiv key={id}>
            <IconStyle>{iconList}</IconStyle>
            <TitleStyle to={linkTo}>{title}</TitleStyle>
          </FuncDiv>
        );
      })}
    </AdminDashBoardContainer>
  );
};

export default AdminDashBoard;
