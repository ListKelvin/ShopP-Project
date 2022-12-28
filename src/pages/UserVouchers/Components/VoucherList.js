import React from 'react';
import {ShipContainer, IconContainer, ShipTitle, ShipVoucherContainer, VoucherContainer, ShipVoucherContent, Name, SalePrice, Exp, VoucherListDiv } from "./styleComponents"
import Button from "../../../Component/Button";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';

const ShipVoucher = [
  {id: 1, name: "All products and forms of payment", saleprice: 20, exp: "29/09/2022"},
  {id: 2, name: "Apply for some certain shop", saleprice: 30, exp: "30/09/2022"},
  {id: 3, name: "Apply for some certain shop", saleprice: 25, exp: "01/10/2022"},
];

const ShopVoucher = [
  {id: 1, name: "Discount 90%", minPrice: 200, maxSale: 20, exp: "29/09/2022"},
  {id: 2, name: "Discount 90%", minPrice: 300, maxSale: 20, exp: "30/09/2022"},
  {id: 3, name: "Discount 90%", minPrice: 250, maxSale: 20, exp: "01/10/2022"},
];

const VoucherList = ({label, titles, status, elements}) => {
  return (
  <VoucherListDiv>
        {label === "Ship" ?
      <ShipVoucherContainer>
        <ShipTitle>{titles}</ShipTitle>
        {ShipVoucher.map(({id, name, saleprice, exp}) => {
          return(
        <ShipContainer key = {id}>
          <VoucherContainer>
            <IconContainer>{status === "ship" ? <LocalShippingIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/> : <StorefrontIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/>}</IconContainer>
            <ShipVoucherContent>
              <Name>{name}</Name>
              <SalePrice>Max ${saleprice}</SalePrice>
              <Exp>Exp: {exp}</Exp>
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
        {ShopVoucher.map(({id, name, minPrice, maxSale, exp}) => {
          return(
        <ShipContainer key = {id}>
          <VoucherContainer>
            <IconContainer>{status === "ship" ? <LocalShippingIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/> : <StorefrontIcon sx = {{color: "#55ABAB", fontSize: "4em"}}/>}</IconContainer>
            <ShipVoucherContent>
              <Name>{name}</Name>
              <SalePrice>Min price: ${minPrice}, Max sale: ${maxSale}</SalePrice>
              <Exp>Exp: {exp}</Exp>
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
