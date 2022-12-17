import { CartItemContainer, ItemDetails } from "../../CartItem/styles";
import AvaUnknown from "../../../assets/Avaunknow/istockphoto-1223671392-612x612.jpg";
const ProductSearch = ({ cartItem }) => {
  const { name, productImage, amount, amountInCart } = cartItem;

  //   const { filename } = productImage[0].localFile; istockphoto-1223671392-612x612.jpg

  return (
    <CartItemContainer>
      <img src={`${AvaUnknown}`} alt={`${name}`} width="30px" height="50px" />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {amountInCart} x ${amount}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default ProductSearch;
