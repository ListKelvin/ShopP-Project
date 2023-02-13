import React from "react";
import Flexbox from "../Flexbox";
import ErrorImg from "../../assets/error.png";

const Error = ({ message }) => {
  return (
    <div className="container">
      <Flexbox alignItems="center" justifyContent="center">
        <img src={ErrorImg} alt="error" width={"100px"} height={"100px"} />
        <span>{message ? message : ""}</span>
      </Flexbox>
    </div>
  );
};

export default Error;
