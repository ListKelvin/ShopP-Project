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
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import { selectCartItems } from "../../../selectors/cartSelector";

import { useDispatch, useSelector } from "react-redux";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

////////////////

import { selectProduct, selectItem } from "../../../selectors/cartSelector";
/////////////////
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
} from "../../../slices/cartReducer";
import Button from "../../../Component/Button";
const Voucher = [
  { id: 1, label: "Discount -30%" },
  { id: 2, label: "Discount -50%" },
  { id: 3, label: "Discount -10%" },
];
const AddtionalInfor = [
  {
    id: 1,
    label: "Color",
    itemChosen: [
      { id: 1, name: "Red" },
      { id: 2, name: "Green" },
      { id: 3, name: "Yellow" },
    ],
  },
  {
    id: 2,
    label: "Size",
    itemChosen: [
      { id: 1, name: "M" },
      { id: 2, name: "X" },
    ],
  },
];
const ProductInfo = ({ product, action }) => {
  const productTest = useSelector(selectProduct);
  const cartItems = useSelector(selectCartItems);
  const item = useSelector(selectItem);
  const dispatch = useDispatch();
  const [amountInCart, setAmountInCart] = useState(1);

  const setDecrease = () => {
    Object.preventExtensions(product);
    amountInCart > 1 ? action((product.amountInCart = 2)) : setAmountInCart(1);
  };

  const setIncrease = () => {
    amountInCart < product.quantity
      ? setAmountInCart(amountInCart + 1)
      : setAmountInCart(product.quantity);

    product.amountInCart = amountInCart;
    Object.preventExtensions(product);
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
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
                key={el.id}
                label={el.label}
                size="small"
                sx={{
                  minWidth: "50px",

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
        {AddtionalInfor.map((el) => {
          return (
            <ShopVoucherContainer key={el.id}>
              <div className="title">{el.label}</div>
              {el.itemChosen.map((item) => {
                return (
                  <Chip
                    key={item.id}
                    label={item.name}
                    size="small"
                    sx={{
                      minWidth: "50px",
                      marginRight: "10px",
                      color: "#55ABAB",
                      backgroundColor: " #B6E3E3",
                    }}
                  />
                );
              })}
            </ShopVoucherContainer>
          );
        })}
        <ShopVoucherContainer>
          <div className="title">Amount</div>
          <div className="content">
            <Amount>
              {" "}
              <IncreaseAndDecrease onClick={() => handleDecreaseCart(product)}>
                <RemoveOutlinedIcon />
              </IncreaseAndDecrease>
              <Value>{amountInCart}</Value>
              <IncreaseAndDecrease onClick={() => handleAddToCart(product)}>
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
            dispatch(addToCart(product));
          }}
        >
          {" "}
          add to cart
        </Button>
        <Button buttonType={"light"}> Buy now</Button>{" "}
      </div>
    </>
  );
};

export default ProductInfo;
