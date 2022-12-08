import * as React from 'react';
import { AddressFrame, AddressStatus, ButtonArea, InfAddress, Layout, Status } from "./styles";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MenuSetting from "../../Component/MenuSetting"
import { Login } from '@mui/icons-material';

const Address = [
  {
    id: 0,
    user: "Lê Thành Long",
    phone: "0987654321",
    addressinf: "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
  },
  {
    id: 0,
    user: "Bùi Phan Long",
    phone: "0987654321",
    addressinf: "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
  },
  {
    id: 0,
    user: "Phạm Công Minh",
    phone: "0987654321",
    addressinf: "Số 20, đường Trường Chinh, Bến Nghé, quận 1, Thành phố Hồ Chí Minh",
  }
]

const UserAddressPage = () => {
  return (
    <>
      <h1>Address</h1>
      {/* <MenuSetting/> */}
      <div style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Open Sans",
      }}>
        <Layout>
          <Button style={{
            background: "#FFFFFF",
            border: "1px dashed #F64A4A",
            borderRadius: "8px",
            padding: "10px",
            boxSizing: "border-box",
            width: "75%"
          }}
            startIcon={<AddIcon style={{ color: "#F64A4A" }} />}>
            <p style={{ color: "#F64A4A" }}>Add new address</p>
          </Button>
          {Address.map(({ id, user, phone, addressinf }) => {
            return (
            <AddressFrame key={id}>
              <InfAddress >
                <p>{user} | {phone}</p>
                <p>{addressinf}</p>
                <AddressStatus color="success">
                  <CheckCircleIcon color="success" />
                  Default
                </AddressStatus>
              </InfAddress>

              <ButtonArea>
                <Button style={{ background: "#55ABAB", color: "white" }}>Edit</Button>
                <Button style={{ background: "#FFFFFF", border: "1px solid rgba(186, 78, 58, 0.5)", color: "rgba(186, 78, 58, 0.5)" }}>Set as default</Button>
                <Button style={{ background: "#F64A4A", color: "white" }}>Delete</Button>
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
