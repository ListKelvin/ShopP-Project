import Flexbox from "../../../Component/Flexbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CategoryIcon from "@mui/icons-material/Category";
import StarIcon from "@mui/icons-material/Star";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ReportIcon from "@mui/icons-material/Report";
import {
  FuncContainer,
  FuncDiv,
  IconStyle,
  TitleStyle,
} from "./styleComponents";

const ShopList = [
  {
    id: 1,
    iconList: <StoreIcon />,
    func: "Shop's Profile",
    linkTo: "shop_profile",
  },
  { id: 2, iconList: <HomeIcon />, func: "Address", linkTo: "" },
  { id: 3, iconList: <AutoAwesomeIcon />, func: "Shop Decoration", linkTo: "" },
  { id: 4, iconList: <CategoryIcon />, func: "Shop Categories", linkTo: "" },
  { id: 5, iconList: <LocalShippingIcon />, func: "Shop Shipping", linkTo: "" },
  { id: 6, iconList: <StarIcon />, func: "Shop’s Evaluation", linkTo: "" },
  {
    id: 7,
    iconList: <AutoGraphIcon />,
    func: "Seller Performance",
    linkTo: "",
  },
  { id: 8, iconList: <ReportIcon />, func: "My Report", linkTo: "" },
];

const Shop = () => {
  return (
    <>
      <TitleStyle>Shop</TitleStyle>
      {ShopList.map(({ id, iconList, func, linkTo }) => {
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

export default Shop;
