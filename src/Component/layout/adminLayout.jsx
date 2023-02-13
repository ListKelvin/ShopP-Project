import NavBarShop from "../NavBar/ShopNavBar";
import AdminDashBoard from "../../pages/AdminDashBoard";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <NavBarShop />
      <AdminDashBoard />
      <AdminWrapper>
        {" "}
        <Outlet />{" "}
      </AdminWrapper>
    </>
  );
};

export default AdminLayout;
export const AdminWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 220px;
  margin-top: 60px;
  background-color: #b6e3e3;
  opacity: 0.4;
`;
