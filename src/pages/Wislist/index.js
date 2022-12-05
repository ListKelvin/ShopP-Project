import React from "react";
import TableWishlist from "./Component/Table";
import Title from "./Component/Title";
import WishlistEmpty from "./Component/WishlistEmpty";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../selectors/cartSelector";
const Wishlist = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <Title />
      {cartItems.length === 0 ? <WishlistEmpty /> : <TableWishlist />}
    </>
  );
};

export default Wishlist;
