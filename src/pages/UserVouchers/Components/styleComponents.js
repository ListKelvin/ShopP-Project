import styled, {keyframes} from "styled-components";
import {up, down, only} from "styled-breakpoints";

const slide = keyframes`
    100% {
        transform: translateX(0);
    }
`;

export const VoucherListDiv = styled.div`
`;

export const SearchContainer = styled.div`
    background: rgba(182, 227, 227, 0.25);
    border-radius: .5rem;
    width: 98%;
    display: flex;
    padding: .75rem;
    margin: 0;
    align-items: center;
    justify-content: space-between;
`;

export const ShipContainer = styled(SearchContainer)`
    padding-left: .35rem;
    margin-bottom: 0.75rem;
`;

export const IconStyle = styled("div")`
    color: #55ABAB;
    font-size: 1.5em;
    display: flex;
    align-items: center;
`;

export const SearchTitle = styled.div`
    font-family: 'Open Sans';
    font-size: 1.25em;
    font-weight: 400;
    padding: 0 0.25em ;
`;

export const SearchBox = styled.form`
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 6px;
    width: 50%;
    padding: .5em;
    display: flex;
    align-items: center;
`;

export const SearchKeyWord = styled.input`
    border: none;
    padding: 0 0.5em;
    font-size: 1em;
    &:focus {
        outline: 0;
    }
    width: 96%;
`;

export const TitleContainer = styled.div`
    display: flex;
`;

export const ShipVoucherContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
`;

export const ShipTitle = styled.div`
    font-size: 1.2em;
    padding: 1em 0 .45em 0;
`;

export const VoucherContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ShipVoucherContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
`;

export const Name = styled.div`
    font-family: 'Open Sans';
    font-size: 1.1em;
`;
export const SalePrice = styled.div`
    background: #B6E3E3;
    border: 0.5px solid #55ABAB;
    border-radius: 3px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: .8em;
    line-height: .9em;
    color: #2F5E5E;
    padding: .2em;
    max-width: fit-content;
    display: flex;
    justify-content: center;
    margin: .15em 0 0.4em 0;
`;
export const Exp = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: .8em;
    line-height: .9em;
    color: #55ABAB;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 4.5em;
`;

export const FilterContainer = styled.div`
    display: flex;
    margin-bottom: 1em;
    flex-direction: column;
`;
export const Title = styled.div`
    position: relative;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1.1em;
    line-height: 1.2em;
    text-align: center;
    color: #000000;
    width: 7em;
    /* &::after {
        content: "";
        width: 7em;
        height: .5em;
        background: #55ABAB;
        opacity: 0;
        position: absolute;
        transition: .5s;
        transform: translateX(-100%);
        bottom: -1em;
        left: 0;
        right: 0;
        border-radius: .2em;
    }

    &:first-child {
        &::after {
            transform: translateX(0);
        }
    }
    &:last-child {
        &::after {
            transform: translateX(100%/3);
        }
    } */
    
    &:hover {
        cursor: pointer;
        color:  #55ABAB;
    }

    /* &:hover {
        &::after {
            background: #55ABAB;
            opacity: 1;
            animation: 1.2s ${slide} ease forwards;
        }
    } */
`;

export const TitleAfter = styled.div`
    background: #55ABAB;
    opacity: 0.5;
    width: calc(7.71em*3);
    height: 0.5em;
    border-radius: .2em;
    margin-top: .6em;
    overflow: hidden;
`;

export const TitleDiv = styled.div`
    display: flex;
    &:first-child {
        &::after { 
            transform: translateX(0);
        }
    }
`;

