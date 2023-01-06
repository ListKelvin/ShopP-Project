import { useEffect, useState } from "react";
import {
  ProductName,
  ProductEvaluated,
  SmallDescription,
  ContainerAdditional,
  ShopVoucherContainer,
  Amount,
  IncreaseAndDecrease,
  Value,
} from "../styled";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CountDown from "../../../Component/Countdown/CountDown";
import { ReactComponent as FlashIcon } from "../../../assets/image 68.svg";
import ShopVoucher from "../../../Component/ShopVoucher";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ListAdditional from "./ListAdditonal";
import { addToCart } from "../../../slices/cartReducer";
import Button from "../../../Component/Button";
const Voucher = [
  { id: 1, label: "Discount -30%" },
  { id: 2, label: "Discount -50%" },
  { id: 3, label: "Discount -10%" },
];

const ProductInfo = ({ product, additional }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [value2, setValue2] = useState([]);

  // const { product, additionalInformation } = state;

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const addToCartHandler = (product) => {
    const tempProduct = {
      shopId: product.shop.id,
      shopName: product.shop.name,
      productImage: product.productImage[0],
      amount: product.amount,
      name: product.name,
      id: product.id,
      cartQuantity: qty,
      additionalInfo: value2,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   dispatch(setItem(product));
  //   return function cleanup() {};
  // }, [dispatch, product]);
  return (
    <>
      <ProductName> {product.name}</ProductName>
      <ProductEvaluated>
        <div>
          {parseFloat(product?.star)}
          <Rating
            name="simple-controlled"
            value={product.star}
            sx={{ fontSize: "14px", marginLeft: "0.5rem" }}
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
            height: "35px",
            display: "flex",
            marginRight: "30px",
            justifyContent: "space-between",
          }}
        >
          <CountDown />
          <Button>See All</Button>
        </div>
      </div>

      <ContainerAdditional>
        <ShopVoucherContainer>
          <div className="title">Shop Voucher </div>
          {Voucher.map((el) => {
            return (
              <Chip
                className="small-voucher"
                key={el.id}
                label={el.label}
                size="small"
                sx={{
                  minWidth: "50px",
                  marginRight: "10px",
                  color: "#55ABAB",
                  cursor: "pointer",
                  backgroundColor: " #B6E3E3",
                }}
              />
            );
          })}
          <div className="voucher">
            <ShopVoucher />
          </div>
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
        <ListAdditional
          additional={additional}
          action={setValue2}
          value2={value2}
        />
        <ShopVoucherContainer>
          <div className="title">Amount</div>
          <div className="content">
            <Amount>
              <IncreaseAndDecrease onClick={() => decreaseQty()}>
                <RemoveOutlinedIcon />
              </IncreaseAndDecrease>
              <Value>{qty}</Value>
              <IncreaseAndDecrease onClick={() => increaseQty()}>
                <AddOutlinedIcon />
              </IncreaseAndDecrease>
            </Amount>
          </div>
          <div className="title">{product.quantity} Remain</div>
        </ShopVoucherContainer>
      </ContainerAdditional>

      <div
        style={{
          width: "220px",
          display: "flex",
          marginLeft: " 20px",

          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => {
            addToCartHandler(product);
          }}
        >
          add to cart
        </Button>
        <Button buttonType={"light"}> Buy now</Button>{" "}
      </div>
    </>
  );
};

export default ProductInfo;
