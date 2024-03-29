import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductFilter from "../Component/productFillter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SignInComponent from "../pages/sign-in/sign-in.component";
import SignUp from "../pages/sign-up/sign-up.component";
import Home from "../pages/Home";
import RegisterInfor from "../pages/registerInfor/RegisterInfor";
import LayoutComponent from "../Component/layout/Layout.component";
import Wishlist from "../pages/Wislist";
import OrderPage from "../pages/OrderPage";
import ProductDetails from "../pages/productDetail";
import ProductPage from "../pages/productPage";
import UserAddressPage from "../pages/UserAddress/UserAddress";
import UserProfilePage from "../pages/UserProfile";
import ShopRegister from "../pages/ShopRegister/ShopRegister";
import ScrollToTop from "../utils/ScrollToTop";
import SettingRoute from "./settingRoute";
import ShopPage from "../pages/shopPage";
import ResetPassword from "../pages/ResetPassword";
import CartPageV2 from "../pages/CartPageVer2";
import ShopLayout from "../Component/layout/shopLayout";
import AdminLayout from "../Component/layout/adminLayout";
import AddProductPage from "../pages/AddProductPage";
import MainPage from "../pages/AdMainPage";
import ShopProfile from "../pages/ShopProfile";
import ShopProduct from "../pages/ShopProduct";
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
    path: "cart",
    component: <CartPageV2 />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "orders",
    component: <OrderPage />,
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
const shopRoute = [
  {
    index: true,
    path: "shop_profile",
    component: <ShopProfile />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "addProduct",
    component: <AddProductPage />,
    exact: true,
    restrict: true,
  },
  {
    index: false,
    path: "shop_products",
    component: <ShopProduct />,
    exact: true,
    restrict: true,
  },
];
const adminRoute = [
  {
    path: "admin_dashboard",
    component: <MainPage />,
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
        <Route exact path="/shop" element={<Navigate to="shop_profile" />} />
        {/* customer section*/}
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
        {/* user section*/}
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
        {/* Shop section*/}
        <Route exact element={<PublicRoute />}>
          <Route exact path="/shop" element={<ShopLayout />}>
            {shopRoute.map((route) => {
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
        {/* admin section*/}
        <Route exact element={<PublicRoute />}>
          <Route exact element={<AdminLayout />}>
            {adminRoute.map((route) => {
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
// <Route path="/shop_dash_board" element={<ShopLayout />} />

export default RouterComponent;
