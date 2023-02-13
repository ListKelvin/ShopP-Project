import StoreIcon from "@mui/icons-material/Store";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {
  FuncContainer,
  FuncDiv,
  IconStyle,
  TitleStyle,
} from "./styleComponents";

const OrdersList = [
  { id: 1, iconList: <StoreIcon />, func: "All Orders", linkTo: "" },
  {
    id: 2,
    iconList: <KeyboardReturnIcon />,
    func: "Return / Refund",
    linkTo: "",
  },
];

const Orders = () => {
  return (
    <>
      <TitleStyle>Orders</TitleStyle>
      {OrdersList.map(({ id, iconList, func, linkTo }) => {
        return (
          <FuncDiv to={linkTo} key={id}>
            <FuncContainer justifyContent="flex-start" gap="5px">
              <IconStyle>{iconList}</IconStyle>
              {func}
            </FuncContainer>
          </FuncDiv>
        );
      })}
    </>
  );
};

export default Orders;
