import DashBoard from "../../Component/MenuSetting/Components/DashBoard";
import { UserProfileDiv } from "./styles";
import GeneralInfor from "./Components/GeneralInfor";
import AvatarBox from "./Components/AvatarBox";

const UserProfilePage = () => {
  return (
    <UserProfileDiv>
      <DashBoard/>
      <GeneralInfor/>
      <AvatarBox/>
    </UserProfileDiv>
  );
};

export default UserProfilePage;
