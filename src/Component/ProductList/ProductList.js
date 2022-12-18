import React from "react";

import ProductCard from "../ProductCard";
import { Wrapper } from "./style";
const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products &&
          products.map((curElem) => {
            const { amount, name, star, sold, productImage, id } = curElem;

            return (
              <ProductCard
                id={id}
                key={curElem.id}
                name={name}
                price={amount}
                rate={star}
                sold={sold}
                img={productImage}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

export default GridView;
