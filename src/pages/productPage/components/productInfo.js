import {
  ProductName,
  ProductEvaluated,
  SmallDescription,
  ContainerAdditional,
  ShopVoucherContainer,
} from "../styled";
import CountDown from "../../../Component/Countdown/CountDown";
import { ReactComponent as FlashIcon } from "../../../assets/image 68.svg";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import { selectCartItems } from "../../../selectors/cartSelector";
import { addCartItem } from "../../../slices/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../../slices/cartReducer";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Button from "../../../Component/Button";
const Voucher = [
  { id: 1, label: "Discount -30%" },
  { id: 2, label: "Discount -50%" },
  { id: 3, label: "Discount -10%" },
  // { id: 4, label: "Discount -55%" },
  // { id: 5, label: "Discount -20%" },
  // { id: 6, label: "Discount -90%" },
  // { id: 7, label: "Discount -90%" },
];
const ProductInfo = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

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
      <ContainerAdditional>
        <ShopVoucherContainer>
          <div className="title">Shop Voucher </div>
          {Voucher.map((el) => {
            return (
              <Chip
                key={el.id}
                label={el.label}
                size="small"
                sx={{
                  marginRight: "10px",
                  color: "#55ABAB",
                  backgroundColor: " #B6E3E3",
                }}
              />
            );
          })}
        </ShopVoucherContainer>

        <ShopVoucherContainer>
          <div className="title">Ship</div>
          <div className="content">
            <div className="wrapper">
              <LocalShippingOutlinedIcon />
              <div>
                <div className="description"> Free Ship</div>
                <div className="smallDescription">
                  Free shipping for orders above $200
                </div>
              </div>
            </div>
            <div className="wrapper">
              <LocalShippingOutlinedIcon />
              <div>
                <div className="description">
                  Ship To
                  <span>
                    FPT University, Long Thanh My, Thu Duc, Ho Chi Minh City
                  </span>
                </div>
                <div className="smallDescription">
                  Ship Fee <span> $10</span>
                </div>
              </div>
            </div>
          </div>
        </ShopVoucherContainer>

        <div>{product.quantity} quantity</div>
      </ContainerAdditional>

      <div
        style={{
          width: "220px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => {
            dispatch(setCartItems(addCartItem(cartItems, product)));
          }}
        >
          Add to Cart
        </Button>
        <Button buttonType={"light"}> Buy now</Button>{" "}
      </div>
    </>
  );
};

export default ProductInfo;
