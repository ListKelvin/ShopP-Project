import {
  CheckBoxStyle,
  ProductTag,
  PriceTag,
  AmountTag,
  TotalTag,
  ActionTag,
  Image,
  ProductName,
} from "./StyleTable";
import ImgBrand from "../../../assets/image 68.svg";
import { Checkbox2 } from "./CheckBox";
import { clearCartItem, setCartItems } from "../../../slices/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../selectors/cartSelector";
const Product = ({ item }) => {
  const { filename } = item.productImage[0].localFile;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // console.log(item.productImage[0].localFile.filename);
  return (
    <>
      <CheckBoxStyle>
        <Checkbox2 />
      </CheckBoxStyle>
      <Image>
        <img
          src={`https://shopp-be.lethanhlong.me/file/${filename}`}
          width="80px"
          height="80px"
          alt=""
        />
        {item.name}
      </Image>

      <PriceTag>{item.amount} VND</PriceTag>
      <AmountTag>{item.amountInCart}</AmountTag>
      <TotalTag>{item.amount * item.amountInCart}</TotalTag>
      <ActionTag>
        <button
          onClick={() => {
            dispatch(setCartItems(clearCartItem(cartItems, item)));
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color: "red",
            textDecoration: "none",
          }}
        >
          Delete
        </button>
      </ActionTag>
    </>
  );
};

export default Product;
