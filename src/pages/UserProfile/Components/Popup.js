import {
  LayerPopup,
  PopupContainer,
  PopupDiv,
  TitlePopup,
  TitleH2,
  PopupText,
  ButtonPopupSave,
  ButtonPopupDiv,
  TypoPopupSave,
  TypoPopupCancel,
  CloseButton,
  PopupTextDiv,
  Wrapper,
} from "./styleComponents";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Popup = ({ show, action }) => {
  return (
    <PopupContainer show={show}>
      <LayerPopup />
      <PopupDiv>
        <Wrapper>
          <TitlePopup>
            <ErrorOutlineIcon
              sx={{ color: "#55ABAB", fontSize: { xs: "18px", sm: "30px" } }}
            />
            <TitleH2>Do you want to change your information?</TitleH2>
          </TitlePopup>
          <CloseButton onClick={() => action(false)}>
            <CloseIcon sx={{ fontSize: { xs: "22px", sm: "30px" } }} />
          </CloseButton>
        </Wrapper>
        <PopupTextDiv>
          <PopupText>
            The account after redemption will no longer store previous
            information.
          </PopupText>
        </PopupTextDiv>
        <ButtonPopupDiv>
          <ButtonPopupSave
            onClick={() => action(false)}
            style={{ backgroundColor: "white", border: "none" }}
          >
            <TypoPopupCancel>Cancel</TypoPopupCancel>
          </ButtonPopupSave>
          <ButtonPopupSave style={{ backgroundColor: "#55ABAB" }}>
            <TypoPopupSave>Change</TypoPopupSave>
          </ButtonPopupSave>
        </ButtonPopupDiv>
      </PopupDiv>
    </PopupContainer>
  );
};

export default Popup;
