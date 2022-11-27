import {
  TableStyle,
  BodyStyle,
  Header,
  ShopStyle,
  CheckBoxStyle,
  ProductWidth,
  PriceWidth,
  LikeWidth,
  ActionWidth,
  Select,
  Delete,
  spaceBreak,
  FooterStyle,
  ProductStyle,
} from "./StyleTable";
import { Checkboxes, Checkbox2 } from "./CheckBox";
import React from "react";
import AddToCartButton from "./AddToCart";
import Product from "./Product";
const Shops = [{ id: 0, shopName: "Computer and Accessories" }];
const TableWishlist = () => {
  return (
    <>
      <TableStyle>
        <thead>
          <Header>
            <CheckBoxStyle>
              <Checkboxes />
            </CheckBoxStyle>
            <ProductWidth>Products</ProductWidth>
            <PriceWidth>Price</PriceWidth>
            <LikeWidth>Liked by</LikeWidth>
            <ActionWidth>Action</ActionWidth>
          </Header>
        </thead>
        <BodyStyle>
          <spaceBreak>
            <span style={{ color: "white" }}>a</span>
          </spaceBreak>

          {Shops.map(({ shopName, id }) => {
            return (
              <ShopStyle>
                <CheckBoxStyle>
                  <Checkbox2 />
                </CheckBoxStyle>
                <ProductWidth>{shopName}</ProductWidth>
                <th></th>
                <th></th>
                <th></th>
              </ShopStyle>
            );
          })}
          <ProductStyle>
            <Product />
          </ProductStyle>
          <ProductStyle>
            <Product />
          </ProductStyle>
          <ProductStyle>
            <Product />
          </ProductStyle>
          <FooterStyle>
            <CheckBoxStyle>
              <Checkbox2 />
            </CheckBoxStyle>
            <ProductWidth>
              <Select>Select all (quantity)</Select>
              <Delete>
                <a
                  href="url"
                  style={{
                    color: "red",
                    textDecoration: "none",
                  }}
                >
                  Delete
                </a>
              </Delete>
              <Select></Select>
              <Select></Select>
            </ProductWidth>
            <th></th>
            <th></th>
            <th>
              <AddToCartButton />
            </th>
          </FooterStyle>
        </BodyStyle>
      </TableStyle>
    </>
  );
};
export default TableWishlist;
