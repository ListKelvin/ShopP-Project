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
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
const Modal = ({ show, action }) => {
  const navigate = useNavigate();
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
            onClick={() => {
              navigate("/home");
              window.location.reload();
            }}
            style={{ backgroundColor: "white", border: "none" }}
          >
            <TypoPopupCancel>SKIP</TypoPopupCancel>
          </ButtonPopupSave>
          <ButtonPopupSave
            onClick={() => action(false)}
            style={{ backgroundColor: "#55ABAB" }}
          >
            <TypoPopupSave>YES</TypoPopupSave>
          </ButtonPopupSave>
        </ButtonPopupDiv>
      </PopupDiv>
    </PopupContainer>
  );
};

export default Modal;
