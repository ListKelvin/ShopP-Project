import styled, { keyframes } from "styled-components";
import { down, only } from "styled-breakpoints";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
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
  z-index: 99;
`;
export const LayerPopup = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.38);
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
