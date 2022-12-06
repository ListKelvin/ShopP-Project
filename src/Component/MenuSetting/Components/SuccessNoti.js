import CircleIcon from '@mui/icons-material/Circle';
import {StyleNoti, TypoNoti, TypoFail, NotiDiv} from "./styleComponents";

const SuccessNoti = () => {
    return(
        <StyleNoti>
            <NotiDiv>
            <CircleIcon style = {{color: "green"}} sx = {{width: {xs: "15px", sm: "17px"}}}></CircleIcon>
            <TypoNoti>Update Successfully!</TypoNoti>
            </NotiDiv>
            <NotiDiv>
            <CircleIcon style = {{color: "red"}} sx = {{width: {xs: "15px", sm: "17px"}}}></CircleIcon>
            <TypoFail>Update Failed!</TypoFail>
            </NotiDiv>
        </StyleNoti>
    );

}

export default SuccessNoti;