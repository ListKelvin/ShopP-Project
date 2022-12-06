import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';
import { Button } from "@mui/material";

export const GeneralTitle = styled.h1`
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #2F5E5E;
    margin-bottom: 15px;
`;

export const BoxTitle = styled.div`
    width: 96%;
    justify-content: center;
    ${down('sm')} {
        width: 92%;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GeneralInforBox = styled.div`
    width: 45%;
    height: 730px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${down('lg')} {
        width: 48%;
    }
    ${down('md')} {
        width: 48%;
    }
    ${down('sm')} {
        width: 100%;
        margin-top: 20px;
    }
`;

export const InputTwoFiledStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const InputFieldStyle = styled.div`
`;

export const InputFieldStylePlace = styled.div`
    width: 60%;
`;
export const InputFieldStyleSex = styled.div`
    width: 35%;
`;

export const TextRight = styled.div`
    text-align: right;
`;

export const AvatarBoxStyle = styled.div`
    width: 20%;
    height: fit-content;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;
    ${down('xl')} {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    ${down('lg')} {
        width: 23%;
    }
    ${down('sm')} {
        width: 100%;
    }
`;

export const TypoName = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top: 10px;
    ${down('xl')} {
        font-size: 16px;
    }
    ${down('md')} {
        font-size: 14px;
        margin-top: 8px;
    }
    ${down('sm')} {
        font-size: 18px;
    }
`;

export const TypoDate = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-top: 8px;
    ${down('xl')} {
        font-size: 14px;
    }
    ${down('md')} {
        font-size: 12px;
        margin-top: 4px;
    }
    ${down('sm')} {
        font-size: 14px;
    }
`;

export const ButtonAvatar = styled(Button)`
    width: 150px;
    display: flex;
    align-items: center;
    ${down('xl')} {
        width: 140px;
    }
    ${down('lg')} {
        width: 130px;
    }
    ${down('sm')} {
        width: 145px;
    }
`;

export const TypoButton = styled.div`
    text-transform: none;
    color: #000000;
    font-size: 16px;
    ${down('xl')} {
        font-size: 14px;
    }
    ${down('md')} {
        font-size: 12px;
    }
    ${down('sm')} {
        font-size: 14px;
    }
`;

export const TypoSave = styled.div`
    text-transform: none;
    color: white;
    font-size: 16px;
    ${down('xl')} {
        font-size: 14px;
    }
    ${down('md')} {
        font-size: 12px;
    }
    ${down('sm')} {
        font-size: 14px;
    }
`;
export const TypoCancel = styled.div`
    text-transform: none;
    color: #55ABAB;
    font-size: 16px;
    ${down('xl')} {
        font-size: 14px;
    }
    ${down('md')} {
        font-size: 12px;
    }
    ${down('sm')} {
        font-size: 14px;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    ${down('sm')} {
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