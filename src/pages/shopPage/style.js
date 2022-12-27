import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const ShopContainer = styled.div`
  min-height: 5rem;
  border-radius: 30px;
  padding: 1rem 3rem;
  background: #ffffff;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.031),
    0px 0px 17.9px rgba(0, 0, 0, 0.035), 0px 0px 80px rgba(0, 0, 0, 0.05);
`;
export const BackgroundShop = styled.div`
  height: 100%;
  background: ${({ url }) => (url ? `url(${url})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(2px);
`;

export const ShopWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  transform: translate(-50%, -50%);
`;
export const ShopInfo = styled.div`
  min-height: 10rem;
  min-width: 23rem;
  position: relative;
  width: 10rem;
  height: 10rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
`;

export const ShopName = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ShopDetailWrapper = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  padding: 1rem;
`;
export const WrapperShopStyle = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
