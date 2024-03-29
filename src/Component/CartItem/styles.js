import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  //   margin-bottom: 5px;
  transition: ease-in 0.2s;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 5;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  &:hover {
    background-color: #ededed;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  //   flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #333333;
  }
`;
