import styled, { keyframes } from "styled-components";
import { down, only } from "styled-breakpoints";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Flexbox from "../Flexbox";
import theme from "../../theme/themes";
export const move = keyframes`
    0%{
        transform: scale(0.5);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

export const TypoSave = styled.div`
  text-transform: none;
  color: white;
  font-size: 16px;
  ${down("xl")} {
    font-size: 14px;
  }
  ${down("md")} {
    font-size: 12px;
  }
  ${down("sm")} {
    font-size: 14px;
  }
`;
export const TypoH1 = styled(TypoSave)`
  color: #000000;
  font-weight: 400;
  font-size: 1.25rem;
  color: #222;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;
export const TypoCancel = styled.div`
  text-transform: none;
  color: #55abab;
  font-size: 16px;
  ${down("xl")} {
    font-size: 14px;
  }
  ${down("md")} {
    font-size: 12px;
  }
  ${down("sm")} {
    font-size: 14px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  ${down("sm")} {
    margin-top: 15px;
  }
`;

export const ButtonSave = styled(Button)`
  border-radius: 8px;
  width: 40%;
  height: 35px;
  background-color: "#55ABAB";
  &:hover {
    transform: scale(1.0125);
    box-shadow: 0 0 10px rgba(85, 171, 171, 0.25);
    transition: 0.2s;
  }
`;
export const ButtonLink = styled(Link)`
  border-radius: 8px;
  width: 40%;
  height: 35px;
  background-color: "#55ABAB";
  &:hover {
    transform: scale(1.0125);
    box-shadow: 0 0 10px rgba(85, 171, 171, 0.25);
    transition: 0.2s;
  }
`;
//pop up
export const PopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  animation: ${move} 0.15s linear forwards;
  z-index: 1200;
`;
export const LayerPopup = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.38);
  position: absolute;
`;
export const PopupDiv = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  margin: 270px auto;
  ${down("xl")} {
    width: 47%;
  }
  ${down("lg")} {
    width: 55%;
  }
  ${only("md")} {
    width: 57%;
  }
  ${down("md")} {
    width: 65%;
  }
  ${down("sm")} {
    width: 80%;
  }
`;
export const PopupVoucherDiv = styled(PopupDiv)`
  width: 40%;
  min-width: 500px;
  // min-height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 25px;
`;
export const TitlePopup = styled.div`
  // padding-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:target {
    visibility: visible;
    opacity: 1;
  }
`;

export const TitleH2 = styled.div`
  font-family: "League Spartan";
  font-size: 22px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;

  ${down("xxl")} {
    font-size: 20px;
  }
  ${down("lg")} {
    font-size: 17px;
  }
  ${down("lg")} {
    font-size: 15px;
  }
  ${down("sm")} {
    font-size: 14px;
    margin-left: 8px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 11px;
  }
  @media screen and (max-width: 350px) {
    font-size: 9px;
    padding-left: 0px;
  }
  @media screen and (max-width: 280px) {
    font-size: 9px;
  }
`;

export const PopupText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  width: 90%;
  color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  padding-bottom: 25px;
  ${down("xxl")} {
    font-size: 17px;
    width: 80%;
  }
  ${down("lg")} {
    font-size: 14px;
  }
  ${down("sm")} {
    font-size: 12px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
  @media screen and (max-width: 360px) {
    font-size: 9px;
  }
  @media screen and (max-width: 280px) {
    font-size: 8px;
    padding-bottom: 10px;
    line-height: 14px;
  }
`;

export const CloseButton = styled.button`
  // margin-right: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-align: right;
  background: transparent;
  border: none;
  transition: all 200ms;
  &:hover {
    color: #55abab;
    cursor: pointer;
  }
`;
export const WrapperFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // margin-bottom: 1rem;
`;

export const PopupTextDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonPopupDiv = styled(ButtonDiv)`
  justify-content: center;
`;
export const ButtonPopUpSend = styled(ButtonDiv)`
  justify-content: flex-end;
