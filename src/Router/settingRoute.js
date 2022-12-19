import { useRoutes } from "react-router-dom";
import UserSetting from "../pages/UserSetting";
import ChangePassword from "../Component/MenuSetting/Components/ChangePassword";
import UserProfilePage from "../pages/UserProfile";
import UserAddressPage from "../pages/UserAddress/UserAddress";
import UserPurchase from "../pages/UserPurchase";
import UserVouchers from "../pages/UserVouchers";
import UsrEvaluation from "../pages/UserEvaluation";
const SettingRoute = () => {
  let element = useRoutes([
    {
      element: <UserSetting />,
      children: [
        { index: true, element: <UserProfilePage /> },
        { path: "changePassword", element: <ChangePassword /> },
        { path: "address", element: <UserAddressPage /> },
        { path: "purchase", element: <UserPurchase /> },
        { path: "bank", element: <div> this Bank & Cards</div> },
        { path: "coins", element: <div> this ShopP & Coins</div> },
        { path: "evaluation", element: <UsrEvaluation /> },
        { path: "vouchers", element: <UserVouchers /> },
        { path: "notifications", element: <div> this Notifications</div> },
      ],
    },
  ]);
  return element;
};

export default SettingRoute;
