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
import ModalAddress from "../../Component/Modal/ModalAddress";
import { useNavigate } from "react-router-dom";

const UserAddressPage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [showCreateModal, toggleCreateModal] = useState(false);
  const token = LocalStorageUtils.getToken();
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

  const EditAccount = async (address) => {
    console.log(address);
    const formatDataCustomer = {
      name: customer.name,
      gender: customer.gender,
      dob:
        typeof customer.dob === typeof ""
          ? FormateDateType(customer.dob)
          : formatDate(customer.dob.$d),
      placeOfDelivery: JSON.stringify(address),
      bio: customer.bio,
      avatar: customer.avatar,
    };
    const resultCustomer = await customerApi.editCustomer(formatDataCustomer);
    if (resultCustomer.status === 200) {
      console.log(resultCustomer);
      toastSuccess("Edit Information successfully");
      toggleCreateModal(false);
    }
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
            onClick={() => toggleCreateModal(true)}
            style={{ border: "1px dashed #F64A4A" }}
            startIcon={<AddIcon style={{ color: "#F64A4A" }} />}
          >
            <p style={{ color: "#F64A4A" }}>Add new address</p>
          </AddButton>
          {customer?.placeOfDelivery?.map((el, id) => {
            return (
              <AddressFrame key={id}>
                <InfAddress>
                  <p>
                    {customer.name.toLowerCase()} | {customer.phone}
                  </p>
                  <p>{el.address}</p>
                  {el.default ? (
                    <AddressStatus color="success">
                      <CheckCircleIcon color="success" />
                      Default
                    </AddressStatus>
                  ) : (
                    ""
                  )}
                </InfAddress>

                <ButtonArea>
                  <EditButton style={{ background: "#55ABAB", color: "white" }}>
                    Edit
                  </EditButton>
                  {!el.default && (
                    <DefaultButton
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(186, 78, 58, 0.5)",
                        color: "rgba(186, 78, 58, 0.5)",
                      }}
                    >
                      Set as default
                    </DefaultButton>
                  )}

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
        <ModalAddress
          customer={customer}
          action={setCustomer}
          show={showCreateModal}
          onClick={() => toggleCreateModal(true)}
          onClose={() => toggleCreateModal(false)}
          onSubmit={EditAccount}
        />
      </div>
    </>
  );
};

export default UserAddressPage;
