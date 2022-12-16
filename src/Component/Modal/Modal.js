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
  ButtonLink,
  Wrapper,
  WrapperFlex,
} from "./styleComponents";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
const Modal = ({ show, action }) => {
  return (
    <PopupContainer show={show}>
      <LayerPopup />
      <PopupDiv>
        <Wrapper>
          <CloseButton onClick={() => action(false)}>
            <CloseIcon sx={{ fontSize: { xs: "22px", sm: "30px" } }} />
          </CloseButton>
        </Wrapper>
        <WrapperFlex>
          <ErrorOutlineIcon
            sx={{ color: "#55ABAB", fontSize: { xs: "40px", sm: "4rem" } }}
          />
        </WrapperFlex>
        <WrapperFlex>
          <TitlePopup>
            <TitleH2>You need to tell us who are you?</TitleH2>
          </TitlePopup>
        </WrapperFlex>
        <ButtonPopupDiv>
          <ButtonPopupSave
            onClick={() => action(false)}
            style={{ backgroundColor: "white", border: "none" }}
          >
            <TypoPopupCancel>SKIP</TypoPopupCancel>
          </ButtonPopupSave>
          <ButtonLink style={{ backgroundColor: "#55ABAB" }}>
            <TypoPopupSave>YES</TypoPopupSave>
          </ButtonLink>
        </ButtonPopupDiv>
      </PopupDiv>
    </PopupContainer>
  );
};

export default Modal;
