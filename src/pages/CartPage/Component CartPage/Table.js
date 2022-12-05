import {
  TableStyle,
  BodyStyle,
  Header,
  ShopStyle,
  CheckBoxStyle,
  ProductTag,
  PriceTag,
  AmountTag,
  TotalTag,
  ActionTag,
  Select,
  Delete,
  SpaceBreak,
  FooterStyle,
  ProductStyle,
} from "./StyleTable";
import { Checkboxes, Checkbox2 } from "./CheckBox";
import React from "react";
import { useSelector } from "react-redux";
import AddToCartButton from "./AddToCart";
import Product from "./Product";
import { selectCartItems } from "../../../selectors/cartSelector";

const TableCart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <TableStyle>
        <thead>
          <Header>
            <CheckBoxStyle>
              <Checkboxes />
            </CheckBoxStyle>
            <ProductTag>Products</ProductTag>
            <PriceTag>Price</PriceTag>
            <AmountTag>Amount</AmountTag>
            <TotalTag>Total</TotalTag>
            <ActionTag>Action</ActionTag>
          </Header>
        </thead>
        <BodyStyle>
          {cartItems.map((item) => {
            return (
              <>
                <SpaceBreak>
                  <span style={{ color: "white" }}>a</span>
                </SpaceBreak>
                <ShopStyle>
                  <CheckBoxStyle>
                    <Checkbox2 />
                  </CheckBoxStyle>
                  <ProductTag>
                    {item.shop === null ? "NoName" : item.shop.name}
                  </ProductTag>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </ShopStyle>
                <ProductStyle>
                  <Product item={item} />
                </ProductStyle>
              </>
            );
          })}

          <FooterStyle>
            <CheckBoxStyle>
              <Checkbox2 />
            </CheckBoxStyle>
            <ProductTag>
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
            </ProductTag>
            <th></th>
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
export default TableCart;
