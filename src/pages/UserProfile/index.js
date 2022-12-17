import DashBoard from "../../Component/MenuSetting/Components/DashBoard";
import { UserProfileDiv, Title } from "./styles";
import GeneralInfor from "./Components/GeneralInfor";
import AvatarBox from "./Components/AvatarBox";
import Popup from "./Components/Popup";

const UserProfilePage = () => {
  return (
    <UserProfileDiv>
      <DashBoard />
      <GeneralInfor />
      <AvatarBox />
      <Title>User Profile</Title>
    </UserProfileDiv>
  );
};

export default UserProfilePage;
