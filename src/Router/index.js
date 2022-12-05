import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MenuSetting from "../Component/MenuSetting";
import ProductFilter from "../Component/productFillter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SignInComponent from "../pages/sign-in/sign-in.component";
import SignUp from "../pages/sign-up/sign-up.component";
import Home from "../pages/Home";
import RegisterInfor from "../pages/registerInfor/RegisterInfor";
import LayoutComponent from "../Component/layout/Layout.component";
import Wishlist from "../pages/Wislist";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/productPage";
import UserAddressPage from "../pages/UserAddress/UserAddress";
import UserProfilePage from "../pages/UserProfile";
import ShopRegister from "../pages/ShopRegister/ShopRegister";
import ScrollToTop from "../utils/ScrollToTop";
const publicRoute = [
  {
    index: true,
    path: "home",
    component: <Home />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "wishlist",
    component: <Wishlist />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "cartPage",
    component: <CartPage />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "productpage/:id",
    component: <ProductDetails />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "menusetting",
    component: <MenuSetting />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "productfilter",
    component: <ProductFilter />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "userProfile",
    component: <UserProfilePage />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "userAddress",
    component: <UserAddressPage />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "shopRegister",
    component: <ShopRegister />,
    exact: true,
    restrict: true,
  },
  {
    path: "info",
    component: <RegisterInfor />,
    exact: true,
    restrict: true,
  },
];

const privateRoute = [
  {
    path: "private",
    component: <Home />,
    exact: true,
    restrict: true,
  },
];

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route exact element={<PrivateRoute />}>
          {privateRoute.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
              restrict={route.restrict}
            />
          ))}
        </Route>
        <Route exact element={<PublicRoute />}>
          <Route exact element={<LayoutComponent />}>
            {publicRoute.map((route) => {
              return (
                <Route
                  index={route.index}
                  key={route.path}
                  path={route.path}
                  element={route.component}
                  exact={route.exact}
                  restrict={route.restrict}
                />
              );
            })}
          </Route>
        </Route>
        <Route path="/info" element={<RegisterInfor />} />
        <Route path="/signIn" element={<SignInComponent />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
