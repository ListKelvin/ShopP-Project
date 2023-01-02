import Shop from "./Components/Shop";
import Flexbox from "../../Component/Flexbox";
import { DashBoardContainer, DashBoardTop, TitleStyle, ShopStyle } from "./style";
import Orders from "./Components/Orders";
import Products from "./Components/Products";
import Finance from "./Components/Finance";
import Setting from "./Components/Setting";

const ShopDashBoard = () => {
  return (
    <>
    <Flexbox 
      width="100%"
      justifyContent="space-between"
      >
    <div>
      <DashBoardContainer>
        <Shop/>
        <Orders/>
        <Products/>
        <Finance/>
        <Setting/>
      </DashBoardContainer>
      </div>
      <DashBoardTop>
        <div>
          <TitleStyle>All Orders</TitleStyle>
          <Flexbox>
          <ShopStyle>Shop</ShopStyle>
          <div style={{minWidth: "fit-content"}}>/ All Orders</div>
          </Flexbox>
        </div>
      </DashBoardTop>
    </Flexbox>
    </>
  );
};

export default ShopDashBoard;