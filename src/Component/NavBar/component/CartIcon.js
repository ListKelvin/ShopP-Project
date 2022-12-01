import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen } from "../../../selectors/cartSelector";
import { setCartOpen } from "../../../slices/cartReducer";
const CartIcon = () => {
  const dispatch = useDispatch();

  //   const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setCartOpen(!isCartOpen));
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      sx={{ color: "white" }}
      onClick={toggleIsCartOpen}
    >
      <Badge badgeContent={2} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
