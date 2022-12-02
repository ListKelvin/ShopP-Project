import styled from "styled-components";

// import {
//   BaseButton,
//   GoogleSignInButton,
//   InvertedButton,
// } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  // padding: 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: white;
  top: 60px;
  right: 160px;

  z-index: 5;
  &:before {
    content: "";
    position: absolute;
    top: -15px;
    right: 0px;
    z-index: -1;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid #ffffff;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CartInfoWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;
export const TotalCartItems = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  color: #464646;
`;

export const ButtonAddToCart = styled.button`
  // width: 60px;
  // height: 20px;
  padding: 5px 10px;
  background: #55abab;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: ease-out 0.1s;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
