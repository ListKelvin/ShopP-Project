import InputField from "./InputField";
import {
  GeneralTitle,
  BoxTitle,
  ContentBox,
  GeneralInforBox,
} from "./styleComponents";
const GeneralInfor = ({ customer, shopName, action }) => {
  return (
    <GeneralInforBox>
      <BoxTitle>
        <GeneralTitle>General Information</GeneralTitle>
      </BoxTitle>
      <ContentBox>
        <InputField customer={customer} shopName={shopName} action={action} />
      </ContentBox>
    </GeneralInforBox>
  );
};

export default GeneralInfor;
