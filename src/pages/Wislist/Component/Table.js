import {TableStyle, BodyStyle, Header, ShopStyle, CheckBoxStyle, ProductWidth, PriceWidth, LikeWidth, ActionWidth,Select, Delete, spaceBreak, FooterStyle, ProductStyle, Typo, Disable} from "./StyleTable"
import {Checkboxes, Checkbox2 } from "./CheckBox";
import React from 'react';
import AddToCartButton from './AddToCart';
import Product from "./Product";
import ProDis from "./ProductDisable";
const Shops = [
    {id: 0, shopName: "Computer and Accessories"},
  ];
const TableWishlist = () => {
    return (
        <>
            <TableStyle >
                <thead>
                    <Header>
                        <CheckBoxStyle style = {{borderRadius: "5px 0 0 5px"}}><Checkboxes/></CheckBoxStyle>
                        <ProductWidth>Products</ProductWidth>
                        <PriceWidth>Price</PriceWidth>
                        <LikeWidth>Liked by</LikeWidth>
                        <ActionWidth style = {{borderRadius: "0 5px 5px 0"}}>Action</ActionWidth>
                    </Header>
                </thead>
                <BodyStyle>
                    <spaceBreak><div style = {{background: "fafafa", height: "30px"}}></div></spaceBreak>
                    
                {Shops.map(({shopName, id}) => {
                    return (
                    <ShopStyle key = {id}>
                        <CheckBoxStyle><Checkbox2/></CheckBoxStyle>
                        <ProductWidth>{shopName}</ProductWidth>
                        <th></th>
                        <th></th>
                        <th></th>
                    </ShopStyle>
                    
                );})}
                
                    <Product/>
                    <ProDis />
                    <FooterStyle>
                        <CheckBoxStyle><Checkbox2/></CheckBoxStyle>
                        <ProductWidth>
                            <Select><Typo>Select all (0)</Typo></Select>
                            <Delete><Typo><a href="url" style = {{
                                color: "red",
                                textDecoration: "none"}} >
                                Delete
                            </a></Typo></Delete>
                            <Select></Select>
                            <Select></Select>
                            <Select></Select>
                        </ProductWidth>
                        <th></th>
                        <th></th>
                        <th><AddToCartButton/></th>
                    </FooterStyle>
                </BodyStyle>
            </TableStyle>
        </>
    )
}
export default TableWishlist;