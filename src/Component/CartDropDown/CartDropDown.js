import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Button from "../button/button.component";
// import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../selectors/cartSelector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  // const goToCheckoutHandler = () => {
  //   navigate("/checkout");
  // };

  return (
    <CartDropdownContainer>
      <CartItems>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </CartItems>
    </CartDropdownContainer>
  );
  // {cartItems.length ? (
  //   cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
  // ) : (        )}
};

export default CartDropdown;
