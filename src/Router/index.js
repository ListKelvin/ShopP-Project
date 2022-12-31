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

import ProductDetails from "../pages/productDetail";
import ProductPage from "../pages/productPage";
import UserAddressPage from "../pages/UserAddress/UserAddress";
import UserProfilePage from "../pages/UserProfile";
import ShopRegister from "../pages/ShopRegister/ShopRegister";
import ScrollToTop from "../utils/ScrollToTop";
import UserSetting from "../pages/UserSetting";
import ChangePassword from "../Component/MenuSetting/Components/ChangePassword";
import SettingRoute from "./settingRoute";
import ShopPage from "../pages/shopPage";
import ShopDashBoard from "../pages/ShopDashBoard";
import ResetPassword from "../pages/ResetPassword";
import CartPageV2 from "../pages/CartPageVer2";
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
    path: "productPage",
    component: <ProductPage />,
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
    path: "Setting/*",
    component: <SettingRoute />,
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
    index: false,
    path: "shopPage/:id",
    component: <ShopPage />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "shopDashBoard",
    component: <ShopDashBoard />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "cart",
    component: <CartPageV2 />,
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
            ></Route>
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
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/signIn" element={<SignInComponent />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
// {route.Children
//   ? route.Children.map((child, id) => {
//       return (
//         <Route
//           index={child.index}
//           path={child.path}
//           element={child.component}
//         />
//       );
//     })
//   : ""}
