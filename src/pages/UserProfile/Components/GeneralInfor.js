import InputField from "./InputField";
import {GeneralTitle, BoxTitle, ContentBox, GeneralInforBox} from "./styleComponents";
const GeneralInfor = () => {
    return(
        <GeneralInforBox>
            <BoxTitle>
                <GeneralTitle>General Information</GeneralTitle>
            </BoxTitle>
            <ContentBox>
                <InputField/>
            </ContentBox>
        </GeneralInforBox>
    )
}

export default GeneralInfor;