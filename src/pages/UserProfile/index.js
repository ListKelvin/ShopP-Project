import { useState, useEffect } from "react";
import { UserProfileDiv, Title } from "./styles";
import GeneralInfor from "./Components/GeneralInfor";
import AvatarBox from "./Components/AvatarBox";
import { selectUser } from "../../selectors/userSelector";
import { useSelector } from "react-redux";
import accountApi from "../../utils/productApiComponent/accountApi";
import customerApi from "../../utils/productApiComponent/customerApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { formatDate, FormateDateType } from "../../utils/helper";
const UserProfilePage = () => {
  const user = useSelector(selectUser);
  console.log(user);
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
    avatar: user.customer?.avatar || "",
  });
  // const [email, setEmail] = useState(user.email || "");
  const [shopName, setShopName] = useState(user.shop);
  const EditCustomer = async (formatDataCustomer) => {
    const result = await customerApi.editCustomer(formatDataCustomer);
    console.log("line 39:", result);
  };

  const onSubmit = () => {
    const formatDataCustomer = {
      name: customer.name,
      gender: customer.gender,
      dob:
        typeof customer.dob === typeof ""
          ? FormateDateType(customer.dob)
          : formatDate(customer.dob.$d),
      placeOfDelivery: customer.placeOfDelivery,
      bio: customer.bio,
      avatar: customer.avatar,
    };
    const formatDataAccount = {};
    EditCustomer(formatDataCustomer);
  };
  return (
    <UserProfileDiv>
      <GeneralInfor
        customer={customer}
        // email={email}
        shopName={shopName}
        action={setCustomer}
        // setEmail={setEmail}
      />

      <AvatarBox onSubmit={onSubmit} customer={customer} action={setCustomer} />
    </UserProfileDiv>
  );
};

export default UserProfilePage;
