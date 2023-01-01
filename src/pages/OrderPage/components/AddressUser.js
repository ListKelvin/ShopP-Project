import {
  AddressContainer,
  AddressWrapper,
  TitleAdress,
  TextSpan,
  ChangeBtn,
  UserAddresses,
  Addresses,
  DefaultAddresses,
} from "../styled";
import Flexbox from "../../../Component/Flexbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const AddressUser = () => {
  return (
    <AddressContainer>
      <AddressWrapper>
        <Flexbox>
          <TitleAdress flexDirection="row" gap="10" alignItems="center">
            <LocationOnIcon />
            <TextSpan> User Address</TextSpan>
          </TitleAdress>
        </Flexbox>
        <Flexbox alignItems="center">
          <Flexbox alignItems="center" gap="30px">
            <UserAddresses> Pham Cong Minh (+84) 348485167</UserAddresses>{" "}
            <Addresses>
              {" "}
              Đường bùi hữu nghĩa hẻm 696 số nhà k3/81c, Phường Bửu Hòa, Thành
              Phố Biên Hòa, Đồng Nai
            </Addresses>
            <DefaultAddresses> Default Address</DefaultAddresses>
          </Flexbox>

          <ChangeBtn> Change</ChangeBtn>
        </Flexbox>
      </AddressWrapper>
    </AddressContainer>
  );
};

export default AddressUser;
