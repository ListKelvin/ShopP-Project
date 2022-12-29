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
// import { clearCartItem, setCartItems } from "../../../slices/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../selectors/cartSelector";
import { addToCart } from "../../../slices/cartReducer";
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
      <AmountTag>{item.cartQuantity}</AmountTag>
      <TotalTag>{item.amount * item.cartQuantity}</TotalTag>
      <ActionTag>
        <button
          // onClick={() => {
          //   dispatch(addToCart(item));
          // }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color: "red",
            textDecoration: "none",
          }}
        >
          add to cart
        </button>
      </ActionTag>
    </>
  );
};

export default Product;

// const Total = ({ products }) => (
//   <h3>
//     Price:
//     {products.reduce((sum, i) => (
//       sum += i.count * i.price
//     ), 0)}
//   </h3>
