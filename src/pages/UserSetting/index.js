import { Container, ContainerAdditional } from "./style";
import DashBoard from "../../Component/MenuSetting/Components/DashBoard";
import { Outlet } from "react-router-dom";
const UserSetting = () => {
  return (
    <Container>
      <DashBoard />
      <ContainerAdditional>
        <Outlet />
      </ContainerAdditional>
    </Container>
  );
};

export default UserSetting;
