import { useState, useEffect } from "react";
import { UserProfileDiv, Title } from "./styles";
import GeneralInfor from "./Components/GeneralInfor";
import AvatarBox from "./Components/AvatarBox";
import { selectUser } from "../../selectors/userSelector";
import { useSelector } from "react-redux";
import accountApi from "../../utils/productApiComponent/accountApi";
import customerApi from "../../utils/productApiComponent/customerApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { toastSuccess } from "../../Component/ToastNotification";
import { formatDate, FormateDateType } from "../../utils/helper";
import { usePersistedState } from "../../utils/UsePersistedState";
const UserProfilePage = () => {
  const user = useSelector(selectUser);
  const token = LocalStorageUtils.getToken();
  // const [customer2, setCustomer2] = useState({
  //   name: "",
  //   gender: "",
  //   dob: "",
  //   placeOfDelivery: "",
  //   bio: "",
  //   phone: "",
  //   email: "",
  //   avatar: "",
  // });

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     const result = await accountApi.getOwnUser(token).then((res) => {
  //       return res;
  //     });
  //     console.log("line 32: ", result);

  //     await setCustomer2({
  //       name: result.customer?.name || "",
  //       gender: result.customer?.gender || "",
  //       dob: result.customer?.dob || "",
  //       placeOfDelivery: result.customer?.placeOfDelivery || "",
  //       bio: result.customer?.bio || "",
  //       phone: result.phone || "",
  //       email: result.email || "",
  //       avatar: result.customer?.avatar || "",
  //     });
  //   };

  //   getUserInfo();
  // }, [token]);

  const [customer, setCustomer] = useState({
    name: user.customer?.name || "",
    gender: user.customer?.gender || "",
    dob: user.customer?.dob || "",
    placeOfDelivery: JSON.parse(user?.customer?.placeOfDelivery) || "",
    bio: user.customer?.bio || "",
    phone: user.phone || "",
    email: user.email || "",
    avatar: user.customer?.avatar || "",
  });

  const [shopName, setShopName] = useState(user.shop);
  const EditAccount = async (formatDataCustomer, formatDataAccount, token) => {
    const resultCustomer = await customerApi.editCustomer(formatDataCustomer);
    const resultAccount = await accountApi.EditAccount(
      formatDataAccount,
      token
    );
    if (resultCustomer.status === 200 && resultAccount.status === 200) {
      toastSuccess("Edit Information successfully");
    }
    // console.log("line 45:", resultCustomer);
    // console.log("line 46:", resultAccount);
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
    const formatDataAccount = {
      email: customer.email,
      phone: customer.phone,
    };
    EditAccount(formatDataCustomer, formatDataAccount, token);
  };

  return (
    <UserProfileDiv>
      <GeneralInfor
        customer={customer}
        shopName={shopName}
        action={setCustomer}
      />

      <AvatarBox onSubmit={onSubmit} customer={customer} action={setCustomer} />
    </UserProfileDiv>
  );
};

export default UserProfilePage;
