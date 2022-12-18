import styled from "styled-components";
import { up, down, between, only, createTheme } from "styled-breakpoints";
import { Link } from "react-router-dom";
export const StyleTable = styled.table`
  width: 250px;
  height: 480px;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-family: "League Spartan";
  background-color: #b6e3e3;
  border-radius: 16px;
  text-align: left;
  position: sticky;
  top: 150px;
  ${down("lg")} {
    width: 200px;
  }
  ${down("md")} {
    width: 160px;
    min-width: 150px;
    height: 420px;
  }
  ${down("sm")} {
    display: none;
  }
`;
export const TypoTitle = styled.span`
  font-family: "League Spartan";
  font-weight: 500;
  font-size: 18px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #2f5e5e;
  &:active {
    font-weight: bold;
  }
  ${down("md")} {
    font-size: 15px;
  }
  ${only("md")} {
    font-size: 16px;
  }
`;

export const IconStyle = styled.td`
  color: #2f5e5e;
  width: 25%;
  text-align: center;
  vertical-align: middle;
  ${down("md")} {
    width: 36px;
  }
`;
export const TitleStyle = styled.div`
  font-size: 24px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #2f5e5e;
  font-weight: 700;
  text-align: left;
  width: 100%;
  padding: 1rem 2.5rem;
  ${down("md")} {
    font-size: 20px;
  }
`;

export const StyleOfTr = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  &:hover {
    background-color: rgba(85, 171, 171, 0.5);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const LogTr = styled.tr`
  height: 40px;
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

export const ChangePasswordDiv = styled.div`
  display: flex;
  justify-content: space-around;
  ${down("sm")} {
    display: flex;
    justify-content: center;
  }
`;

export const WrapperSettings = styled.div`
  width: 250px;

  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-family: "League Spartan";
  background-color: #b6e3e3;
  border-radius: 16px;
  text-align: left;
  position: sticky;
  top: 150px;
  ${down("lg")} {
    width: 200px;
  }
  ${down("md")} {
    width: 160px;
    min-width: 150px;
    height: 420px;
  }
  ${down("sm")} {
    display: none;
  }
`;
export const LinkStyle = styled(Link)`
  width: 100%;
  padding: 0.5rem 0;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

  color: #2f5e5e;
  &:hover {
    background-color: rgba(85, 171, 171, 0.5);
    cursor: pointer;
    transition: 0.3s;
  }
`;
export const WrapperLinked = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
