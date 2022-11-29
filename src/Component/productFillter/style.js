import styled from "styled-components";

export const FilterTitle = styled.h2`
    color: #2F5E5E;
`;

export const FilterFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 25%;
    background: #B6E3E3;
    border-radius: 10px;
    padding: 10px;
`;

export const TypeofFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const NameofFilter = styled.span`
    color: #2F5E5E;
    font-size: 20px;
`;

export const FilterComponent = styled.div`
    padding: 10px;
    border-bottom: 2px solid #55ABAB;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;