import React from "react";
import Flexbox from "../Flexbox";
import ErrorImg from "../../assets/error.png";
import EmptyImg from "../../assets/Voucher/emptyVoucher.png";
const Empty = ({ message }) => {
  return (
    <div className="container">
      <Flexbox alignItems="center" justifyContent="center">
        <img src={EmptyImg} alt="error" width={"100px"} height={"100px"} />
        <span>{message ? message : ""}</span>
      </Flexbox>
    </div>
  );
};

export default Empty;
