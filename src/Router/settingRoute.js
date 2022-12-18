import { useRoutes } from "react-router-dom";
import UserSetting from "../pages/UserSetting";
import ChangePassword from "../Component/MenuSetting/Components/ChangePassword";
import UserProfilePage from "../pages/UserProfile";
const SettingRoute = () => {
  let element = useRoutes([
    {
      element: <UserSetting />,
      children: [
        { path: "changePassword", element: <ChangePassword /> },
        { index: true, element: <UserProfilePage /> },
      ],
    },
  ]);
  return element;
};

export default SettingRoute;
