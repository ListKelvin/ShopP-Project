import {
  AvatarBoxStyle,
  TypoDate,
  TypoName,
  ButtonAvatar,
  ButtonDiv,
  TypoButton,
  TypoSave,
  TypoCancel,
  ButtonSave,
} from "./styleComponents";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Button } from "@mui/material";
import Popup from "./Popup";

import { useState, useRef } from "react";
const name = "Nguyen Van A";
const date = "10/11/2022";
const AvatarBox = ({ onSubmit, action, customer }) => {
  const fileRef = useRef(null);

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();

  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <AvatarBoxStyle>
      <Popup show={show} action={setShow} />
      <Avatar
        alt="Remy Sharp"
        src={preview}
        sx={{
          width: {
            xxl: "100px",
            xl: "90px",
            lg: "80px",
            md: "70px",
            sm: "60px",
            xs: "80px",
          },
          height: {
            xxl: "100px",
            xl: "90px",
            lg: "80px",
            md: "70px",
            sm: "60px",
            xs: "80px",
          },
        }}
      />
      <TypoName>{name}</TypoName>
      <TypoDate>Join date: {date}</TypoDate>
      <ButtonAvatar
        variant="contained"
        component="label"
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          marginTop: "10px",
          borderRadius: "8px",
        }}
      >
        <AddAPhotoIcon
          style={{ color: "#000" }}
          sx={{ width: { xs: "22px", sm: "20px", md: "22px" } }}
        />
        <TypoButton>Upload File</TypoButton>
        <input
          hidden
          name="avatar"
          ref={fileRef}
          type="file"
          onChange={(e) => {
            action({ ...customer, avatar: e.target.files[0] });
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
      </ButtonAvatar>
      <ButtonDiv>
        <ButtonSave
          onClick={() => {
            setShow(true);
          }}
          style={{ backgroundColor: "white", border: "1px solid #55ABAB" }}
        >
          <TypoCancel>Cancel</TypoCancel>
        </ButtonSave>
        <ButtonSave
          onClick={() => {
            onSubmit();
          }}
          style={{ backgroundColor: "#55ABAB" }}
        >
          <TypoSave>Save</TypoSave>
        </ButtonSave>
      </ButtonDiv>
    </AvatarBoxStyle>
  );
};

export default AvatarBox;
