import { CartItemContainer, ItemDetails } from "./styles";
import AvaUnknown from "../../assets/Avaunknow/istockphoto-1223671392-612x612.jpg";
const CartItem = ({ cartItem }) => {
  const { name, productImage, amount, amountInCart } = cartItem;

  const { filename } = productImage.localFile;

  return (
    <CartItemContainer>
      <img
        src={
          productImage
            ? `https://shopp-be.lethanhlong.me/file/${filename}`
            : `${AvaUnknown}`
        }
        alt={`${name}`}
        width="30px"
        height="50px"
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
