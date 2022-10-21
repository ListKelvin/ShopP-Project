import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PublicRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const isAuth = isLoggedIn;
  if (process.env.NODE_ENV === "development") {
    return <Outlet />;
  } else {
    return isAuth ? <Navigate to="/signin" /> : <Outlet />;
  }
};

export default PublicRoute;
