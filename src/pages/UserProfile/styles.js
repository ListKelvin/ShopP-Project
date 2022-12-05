import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';

export const UserProfileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    ${down('sm')} {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const Title = styled.div`
    width: 100%;
    font-family: "League Spartan";
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    margin-bottom: 15px;
    color: #000;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #2F5E5E;
    ${up('sm')} {
        display: none;
    }
`;