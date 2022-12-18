
import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Button } from "@mui/material";

export const AddressTitle = styled.h1`
    color: #55ABAB;
    margin-bottom: 20px;
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 25px;

    width: 100%;

`;

export const AddressFrame = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    width: 75%;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 20px;

    ${down('lg')} {
        width: 100%;
    }
    
    ${down('md')} {
        width: 100%;
    }

    ${down('sm')} {
        width: 100%;
    }
`;

export const InfAddress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

export const AddressStatus = styled.span`
    display: flex;
    align-items: center;

    color: green;
    font-size: 13px;
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const AddButton = styled(Button)`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    width: 75%;

    ${down('lg')} {
        width: 100%;
    }
    
    ${down('md')} {
        width: 100%;
    }

    ${down('sm')} {
        width: 100%;
    }
`;

export const EditButton = styled(Button)`
    width: 100%;
    
    ${down('md')} {
        width: 75%;
    }

    ${down('sm')} {
        width: 50%;
    }
`;

export const DefaultButton = styled(Button)`
    width: 100%;

    ${down('md')} {
        width: 75%;
    }
`;

export const DeleteButton = styled(Button)`
    width: 100%;

    ${down('md')} {
        width: 75%;
    }
`;