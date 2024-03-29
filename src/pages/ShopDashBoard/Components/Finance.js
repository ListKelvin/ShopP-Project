import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import {
  FuncContainer,
  FuncDiv,
  IconStyle,
  TitleStyle,
} from "./styleComponents";

const FinanceList = [
  { id: 1, iconList: <StoreIcon />, func: "Turnover", linkTo: "" },
  { id: 2, iconList: <CreditCardIcon />, func: "Bank / Card", linkTo: "" },
];

const Finance = () => {
  return (
    <>
      <TitleStyle>Finance</TitleStyle>
      {FinanceList.map(({ id, iconList, func, linkTo }) => {
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

export default Finance;
