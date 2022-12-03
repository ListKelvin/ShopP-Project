import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Button from "../button/button.component";
import CartItem from "../CartItem";
import { selectCartItems } from "../../selectors/cartSelector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartInfoWrapper,
  TotalCartItems,
  ButtonAddToCart,
} from "./CartDropDown.styles";
const cartItems = [
  {
    id: "1",
    name: "Item 1",
    imageUrl:
      "https://th.bing.com/th/id/R.8c682824f8970b3ecb1fa253f4329d98?rik=QP%2ftkfKN6UEOgg&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2017%2f11%2f05%2fhinh-nen-4k-dep-10_124945.jpg&ehk=%2fR3uXbmRi7sZ0KF13%2bBx5WwvaZEnoLHRbzWQhHWRa18%3d&risl=&pid=ImgRaw&r=0",
    price: 10,
    quantity: 1,
  },
  {
    id: "2",
    name: "Item 2",
    imageUrl:
      "https://th.bing.com/th/id/R.8c682824f8970b3ecb1fa253f4329d98?rik=QP%2ftkfKN6UEOgg&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2017%2f11%2f05%2fhinh-nen-4k-dep-10_124945.jpg&ehk=%2fR3uXbmRi7sZ0KF13%2bBx5WwvaZEnoLHRbzWQhHWRa18%3d&risl=&pid=ImgRaw&r=0",
    price: 13,
    quantity: 4,
  },
];
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const navigate = useNavigate();

  // const goToCheckoutHandler = () => {
  //   navigate("/checkout");
  // };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartInfoWrapper>
        <TotalCartItems> Count</TotalCartItems>
        <ButtonAddToCart>My Cart</ButtonAddToCart>
      </CartInfoWrapper>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
