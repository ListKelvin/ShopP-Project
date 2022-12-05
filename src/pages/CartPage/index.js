import React from "react";
import { EmptyCart } from "./Component CartPage/EmptyCart";
import TableCart from "./Component CartPage/Table";
import TestProductTable from "./TestProduct";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../selectors/cartSelector";
import TitleCartPage from "./Component CartPage/Title";
import List from "./Product";
const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      {" "}
      <TitleCartPage />
      {cartItems.length === 0 ? <EmptyCart /> : <TableCart />}
    </>
  );
};

export default CartPage;
