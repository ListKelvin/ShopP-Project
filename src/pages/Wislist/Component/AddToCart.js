import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function AddToCartButton() {
    return (
      <Button variant="contained" disableElevation style = {{
        textTransform: "none",
        backgroundColor: "#55ABAB",
      }}
      >
      <ShoppingCartIcon></ShoppingCartIcon>
        <span style = {{marginLeft: "10px"}}>Add to cart</span>
      </Button>
    );
};
