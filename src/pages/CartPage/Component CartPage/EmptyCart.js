import React from "react";
import { Content, Notiframe, NotiInf } from "./EmptyCartStyle";
import { Button } from "@mui/material";
import ImgBrand from "../../../assets/suggest/shopping.png";

export function EmptyCart() {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Notiframe>
        <Content>
          <img src={ImgBrand} width="25%" height="25%" alt="" />
          <NotiInf>Your cart is empty</NotiInf>
          <Button
            variant="contained"
            disableElevation
            style={{
              textTransform: "none",
              backgroundColor: "#55ABAB",
            }}
          >
            Buy now
          </Button>
        </Content>
      </Notiframe>
    </div>
  );
}