`;
export const ButtonPopupSave = styled(ButtonSave)`
  position: absolute;

  /* ${down("xxl")} {
        font-size: 17px;
        width: 80%;
    }
    ${down("sm")} {
        font-size: 12px;
        padding-bottom: 15px;
    }
    @media screen and (max-width: 400px) {
        font-size: 10px;
    }
    @media screen and (max-width: 360px) {
        font-size: 9px;
    } */
  @media screen and (max-width: 280px) {
    width: 35%;
    height: 27px;
  }
`;

export const TypoPopupSave = styled(TypoSave)`
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;
export const TypoPopupCancel = styled(TypoCancel)`
  color: black;
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;

export const ModalFooter = styled.div`
  // position: absolute;
  // bottom: 0;
  // left: 0;
  display: flex;
  justify-content: flex-end;
  right: 0;
  height: 84px;
  text-transform: uppercase;
  background: linear-gradient(hsla(0, 0%, 100%, 0.9), #fff);
  align-items: center;
  padding: 22px 30px;
  gap: 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;
export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  // padding-right: 50px;
  // margin-right: -50px;
  // padding-left: 50px;
  // margin-left: -50px;
  position: relative;
`;
export const SearchWrapper = styled(Flexbox)`
  padding: 0.9375rem;
  background: #f8f8f8;
`;
export const VoucherId = styled.span`
  flex-shrink: 0;
  text-transform: capitalize;
  margin-right: 0.6875rem;
`;
export const SearchVoucher = styled.input.attrs({ type: "text" })`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #fff;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
  color: #222;
  height: 40px;
  outline: none;
  box-shadow: none;
  padding: 10px;
  transition: border-color 0.1s ease;
  &:focus {
    border: 1px solid #55abab;
  }
`;
export const SearchInput = styled.input.attrs({ type: "text" })`
  font-size: 14px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: 0;
  width: 100%;
  flex: none;
`;
export const VoucherList = styled.div`
  // margin-left: -0.25rem;
  padding-left: 0.25rem;
  overflow: auto;

  position: relative;
  padding-right: 1.25rem;
  margin-top: 1.25rem;
  width: 100%;
  height: 100%;
`;

export const TypeVoucher = styled.span`
  margin-bottom: 0.625rem;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;

  display: flex;
  justify-content: space-between;
`;

export const VoucherItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  // justify-content: s;
  align-items: center;
  background-color: #b6e3e3;
  border-radius: 4px;
  padding: 1rem 2rem;
  margin-top: 10px;
`;

export const InforOfVoucher = styled.div`
  width: 12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* text-overflow: clip; */
`;

export const VoucherMax = styled.span`
  background: #ebcac4;
  border: 0.5px solid #ba4e3a;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 10px;
  color: #ba4e3a;
  padding: 0.3rem;
  width: fit-content;
  min-width: 25%;
`;
export const Exp = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  /* identical to box height */
  color: rgba(0, 0, 0, 0.7);
`;
export const CheckBoxWrap = styled.div`
  // padding: 0 12px 0 20px;
  display: flex;
  flex-direction: row-reverse;
  min-width: 58px;
  box-sizing: border-box;
`;
/////////////////  // background-color: ${theme.plum};//////////////  // background-color: ${theme.low_contrast_20};/////////////////////////////////////////////////

const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  // background-color: ${theme.plum};
  background: rgba(0, 0, 0, 0.38);
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter", sans-serif;
  z-index: 999;
`;
const StyledModalContent = styled.div`
  padding: 2rem;
  background-color: #fff;

  // background-color: ${theme.low_contrast_20};
  border-radius: 4px;
`;
const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.align || "center"};
  padding-bottom: 10px;
  font-family: inherit;
  gap: ${(props) => props.gap + "px" || "auto"};
`;
const StyledModalTitle = styled.h4`
  font-size: 1.35rem;
  font-weight: 600;
  color: #2f5e5e;
  margin: 0;
`;
const StyledModalBody = styled.div`
  padding: 10px 0;
`;
const StyledModalFooter = styled.div`
  padding-top: 10px;
`;

export {
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledModalTitle,
  StyledModalBody,
  StyledModalFooter,
};
