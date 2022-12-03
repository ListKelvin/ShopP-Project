import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { up, down, between, only, createTheme } from 'styled-breakpoints';
import { fontSize } from '@mui/system';
import { WishlistButton, TypoButton } from './StyleTable';

export default function AddToCartButton() {
    return (
      <WishlistButton variant="contained" disableElevation 
      style = {{
        backgroundColor: "#55ABAB",
        marginRight: "10px"
      }}
      >
      <ShoppingCartIcon></ShoppingCartIcon>
        <TypoButton>Add to cart</TypoButton>
      </WishlistButton>
    );
};
