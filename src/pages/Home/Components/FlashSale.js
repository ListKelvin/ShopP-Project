import React from "react";
import { useState, useEffect } from "react";
import CountDown from "../../../Component/Countdown/CountDown";
import SalesProduct from "./SalesProduct";
import { ReactComponent as FlashIcon } from "../../../assets/image 68.svg";
const ListSaleProducts = [
  {
    id: 1,
    name: "laptop",
    price: "$200",
    rate: 2,
    amountSell: 10,
    progress: 30,
  },
  {
    id: 3,
    name: "laptop",
    price: "$300",
    rate: 3,
    amountSell: 13,
    progress: 33,
  },
  {
    id: 2,
    name: "laptop",
    price: "$100",
    rate: 1,
    amountSell: 20,
    progress: 20,
  },
  {
    id: 4,
    name: "laptop",
    price: "$400",
    rate: 4,
    amountSell: 24,
    progress: 40,
  },
  {
    id: 5,
    name: "laptop",
    price: "$400",
    rate: 4,
    amountSell: 24,
    progress: 50,
  },
  {
    id: 6,
    name: "laptop",
    price: "$300",
    rate: 3,
    amountSell: 13,
    progress: 63,
  },
  {
    id: 7,
    name: "laptop",
    price: "$100",
    rate: 1,
    amountSell: 20,
    progress: 70,
  },
  //   {
  //     id: 8,
  //     name: "laptop",
  //     price: "$400",
  //     rate: 4,
  //     amountSell: 24,
  //     progress: 80,
  //   },
  //   {
  //     id: 9,
  //     name: "laptop",
  //     price: "$400",
  //     rate: 4,
  //     amountSell: 24,
  //     progress: 90,
  //   },
];
const FlashSale = () => {
  return (
    <div
      className="SaleWrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#B6E3E3",
        width: "100%",
        borderRadius: "5px",
        height: "100%",
        overflowX: "scroll",

        marginBottom: "10px",
        padding: "10px 20px",
      }}
    >
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
            width: "30%",
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
      <div
        className="ListSale"
        style={{
          width: "100%",
          display: "flex",
          // flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {ListSaleProducts.map(
          ({ id, name, price, amountSell, progress, rate }) => {
            return (
              <SalesProduct
                name={name}
                id={id}
                price={price}
                amountSell={amountSell}
                progress={progress}
                rate={rate}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default FlashSale;
