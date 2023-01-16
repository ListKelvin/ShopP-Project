import styled from "styled-components";
import Flexbox from "../../../Component/Flexbox";
import { Link } from "react-router-dom";
import { up, down } from "styled-breakpoints";
export const TitleStyle = styled.h2`
  color: #2f5e5e;
  font-size: 1.25em;
  padding: 0.45em 0 0 1em;
`;

export const IconStyle = styled(Flexbox)`
  justify-content: center;
  align-items: center;
  background: #2f5e5e;
  color: white;
  min-height: 35px;
  max-height: 35px;
  min-width: 35px;
  max-width: 35px;
  border-radius: 50%;
`;

export const FuncContainer = styled(Flexbox)`
  padding: 0.5em 1em;
  transition: all 0.3s;
  &:hover {
    background: rgba(85, 171, 171, 0.5);
    cursor: pointer;
  }
  align-items: center;
`;

export const FuncDiv = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #2f5e5e;

  font-family: "League Spartan";
  // letter-spacing: 0.02em;
  // margin-left: 0.5em;
  min-width: fit-content;
  padding-right: 3em;
  &:active {
    font-weight: bold;
  }
  ${down("sm")} {
  }
`;
