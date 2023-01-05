import React from "react";
import Img from "../../../assets/Product/image 161.png";
import { CardMedia } from "@mui/material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Button from "../../../Component/Button";
import CircleIcon from "@mui/icons-material/Circle";
import {
  PurchaseContainer,
  HeaderContainer,
  TitleContainer,
  NameDiv,
  PriceDiv,
  StatusContainer,
  TotalDiv,
  ImgDiv,
  BodyContainer,
} from "./styleComponents";

const TrackingOrder = [
  {
    shopName: "Panasonic",
    deliveryStatus: "Checking",
    Product: [
      {
        productImage: [Img],
        productName: "Tủ lạnh Panasonic Inverter 380 lít NR-BX421WGKV",
        quantity: "1",
        price: "2000",
        total: "2000",
      },
      {
        productImage: [Img],
        productName: "Tủ lạnh Panasonic Inverter 380 lít NR-BX421WGKV",
        quantity: "1",
        price: "2000",
        total: "2000",
      },
    ],
  },
  {
    shopName: "Panasonic",
    deliveryStatus: "Checking",
    Product: [
      {
        productImage: [Img],
        productName: "Tủ lạnh Panasonic Inverter 380 lít NR-BX421WGKV",
        quantity: "1",
        price: "2000",
        total: "2000",
      },
      {
        productImage: [Img],
        productName: "Tủ lạnh Panasonic Inverter 380 lít NR-BX421WGKV",
        quantity: "1",
        price: "2000",
        total: "2000",
      },
      {
        productImage: [Img],
        productName: "Tủ lạnh Panasonic Inverter 380 lít NR-BX421WGKV",
        quantity: "1",
        price: "2000",
        total: "2000",
      },
    ],
  },
];

const ProductPurchase = () => {
  return (
    <div>
      {TrackingOrder.map(({ shopName, deliveryStatus, Product }, id) => {
        return (
          <PurchaseContainer key={id}>
            <HeaderContainer>
              <TitleContainer>
                {shopName}
                <TextsmsIcon sx={{ color: "#2F5E5E", margin: "0 0.5em" }} />
                <Button
                  style={{
                    background: "white",
                    border: "1px solid #ccc",
                    color: "#2F5E5E",
                  }}
                >
                  View Shop
                </Button>
              </TitleContainer>
              <StatusContainer>
                <CircleIcon style={{ fontSize: "1.3em", color: "green" }} />
                <div>{deliveryStatus}</div>
              </StatusContainer>
            </HeaderContainer>
            {Product.map(
              ({ productImage, productName, quantity, price, total }, id) => {
                return (
                  <BodyContainer key={id}>
                    <ImgDiv>
                      <CardMedia
                        sx={{ borderRadius: "10px", width: "6em" }}
                        component="img"
                        image={productImage}
                        alt="green iguana"
                      />
                    </ImgDiv>
                    <NameDiv>
                      <div>{productName}</div>
                      <div>x{quantity}</div>
                    </NameDiv>
                    <PriceDiv>{price}</PriceDiv>
                    <TotalDiv>
                      <div style={{ color: "#2F5E5E" }}>{total} </div>
                      <Button>Buy Again</Button>
                    </TotalDiv>
                  </BodyContainer>
                );
              }
            )}
          </PurchaseContainer>
        );
      })}
    </div>
  );
};

export default ProductPurchase;
