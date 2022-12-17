import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserMenu = styled.div`
  max-width: 140px;
  padding: 10px 0px;
  position: absolute;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: white;
  top: 60px;
  overflow: hidden;
  right: 160px;
`;
export const UserItem = styled(Link)`
  text-decoration: none;
  color: #000;
  transition: all 0.2s;
  //   padding: 10px 20px;
  text-align: center;
  width: 140px;
  &:hover {
    color: #2f5e5e;
    background-color: #b6e3e3;
  }
`;
export const ProductSearchResult = styled.div`
  position: absolute;
  width: 56ch;
  height: 200px;
  display: ${(props) => (props.search ? "flex" : "none")};
  flex-direction: column;
  // padding: 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  top: 4rem;
  right: 38rem;
  overflow: hidden;
  overflow-y: scroll;
`;
