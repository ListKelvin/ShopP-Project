import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminDashBoardContainer = styled.div`
  background: #B6E3E3;
  max-width: fit-content;
  padding: 1em 0;
  border-radius: 0;
  position: absolute;
  left: 0;
  top: 9rem;
  bottom: 0;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const TitleStyle = styled(Link)`
  color: #55ABAB;
  text-decoration: none;
  &:active {
    color: #55ABAB;
  }
`;
export const IconStyle = styled.div`
  color: #2F5E5E;
  margin-right: .5em;
  display: flex;
  align-items: center;
`;

export const FuncDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 5em 0.5em 1em;
  transition: all .3s;
  &:hover {
    background: rgba(85, 171, 171, 0.5);
    cursor: pointer;
  }
`;