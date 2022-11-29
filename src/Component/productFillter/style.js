import styled from "styled-components";

export const Layout = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 10px;
    
    font-family: 'Open Sans', sans-serif;
`;

export const FilterTitle = styled.h2`
    color: #2F5E5E;
`;

export const FilterFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20%;
    background: #B6E3E3;
    border-radius: 10px;
    padding: 10px;
`;

export const TypeofFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &:hover { 
        background: rgba(85, 171, 171, 0.5);
    }
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
    width:100%;
    margin-top: 15px;
`;

export const SortFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 80%;
    background: #B6E3E3;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
`;

export const SortTitle = styled.h2`
    color: #2F5E5E;
`;

export const SortButton = styled.button`
    background: white;
    color: #2F5E5E;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid grey;
    margin-left: 30px;
    font-size: 16px;

    width: 7%;
    
    &:hover {
        background: #55ABAB;
        color: white;
        border: 1px solid #55ABAB;
    }
`;
