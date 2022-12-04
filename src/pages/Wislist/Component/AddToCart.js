import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { WishlistButton, TypoButton } from "./StyleTable";
export default function AddToCartButton({ ...rest }) {
  return (
    <WishlistButton
      variant="contained"
      disableElevation
      style={{
        backgroundColor: "#55ABAB",
        marginRight: "10px",
      }}
    >
      <ShoppingCartIcon></ShoppingCartIcon>
      <TypoButton>Add to cart</TypoButton>
    </WishlistButton>
  );
}
