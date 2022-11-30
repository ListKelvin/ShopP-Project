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

