import AddCircleIcon from "@mui/icons-material/AddCircle";
import StoreIcon from "@mui/icons-material/Store";
import WarningIcon from "@mui/icons-material/Warning";
import {
  FuncContainer,
  FuncDiv,
  IconStyle,
  TitleStyle,
} from "./styleComponents";

const ProductsList = [
  {
    id: 1,
    iconList: <StoreIcon />,
    func: "All Products",
    linkTo: "shop_products",
  },
  {
    id: 2,
    iconList: <AddCircleIcon />,
    func: "Add Products",
    linkTo: "addProduct",
  },
  { id: 3, iconList: <WarningIcon />, func: "Infringed Products", linkTo: "" },
];

const Products = () => {
  return (
    <>
      <TitleStyle>Products</TitleStyle>
      {ProductsList.map(({ id, iconList, func, linkTo }) => {
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

export default Products;
