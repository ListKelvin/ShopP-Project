import React from "react";
import Flexbox from "../Flexbox";
import ErrorImg from "../../assets/error.png";
import EmptyImg from "../../assets/Voucher/emptyVoucher.png";
const Empty = ({ message }) => {
  return (
    <div className="container">
      <Flexbox
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <img src={EmptyImg} alt="error" width={"100px"} height={"100px"} />
        <span>{message ? message : "Empty"}</span>
      </Flexbox>
    </div>
  );
};

export default Empty;
