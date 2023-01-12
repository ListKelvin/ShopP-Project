import { useEffect } from "react";

// import { StyledEventIndicator } from "../../container/home/style";
import { CloseButton } from "./styleComponents";
import Divider from "../Divider";
import CloseIcon from "@mui/icons-material/Close";

import Wrapper from "../Wrapper";
import {
  StyledModal,
  StyledModalBody,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
} from "./styleComponents";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  if (!props.show) {
    return null;
  }

  return (
    <StyledModal onClick={props.onClose}>
      <Wrapper>
        <StyledModalContent onClick={(e) => e.stopPropagation()}>
          <StyledModalHeader gap={4}>
            <StyledModalTitle>{props.title}</StyledModalTitle>
            <CloseButton onClick={props.onClose}>
              <CloseIcon sx={{ fontSize: { xs: "22px", sm: "30px" } }} />
            </CloseButton>
          </StyledModalHeader>
          <Divider margin={5} />
          <StyledModalBody>{props.children}</StyledModalBody>
        </StyledModalContent>
      </Wrapper>
    </StyledModal>
  );
};

export default Modal;
