import styled from "styled-components";
import Button from "@mui/material/Button";
import { up, down, between, only, createTheme } from "styled-breakpoints";
import LogoutIcon from "@mui/icons-material/Logout";
export const ButtonLog = styled(Button)`
  background-color: #f64a4a;
  width: 210px;
  height: 35px;
  border-radius: 8px;
  ${up("xl")} {
    margin-left: 100px;
  }
  ${down("lg")} {
    width: 90%;
    height: 30px;
  }
`;

export const ButtHover = {
  "&:hover": {
    transform: "scale(1.0125)",
    boxShadow: "0 0 10px rgba(246, 74, 74, 0.5)",
    transition: "0.3s",
  },
};

export const TypoButton = styled.div`
  text-transform: none;
  margin-left: 5px;
  ${down("md")} {
    font-size: 13px;
  }
`;

export const LogIcon = styled(LogoutIcon)`
  color: white;
`;

//change Password
export const PasswordTypo = styled.span`
  font-family: "Open Sans", sans-serif;
  color: rgba(0, 0, 0, 0.75);
  font-feature-settings: "calt" off;
  letter-spacing: -0.01em;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const PasswordTitle = styled.h1`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  color: #2f5e5e;
`;

export const ButtonPassword = styled(Button)`
  ${up("xl")} {
    margin-left: 100px;
  }
`;

export const TypoButtPassword = styled.span`
  text-transform: none;
  margin-left: 5px;

  ${down("sm")} {
    font-size: 11px;
  }
`;
export const TypoButtCancel = styled.span`
  text-transform: none;
  margin-left: 5px;
  color: #9799a1;

  ${down("sm")} {
    font-size: 11px;
  }
`;

export const ChangePassDiv = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  ${down("lg")} {
    width: 600px;
    margin-left: 10px;
  }
  ${down("sm")} {
    width: 98%;
    margin-left: 0px;
    padding: 1rem;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChangePassTitle = styled.div`
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #2f5e5e;
  min-width: fit-content;
`;

export const StyleNoti = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0px;
`;

export const BoxTitle = styled.div`
  display: flex;
  width: 90%;
  height: 20px;
  align-items: center;
  ${down("sm")} {
    margin-top: 10px;
  }
`;

export const TypoNoti = styled.div`
  font-family: "Open San";
  font-size: 15px;
  margin-left: 5px;
  color: green;
  min-width: 102px;
  ${down("sm")} {
    font-size: 12px;
  }
`;

export const TypoFail = styled(TypoNoti)`
  color: red;
  /* display: none; */
`;

export const NotiDiv = styled.div`
  display: none;
  &:active {
    display: flex;
  }
`;
