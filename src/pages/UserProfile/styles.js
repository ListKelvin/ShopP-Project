import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';

export const UserProfileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    ${down('sm')} {
        display: flex;
        justify-content: space-between;
    }
`;