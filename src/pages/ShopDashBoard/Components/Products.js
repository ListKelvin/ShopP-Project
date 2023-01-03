
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StoreIcon from '@mui/icons-material/Store';
import WarningIcon from '@mui/icons-material/Warning';
import { FuncContainer, FuncDiv, IconStyle, TitleStyle } from "./styleComponents";

const ProductsList = [
    {id: 1, iconList: <StoreIcon/>, func: "All Products", linkTo: ""},
    {id: 2, iconList: <AddCircleIcon/>, func: "Add Products", linkTo: ""},
    {id: 3, iconList: <WarningIcon/>, func: "Infringed Products", linkTo: ""},
  ];

  const Products = () => {
    return (
      <>
      <TitleStyle>Products</TitleStyle>
      {ProductsList.map(({id, iconList, func, linkTo}) => {
        return (
        <FuncContainer key={id}>
            <IconStyle>{iconList}</IconStyle>
            <FuncDiv to={linkTo}>{func}</FuncDiv>
        </FuncContainer>
          );
          })}
      </>
    );
  };
  
  export default Products;