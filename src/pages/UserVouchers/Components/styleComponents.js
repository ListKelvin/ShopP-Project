import styled, { keyframes } from "styled-components";
import { up, down, only } from "styled-breakpoints";

const slide = keyframes`
    100% {
        transform: translateX(0);
    }
`;

export const VoucherListDiv = styled.div``;

export const SearchContainer = styled.div`
  background: rgba(182, 227, 227, 0.25);
  border-radius: 0.5rem;
  width: 98%;
  display: flex;
  padding: 0.75rem;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;
export const StyledSearchContainer = styled(SearchContainer)`
  width: 100%;
  height: 50px;
`;
export const ShipContainer = styled(SearchContainer)`
  padding-left: 0.35rem;
  margin-bottom: 0.75rem;
`;

export const IconStyle = styled("div")`
  color: #55abab;
  font-size: 1.5em;
  display: flex;
  align-items: center;
`;

export const SearchTitle = styled.div`
  font-family: "Open Sans";
  font-size: 1.25em;
  font-weight: 400;
  padding: 0 0.25em;
`;

export const SearchBox = styled.form`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  width: 50%;
  padding: 0.5em;
  display: flex;
  align-items: center;
`;
export const SearchBoxStyle = styled(SearchBox)`
  padding: 0.2em;
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
  padding: 1em 0 0.45em 0;
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
  font-family: "Open Sans";
  font-size: 1.1em;
`;
export const SalePrice = styled.div`
  background: #b6e3e3;
  border: 0.5px solid #55abab;
  border-radius: 3px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 0.8em;
  line-height: 0.9em;
  color: #2f5e5e;
  padding: 0.2em;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  margin: 0.15em 0 0.4em 0;
`;
export const Exp = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 0.9em;
  color: #55abab;
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
export const Title = styled.button`
  position: relative;
  //   font-family: "Open Sans";
  font-weight: 400;
  font-size: 1.1em;
  line-height: 1.2em;
  text-align: center;
  color: #000000;
  cursor: pointer;
  width: 7em;
  border: 0;
  outline: 0;
  //   opacity: 0.6;
  background: #ffffff;

  ${({ active }) =>
    active &&
    `
  border-bottom: 2px solid black;
//   opacity: 1;
`}
  &::after {
    content: "";
    width: 7em;
    height: 0.5em;
    background: #55abab;
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    transform: translateX(-100%);
    bottom: -1em;
    left: 0;
    right: 0;
    border-radius: 0.2em;
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
  }

  &:hover {
    cursor: pointer;
    color: #55abab;
  }

  //   /* &:hover {
  //         &::after {
  //             background: #55ABAB;
  //             opacity: 1;
  //             animation: 1.2s ${slide} ease forwards;
  //         }
  //     } */
`;

export const TitleAfter = styled.div`
  background: #55abab;
  opacity: 0.5;
  width: calc(7.71em * 3);
  height: 0.5em;
  border-radius: 0.2em;
  margin-top: 0.6em;
  overflow: hidden;
`;

export const TitleDiv = styled.div`
  display: flex;
  // &:first-child {
  //     &::after {
  //         transform: translateX(0);
  //     }
  // }
`;
