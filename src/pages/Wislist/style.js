import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';

export const theme = createTheme({
  sm: '302px',
  md: '768px',
  lg: '900',
  xl: '980',
});

export const TableStyle = styled.table `
    border-collapse: collapse;
    font-size: 1em;
    font-family: 'Open Sans';
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
export const Header = styled.tr`
    background-color: "#55ABAB";
`;

export const TitleH1 = styled.span`
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 33px;
  width: fit-content;
  padding: 10px;
  color: #2F5E5E;
  margin-left: 1px;
`;

export const TitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  `;
//empty wishlist
export const textEmpty = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2F5E5E;
`;

export const EmptyBox = styled.div`
  width: 439px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #B6E3E3;
  border-radius: 20px;
  ${down('sm')} {
    width: 250px;
    height: 250px;
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  ${down('sm')} {
    width: 140px;
    height: 140px;
  }
`;

