import StoreIcon from '@mui/icons-material/Store';
import LockIcon from '@mui/icons-material/Lock';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { FuncContainer, FuncDiv, IconStyle, TitleStyle } from "./styleComponents";
const SettingList = [
    {id: 1, iconList: <StoreIcon/>, func: "Shop", linkTo: ""},
    {id: 2, iconList: <LockIcon/>, func: "Private", linkTo: ""},
    {id: 3, iconList: <ChatIcon/>, func: "Chat", linkTo: ""},
    {id: 4, iconList: <CircleNotificationsIcon/>, func: "Notification", linkTo: ""},
  ];

const Setting = () => {
    return (
      <>
      <TitleStyle>Setting</TitleStyle>
      {SettingList.map(({id, iconList, func, linkTo}) => {
        return (
        <FuncContainer key={id}>
            <IconStyle>{iconList}</IconStyle>
            <FuncDiv to={linkTo}>{func}</FuncDiv>
        </FuncContainer>
          );
          })}
      </>
    );
  };
  
  export default Setting;