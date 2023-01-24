import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen } from "../../../selectors/cartSelector";
import { setCartOpen } from "../../../slices/cartReducer";

import { selectCartItems } from "../../../selectors/cartSelector";
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setCartOpen(!isCartOpen));
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      sx={{ color: "white" }}
      onClick={toggleIsCartOpen}
    >
      <Badge
        invisible={cartItems?.length === 0 ? true : false}
        badgeContent={cartItems?.length !== 0 && cartItems?.length}
        color="error"
      >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
