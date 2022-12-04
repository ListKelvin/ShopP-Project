import { CartItemContainer, ItemDetails } from "./styles";

const CartItem = ({ cartItem }) => {
  const { name, productImage, amount, amountInCart } = cartItem;

  const { filename } = productImage[0].localFile;

  return (
    <CartItemContainer>
      <img
        src={`https://shopp-be.lethanhlong.me/file/${filename}`}
        alt={`${name}`}
      />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {amountInCart} x ${amount}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
