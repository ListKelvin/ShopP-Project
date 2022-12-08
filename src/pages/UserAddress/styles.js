
import styled from "styled-components";

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

    width: 75%;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 20px;
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
    gap: 10px;
`;