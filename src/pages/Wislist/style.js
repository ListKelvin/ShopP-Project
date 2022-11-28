import styled from "styled-components";
import useMediaQuery from "./Component/Responsive";
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
  background: #B6E3E3;
  border-radius: 20px;
`;

export const WishlistIcon = styled.div`
  width: 250px;
  height: 250px;
  color: yellow;
`;
export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery("(max-width: 640px)"),
    isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
    isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: useMediaQuery("(min-width: 1025px)"),
    active: "xs"
  };
  if (breakpoints.isXs) breakpoints.active = "xs";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  return breakpoints;
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  `;
