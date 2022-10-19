import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SignInComponent from "../pages/sign-in/sign-in.component";
import SignUp from "../pages/sign-up/sign-up.component";
import Home from "../pages/Home";
import RegisterInfor from "../pages/registerInfor/RegisterInfor";
const publicRoute = [
  {
    path: "home",
    component: <Home />,
    exact: true,
    restrict: true,
  },
  {
    path: "signIn",
    component: <SignInComponent />,
    exact: true,
    restrict: true,
  },
  {
    path: "register",
    component: <SignUp />,
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
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/" element={<PrivateRoute />}>
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
        <Route exact path="/" element={<PublicRoute />}>
          {publicRoute.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
              restrict={route.restrict}
            />
          ))}
        </Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
