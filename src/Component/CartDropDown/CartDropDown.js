import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Button from "../button/button.component";
import CartItem from "../CartItem";
import { selectCartItems } from "../../selectors/cartSelector";
import { ProductLink } from "../../pages/Home/style";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartInfoWrapper,
  TotalCartItems,
  ButtonAddToCart,
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
        {cartItems.length ? (
          cartItems.map((item) => (
            <ProductLink to={`productpage/${item.id}`} key={item.id}>
              {" "}
              <CartItem cartItem={item} />{" "}
            </ProductLink>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartInfoWrapper>
        <TotalCartItems> Count</TotalCartItems>
        <ButtonAddToCart to="cart">My Cart</ButtonAddToCart>
      </CartInfoWrapper>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
