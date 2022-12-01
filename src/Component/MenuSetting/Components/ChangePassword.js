import React from "react";
import { CancelButton } from "./CancelButt";
import FormPropsTextFields from './InputField';
import UpdatePassButton from "./UpdatePassButton";
import {ChangePassDiv, ChangePassTitle, ContentBox} from "./styleComponents";
import SuccessNoti from "./SuccessNoti";
const ChangePassword = () => {
    return(
        <ChangePassDiv>
            <div style = {{display: "flex", width: "60%" }}>
            <ChangePassTitle>CHANGE PASSWORD</ChangePassTitle>
            <SuccessNoti/>
            </div>
            <ContentBox>
                <FormPropsTextFields/>
                <UpdatePassButton />
                <CancelButton/>
            </ContentBox>
        </ChangePassDiv>
    )
};

export default ChangePassword;