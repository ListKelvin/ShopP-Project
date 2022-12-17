import { useRoutes } from "react-router-dom";
import UserSetting from "../pages/UserSetting";
import ChangePassword from "../Component/MenuSetting/Components/ChangePassword";
const SettingRoute = () => {
  let element = useRoutes([
    {
      element: <UserSetting />,
      children: [
        { index: true, path: "changePassword", element: <ChangePassword /> },
      ],
    },
  ]);
  return element;
};

export default SettingRoute;
