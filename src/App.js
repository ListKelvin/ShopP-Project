import RouterComponent from "./Router/index";
import { useAutoLogout } from "./utils/UseAutoLogout";
import Toast from "./Component/ToastNotification/index";
import LocalStorageUtils from "./utils/LocalStorageUtils";
function App() {
  const jwt = LocalStorageUtils.getJWTUser();
  useAutoLogout(jwt);
  return (
    <>
      <RouterComponent />
      <Toast />
    </>
  );
}

export default App;
