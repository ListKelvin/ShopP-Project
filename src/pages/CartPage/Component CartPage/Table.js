import {TableStyle, BodyStyle, Header, ShopStyle, CheckBoxStyle, ProductTag, PriceTag, AmountTag, TotalTag, ActionTag, Select, Delete, spaceBreak, FooterStyle, ProductStyle} from "./StyleTable"
import {Checkboxes, Checkbox2 } from "./CheckBox";
import React from 'react';
import AddToCartButton from './AddToCart';
import Product from "./Product";
const Shops = [
    {id: 0, shopName: "Panasonic"},
  ];
const TableCart = () => {
    return (
        <>
            <TableStyle>
                <thead>
                    <Header>
                        <CheckBoxStyle><Checkboxes/></CheckBoxStyle>
                        <ProductTag>Products</ProductTag>
                        <PriceTag>Price</PriceTag>
                        <AmountTag>Amount</AmountTag>
                        <TotalTag>Total</TotalTag>
                        <ActionTag>Action</ActionTag>
                    </Header>
                </thead>
                <BodyStyle>
                    <spaceBreak><span style = {{color: "white"}}>a</span></spaceBreak>
                    
                {Shops.map(({shopName, id}) => {
                    return (
                    <ShopStyle>
                        <CheckBoxStyle><Checkbox2/></CheckBoxStyle>
                        <ProductTag>{shopName}</ProductTag>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </ShopStyle>
                    
                );})}
                    <ProductStyle>
                        <Product/>
                    </ProductStyle>
                    <ProductStyle>
                        <Product/>
                    </ProductStyle>
                    <ProductStyle>
                        <Product/>
                    </ProductStyle>
                    <FooterStyle>
                        <CheckBoxStyle><Checkbox2/></CheckBoxStyle>
                        <ProductTag>
                            <Select>Select all (quantity)</Select>
                            <Delete><a href="url" style = {{
                                color: "red",
                                textDecoration: "none"}} >
                                Delete
                            </a></Delete>
                            <Select></Select>
                            <Select></Select>
                        </ProductTag>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><AddToCartButton/></th>
                    </FooterStyle>
                </BodyStyle>
            </TableStyle>
        </>
    )
}
export default TableCart;