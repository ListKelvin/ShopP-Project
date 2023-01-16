import Shop from "./Components/Shop";
import Flexbox from "../../Component/Flexbox";
import {
  DashBoardContainer,
  DashBoardTop,
  TitleStyle,
  ShopStyle,
} from "./style";
import Orders from "./Components/Orders";
import Products from "./Components/Products";
import Finance from "./Components/Finance";
import Setting from "./Components/Setting";
import { ContainerStyled } from "../../Component/layout/styles";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

const ShopDashBoard = () => {
  return (
    <>
      <Flexbox
        width="100%"
        justifyContent="space-between"
        style={{ marginTop: "100px", padding: "20px" }}
      >
        <div>
          <DashBoardContainer>
            <Shop />
            <Orders />
            <Products />
            <Finance />
            <Setting />
          </DashBoardContainer>
        </div>
        <Flexbox flexDirection="column" width="100%">
          <DashBoardTop>
            <div>
              <TitleStyle>All Orders</TitleStyle>
              <Flexbox>
                <ShopStyle>Shop</ShopStyle>
                <div style={{ minWidth: "fit-content" }}>/ All Orders</div>
              </Flexbox>
            </div>
          </DashBoardTop>
          <Container maxWidth={false}>
            <Outlet />
          </Container>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default ShopDashBoard;
