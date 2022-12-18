import { useRoutes } from "react-router-dom";
import UserSetting from "../pages/UserSetting";
import ChangePassword from "../Component/MenuSetting/Components/ChangePassword";
import UserProfilePage from "../pages/UserProfile";
const SettingRoute = () => {
  let element = useRoutes([
    {
      element: <UserSetting />,
      children: [
        { index: true, element: <UserProfilePage /> },
        { path: "changePassword", element: <ChangePassword /> },
        { path: "address", element: <div> this Address</div> },
        { path: "purchase", element: <div> this Purchase</div> },
        { path: "bank", element: <div> this Bank & Cards</div> },
        { path: "coins", element: <div> this ShopP & Coins</div> },
        { path: "evaluation", element: <div> this My Evaluation</div> },
        { path: "vouchers", element: <div> this My Vouchers</div> },
        { path: "notifications", element: <div> this Notifications</div> },
      ],
    },
  ]);
  return element;
};

export default SettingRoute;
