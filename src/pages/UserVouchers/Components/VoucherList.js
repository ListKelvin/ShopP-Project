import React from 'react';
import {ShipContainer, IconContainer, ShipTitle, ShipVoucherContainer, VoucherContainer, ShipVoucherContent, Name, SalePrice, Exp, VoucherListDiv } from "./styleComponents"
import Button from "../../../Component/Button";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';

const ShipVoucher = [
  {id: 1, name: "All products and forms of payment", minBillPrice: 100000, priceDiscount: 50, maxPriceDiscount: 20000, mfgDate: "01/01/2023", expDate: "02/02/2023"},
  {id: 2, name: "Apply for some certain shop", minBillPrice: 100000, priceDiscount: 50, maxPriceDiscount: 20000, mfgDate: "01/01/2023", expDate: "02/02/2023"},
  {id: 3, name: "Apply for some certain shop", minBillPrice: 100000, priceDiscount: 50, maxPriceDiscount: 20000, mfgDate: "01/01/2023", expDate: "02/02/2023"},
];

const ShopVoucher = [
  {id: 1, name: "Discount 90%", minBillPrice: 100000, priceDiscount: 50, maxPriceDiscount: 20000, mfgDate: "01/01/2023", expDate: "02/02/2023"},
  {id: 2, name: "Discount 90%", minBillPrice: 100000, priceDiscount: 50, maxPriceDiscount: 20000, mfgDate: "01/01/2023", expDate: "02/02/2023"},
  {id: 3, name: "Discount 90%", minBillPrice: 100000, priceDiscount: 50, maxPriceDiscount: 20000, mfgDate: "01/01/2023", expDate: "02/02/2023"},
];

const VoucherList = ({label, titles, status, title}) => {
  return (
  <VoucherListDiv>
        {label === "Ship" ?
      <ShipVoucherContainer>
        <ShipTitle>{titles}</ShipTitle>
        {ShipVoucher.map(({id, name, minBillPrice, priceDiscount, maxPriceDiscount, mfgDate, expDate}) => {
          return(
        <ShipContainer key = {id}>
          <VoucherContainer>
            <IconContainer>{status === "ship" ? <LocalShippingIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/> : <StorefrontIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/>}</IconContainer>
            <ShipVoucherContent>
              <Name>{name}</Name>
              <SalePrice>Min price: ${minBillPrice} sale ${priceDiscount}, Max sale: ${maxPriceDiscount}</SalePrice>
              <Exp>Time: {mfgDate} - {expDate}</Exp>
            </ShipVoucherContent>
          </VoucherContainer>
          <Button>Apply</Button>
        </ShipContainer>
          );
      })}
      </ShipVoucherContainer>
      : 
      <ShipVoucherContainer>
        <ShipTitle>{titles}</ShipTitle>
        {ShopVoucher.map(({id, name, minBillPrice, priceDiscount, maxPriceDiscount, mfgDate, expDate}) => {
          return(
        <ShipContainer key = {id}>
          <VoucherContainer>
            <IconContainer>{status === "ship" ? <LocalShippingIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/> : <StorefrontIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/>}</IconContainer>
            <ShipVoucherContent>
              <Name>{name}</Name>
              <SalePrice>Min price: ${minBillPrice} sale ${priceDiscount}, Max sale: ${maxPriceDiscount}</SalePrice>
              <Exp>Time: {mfgDate} - {expDate}</Exp>
            </ShipVoucherContent>
          </VoucherContainer>
          <Button>Apply</Button>
        </ShipContainer>
          );
      })}
      </ShipVoucherContainer>
      }
    </VoucherListDiv>
    )
};

export default VoucherList;
