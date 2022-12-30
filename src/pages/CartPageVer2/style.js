import styled from "styled-components";
import { Link } from "react-router-dom";
import Flexbox from "../../Component/Flexbox";
import Button from "../../Component/Button";
export const ContainerV2 = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;
export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #55abab;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;
  overflow: hidden;
  border-radius: 8px;
  height: 55px;
  font-size: 14px;
  margin-bottom: 12px;
  color: #888;
  padding: 0 20px;
`;
export const ItemTable = styled.div`
  color: rgba(0, 0, 0, 0.8);
  width: 15.4265%;
  text-align: center;
`;
export const ItemPrice = styled(ItemTable)`
  width: 15.88022%;
`;
export const ItemAmount = styled(ItemTable)`
  width: 15.4265%;
`;
export const ItemTotal = styled(ItemTable)`
  width: 10.43557%;
`;
export const ItemAction = styled(ItemTable)`
  width: 12.70417%;
`;
export const Item = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;
  overflow: hidden;
  background: #b6e3e3;
  overflow: visible;
  margin-bottom: 0.9375rem;
  width: 100%;
  border-radius: 8px;
`;
export const ShopContainer = styled.div`
  //   height: 3.75rem;
  box-sizing: border-box;

  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding: 0 20px;
`;
export const ShopInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 3.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
export const CheckBoxWrap = styled.div`
  padding: 0 12px 0 20px;
  display: flex;
  flex-direction: row-reverse;
  min-width: 58px;
  box-sizing: border-box;
`;

export const Wrap = styled.div`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  margin-top: 0;
  padding: 16px 0;
  padding-bottom: 20px;
`;
export const StyleDiv = styled.div`
  width: 29.03811%;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
`;
export const TitleH1 = styled.span`
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 33px;
  width: fit-content;
  padding: 10px;
  color: #2f5e5e;
  margin-left: 1px;
`;
export const TitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;
export const LinkImg = styled(Link)`
  position: relative;
  width: 100px;
  height: 100px;
  padding: 5px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export const LinkName = styled(Link)`
  max-width: 300px;
  // height: 4rem;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* text-overflow: clip; */
`;
export const Classification = styled.span`
  display: flex;
  max-width: 200px;
  justify-content: space-between;
  align-item: center;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

////// Cart Footer ////
export const CartFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 20.3125rem 11.875rem;
  align-items: center;
  box-sizing: border-box;
  background: #b6e3e3;
  width: 100%;
  flex: 1;
  font-size: 1rem;
  // position: relative;
  z-index: 2;
  border: 2px solid #55abab;
  position: sticky;
  bottom: 0;
  border-radius: 8px;
  margin-top: 0.75rem;
`;

export const ToolFooter = styled.div`
  padding: 12px 0;
  // grid-column-start: 1;
  // grid-column-end: 4;
  // -ms-grid-column-span: 3;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  width: 100%;
`;
export const SelectAllProduct = styled.button`
  border: none;
  background: transparent;
  margin: 0 8px;
  cursor: pointer;
  display: flex;
`;

export const DeleteProduct = styled(SelectAllProduct)`
  color: #f64a4a;
  transition: all 0.4s;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: #ff5c5c;
  }
`;

export const VoucherBtn = styled(SelectAllProduct)`
  display: flex;
  color: blue;
  opacity: 0.5;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  padding: 0 5px;
`;
export const WrapBtn = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
