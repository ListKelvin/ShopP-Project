import React from "react";
import Empty from "./EmptyNoti";
import Title from "./Title";
const WishlistEmpty = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <Empty />
    </div>
  );
};

export default WishlistEmpty;
