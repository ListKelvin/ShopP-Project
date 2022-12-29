import { style } from "@mui/system";
import styled from "styled-components";

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
