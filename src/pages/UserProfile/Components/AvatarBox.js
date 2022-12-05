import {AvatarBoxStyle, TypoDate, TypoName, ButtonAvatar, ButtonDiv, TypoButton, TypoSave, TypoCancel} from "./styleComponents";
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Button } from "@mui/material";
const name = "Nguyen Van A";
const date = "10/11/2022";
const AvatarBox = () => {
    return(
        <AvatarBoxStyle>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: {xxl: "100px", xl: "90px", lg: "80px", md: "70px", sm: "60px", xs: "80px"}, height: {xxl: "100px", xl: "90px", lg: "80px", md: "70px", sm: "60px", xs: "80px"}}} />
            <TypoName>{name}</TypoName>
            <TypoDate>Join date: {date}</TypoDate>
            <ButtonAvatar
                variant="contained"
                component="label"
                style = {{backgroundColor: "white", justifyContent: "space-between", marginTop: "10px", borderRadius: "8px"}}
                >
                <AddAPhotoIcon style = {{color: "#000"}} sx = {{width:{xs: "22px", sm: "20px", md: "22px"}}}/>
                <TypoButton>Upload File</TypoButton>
                <input type="file" hidden/>
            </ButtonAvatar>
            <ButtonDiv>
                <Button style = {{backgroundColor: "white", borderRadius: "8px", width: "40%", height: "35px", border: "1px solid #55ABAB"}}><TypoCancel>Cancel</TypoCancel></Button>
                <Button style = {{backgroundColor: "#55ABAB", borderRadius: "8px", width: "40%", height: "35px",}}><TypoSave>Save</TypoSave></Button>
            </ButtonDiv>
        </AvatarBoxStyle>
    ) 
}

export default AvatarBox;