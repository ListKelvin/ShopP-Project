import { useState } from "react";

import {
  AddressFrame,
  AddressStatus,
  ButtonArea,
  InfAddress,
  Layout,
  Status,
  AddButton,
  AddressTitle,
  EditButton,
  DefaultButton,
  DeleteButton,
} from "./styles";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuSetting from "../../Component/MenuSetting";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/userSelector";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import accountApi from "../../utils/productApiComponent/accountApi";
import customerApi from "../../utils/productApiComponent/customerApi";
import { toastSuccess } from "../../Component/ToastNotification";
import { FormateDateType, formatDate } from "../../utils/helper";
const Address = [
  {
    id: 0,
    user: "Lê Thành Long",
    phone: "0987654321",
    addressinf:
      "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
  },
  {
    id: 0,
    user: "Bùi Phan Long",
    phone: "0987654321",
    addressinf:
      "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
  },
  {
    id: 0,
    user: "Phạm Công Minh",
    phone: "0987654321",
    addressinf:
      "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
  },
];

const UserAddressPage = () => {
  const user = useSelector(selectUser);
  // console.log(JSON.parse(user.customer.placeOfDelivery));
  const token = LocalStorageUtils.getToken();
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
  const [addresses, setAddresses] = useState([]);
  /*
[{default: true,
address:



  "Số 12, đường Trường Chinh, Bến Nghé, quận 3, Thành phố Hồ Chí Minh"


}
{default: false,
address:



  "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh"


}
]


*/

  const EditAccount = async () => {
    const testAddress = [
      {
        default: true,
        address:
          "Số 12, đường Trường Chinh, Bến Nghé, quận 3, Thành phố Hồ Chí Minh",
      },
      {
        default: false,
        address:
          "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
      },
    ];
    const formatDataCustomer = {
      name: customer.name,
      gender: customer.gender,
      dob:
        typeof customer.dob === typeof ""
          ? FormateDateType(customer.dob)
          : formatDate(customer.dob.$d),
      placeOfDelivery: JSON.stringify(testAddress),
      bio: customer.bio,
      avatar: customer.avatar,
    };
    const resultCustomer = await customerApi.editCustomer(formatDataCustomer);
    // const resultAccount = await accountApi.EditAccount(
    //   formatDataAccount,
    //   token
    // );
    if (resultCustomer.status === 200) {
      console.log(resultCustomer);
      toastSuccess("Edit Information successfully");
    }
    // console.log("line 45:", resultCustomer);
    // console.log("line 46:", resultAccount);
  };

  return (
    <>
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Open Sans",
        }}
      >
        <Layout>
          <AddButton
            style={{ border: "1px dashed #F64A4A" }}
            startIcon={<AddIcon style={{ color: "#F64A4A" }} />}
          >
            <p style={{ color: "#F64A4A" }}>Add new address</p>
          </AddButton>
          {Address.map(({ id, user, phone, addressinf }) => {
            return (
              <AddressFrame key={id}>
                <InfAddress>
                  <p>
                    {user} | {phone}
                  </p>
                  <p>{addressinf}</p>
                  <AddressStatus color="success">
                    <CheckCircleIcon color="success" />
                    Default
                  </AddressStatus>
                </InfAddress>

                <ButtonArea>
                  <EditButton style={{ background: "#55ABAB", color: "white" }}>
                    Edit
                  </EditButton>
                  <DefaultButton
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(186, 78, 58, 0.5)",
                      color: "rgba(186, 78, 58, 0.5)",
                    }}
                  >
                    Set as default
                  </DefaultButton>
                  <DeleteButton
                    style={{ background: "#F64A4A", color: "white" }}
                  >
                    Delete
                  </DeleteButton>
                </ButtonArea>
              </AddressFrame>
            );
          })}
        </Layout>
      </div>
    </>
  );
};

export default UserAddressPage;
