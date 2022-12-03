import styled from "styled-components";
import Button from '@mui/material/Button';
import { up, down, between, only, createTheme } from 'styled-breakpoints';
import LogoutIcon from '@mui/icons-material/Logout';
export const ButtonLog =styled(Button) `
    ${up('xl')} {
        margin-left: 100px;
    }
`;

export const TypoButton = styled.div`
    text-transform: none;
    margin-left: 5px;
    
    ${down('sm')} {
        font-size: 11px;
    }
    
`;

export const LogIcon = styled(LogoutIcon) `
    color: white;
`;

//change Password
export const PasswordTypo = styled.span `
    font-family: 'Open Sans', sans-serif;
    color: rgba(0, 0, 0, 0.75);
    font-feature-settings: 'calt' off;
    letter-spacing: -0.01em;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`;

export const PasswordTitle = styled.h1`
    font-family: 'League Spartan';
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #2F5E5E;
`;

export const ButtonPassword = styled(Button) `
    ${up('xl')} {
        margin-left: 100px;
    }
`;

export const TypoButtPassword = styled.span`
    text-transform: none;
    margin-left: 5px;
    
    ${down('sm')} {
        font-size: 11px;
    }
`;
export const TypoButtCancel = styled.span`
    text-transform: none;
    margin-left: 5px;
    color: #9799A1;
    
    ${down('sm')} {
        font-size: 11px;
    }
`;

export const ChangePassDiv = styled.div`
    width: 60%;
    height: 475px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${down('lg')} {
        width: 600px;
        margin-left: 10px;
    }
`;

export const ContentBox  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const ChangePassTitle = styled.div`
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #2F5E5E;
    margin-bottom: 40px;
    margin-left: 20px;
    min-width: fit-content;
`;

export const StyleNoti = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 380px;
    margin-right: 20px;
    min-width: 110px;
    ${down('xxl')} {
        margin-left: 280px;
    }
    ${down('xl')} {
        margin-left: 200px;
    }
    ${down('md')} {
        margin-left: 150px;
    } 
`;