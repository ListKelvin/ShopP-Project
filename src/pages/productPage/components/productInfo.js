import { ProductName, ProductEvaluated, SmallDescription } from "../styled";
import CountDown from "../../../Component/Countdown/CountDown";
import { ReactComponent as FlashIcon } from "../../../assets/image 68.svg";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import { selectCartItems } from "../../../selectors/cartSelector";
import { addCartItem } from "../../../slices/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../../slices/cartReducer";
const ProductInfo = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  console.log(cartItems);
  console.log(product);

  return (
    <>
      <ProductName> {product.name}</ProductName>
      <ProductEvaluated>
        <div>
          {product.star}
          <Rating
            name="simple-controlled"
            value={product.star}
            sx={{ fontSize: "14px" }}
            precision={0.5}
            readOnly
          />
        </div>
        <div style={{ color: "#000000", fontWeight: "600" }}>
          3.7K <SmallDescription>Evaluation</SmallDescription>
        </div>
        <div style={{ color: "#000000", fontWeight: "600" }}>
          {product.sold} <SmallDescription>Sold</SmallDescription>
        </div>
      </ProductEvaluated>
      <div
        className="CountDownn"
        style={{
          width: "100%",
          height: "50px",
          background: "#2F5E5E",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#ffffff",
          marginBottom: "10px",
        }}
      >
        <div className="" style={{ display: "flex", marginLeft: "20px" }}>
          <FlashIcon />
          FLASH SALE
        </div>
        <div
          className=""
          style={{
            display: "flex",
            marginRight: "30px",
            justifyContent: "space-between",
          }}
        >
          <CountDown />
          <button
            style={{
              background: "#B6E3E3",
              padding: "10px 10px",
              border: "none",
              borderRadius: "10px",
            }}
          >
            See All
          </button>
        </div>
      </div>
      <div>
        {" "}
        Shop Voucher{" "}
        <Chip
          label="-30%"
          size="small"
          sx={{
            color: "#55ABAB",
            backgroundColor: " #B6E3E3",
          }}
        />
      </div>
      <div>
        <div> additional infor</div>
      </div>
      <div>{product.quantity} quantity</div>
      <button
        onClick={() => {
          dispatch(setCartItems(addCartItem(cartItems, product)));
        }}
      >
        {" "}
        add to cart
      </button>
    </>
  );
};

export default ProductInfo;
