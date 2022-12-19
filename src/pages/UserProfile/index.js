import { useState, useEffect } from "react";
import { UserProfileDiv, Title } from "./styles";
import GeneralInfor from "./Components/GeneralInfor";
import AvatarBox from "./Components/AvatarBox";
import { selectUser } from "../../selectors/userSelector";
import { useSelector } from "react-redux";
import accountApi from "../../utils/productApiComponent/accountApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
const UserProfilePage = () => {
  const user = useSelector(selectUser);

  // const getUserInfo = async () => {
  //   const token = LocalStorageUtils.getToken();
  //   const result = await accountApi.getOwnUser(token).then((res) => {
  //     return res;
  //   });
  //   console.log(result);
  // };
  // const [userInfo, setUserInfo] = useState();

  // useEffect(() => {
  //   getUserInfo();
  // }, []);
  const [customer, setCustomer] = useState({
    name: user.customer?.name || "",
    gender: user.customer?.gender || "",
    dob: user.customer?.dob || "",
    placeOfDelivery: user.customer?.placeOfDelivery || "",
    bio: user.customer?.bio || "",
    phone: user.phone || "",
    email: user.email || "",
  });
  // const [email, setEmail] = useState(user.email || "");
  const [shopName, setShopName] = useState(user.shop);

  return (
    <UserProfileDiv>
      <GeneralInfor
        customer={customer}
        // email={email}
        shopName={shopName}
        action={setCustomer}
        // setEmail={setEmail}
      />
      <AvatarBox />
    </UserProfileDiv>
  );
};

export default UserProfilePage;
