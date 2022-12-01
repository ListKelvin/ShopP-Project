import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';

export const StyleTable = styled.table`
    width: 202px;
    height: 477px;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    font-family: 'League Spartan';
    background-color: #B6E3E3;
    border-radius: 16px;
    text-align: left;
    position: sticky;
    top: 150px;
    ${down('md')} {
        width: 168px;
        height: 469px;
    }
`;
export const TypoTitle = styled.span`
    font-family: 'League Spartan';
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #2F5E5E;
`;

export const IconStyle = styled.td`
    color: #2F5E5E;
    width: 25%;
    text-align: center;
    vertical-align: middle;
    ${down('md')} {
        width: 36px;
    }
`;
export const TitleStyle = styled.h1`
    font-size: 24px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #2F5E5E;
    font-weight: 700;
    margin-left: 10px;
`;

export const StyleOfTr = styled.tr`
    height: 30px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const HoverEffect = styled.div`
    background-color: rgba(85, 171, 171, 0.5);
`;

export const CenterIcon = styled.div`
    display: flex;
    justify-content: center;
`;