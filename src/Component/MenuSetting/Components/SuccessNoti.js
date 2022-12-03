import CircleIcon from '@mui/icons-material/Circle';
import {StyleNoti} from "./styleComponents";

const SuccessNoti = () => {
    return(
        <StyleNoti>
            <CircleIcon style = {{color: "green", width: "19px"}}></CircleIcon>
            <div style = {{fontFamily: "Open San", fontSize: "15px", marginLeft: "5px", color: "green", minWidth: "102px"}}>Update Success!</div>
            {/* <CircleIcon style = {{color: "red", width: "19px"}}></CircleIcon>
            <div style = {{fontFamily: "Open San", fontSize: "15px", marginLeft: "5px", color: "red"}}>Update Failed</div> */}
        </StyleNoti>
    );

}

export default SuccessNoti;