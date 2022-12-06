import React from "react";
import { CancelButton } from "./CancelButt";
import FormPropsTextFields from './InputField';
import UpdatePassButton from "./UpdatePassButton";
import {ChangePassDiv, ChangePassTitle, ContentBox, BoxTitle} from "./styleComponents";
import SuccessNoti from "./SuccessNoti";
const ChangePassword = () => {
    return(
        <ChangePassDiv>
            <BoxTitle>
                <ChangePassTitle>CHANGE PASSWORD</ChangePassTitle>
                <SuccessNoti/>
            </BoxTitle>
            <ContentBox>
                <FormPropsTextFields/>
                <UpdatePassButton />
                <CancelButton/>
            </ContentBox>
        </ChangePassDiv>
    )
};

export default ChangePassword;