import { useState } from "react";
import {
  LayerPopup,
  PopupContainer,
  PopupDiv,
  ButtonPopupSave,
  TypoPopupSave,
  CloseButton,
  ButtonPopUpSend,
  TypoH1,
} from "./styleComponents";
import { useNavigate } from "react-router-dom";
import authApi from "../../utils/productApiComponent/authApi";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import Flexbox from "../Flexbox";
import { toastError, toastSuccess } from "../ToastNotification";
const ModalForgotPassword = ({ show, action }) => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const postForgotPassword = async (email) => {
    const formatData = {
      email: email,
    };
    if (email) {
      const result = await authApi.postForgotPassword(formatData);
      console.log(result);
      if (result.status === 200) {
        navigate("/resetPassword", { state: formatData });
        toastSuccess(result.data.message);
      }
    } else toastError("Please input email!!");
  };

  return (
    <PopupContainer show={show}>
      <LayerPopup />
      <PopupDiv>
        <Flexbox justifyContent="space-between" alignItems="center">
          <TypoH1>Forgot Password</TypoH1>
          <CloseButton onClick={() => action(false)}>
            <CloseIcon
              sx={{
                fontSize: { xs: "22px", sm: "30px" },
              }}
            />
          </CloseButton>
        </Flexbox>

        <TextField
          sx={{ marginTop: "1rem" }}
          fullWidth
          label="Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <ButtonPopUpSend>
          <ButtonPopupSave
            onClick={() => postForgotPassword(email)}
            style={{ backgroundColor: "#55ABAB" }}
          >
            <TypoPopupSave>Send</TypoPopupSave>
          </ButtonPopupSave>
        </ButtonPopUpSend>
      </PopupDiv>
    </PopupContainer>
  );
};

export default ModalForgotPassword;
