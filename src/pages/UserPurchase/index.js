import React, { useState } from "react";
import {
  EvaluationDiv,
  EvaluationsContainer,
  EvaluationTitle,
} from "../UserEvaluation/style";

import Img from "../../assets/Product/image 161.png";
import { FilterContainer } from "../UserVouchers/Components/styleComponents";
import { TitlePurchase, TitlePurchaseAfter, TitlePurchaseDiv } from "./style";
import {
  BodyContainer,
  ImgDiv,
  NameDiv,
  PriceDiv,
  TotalDiv,
} from "./Components/styleComponents";
import ProductPurchase from "./Components/ProductPurchase";
import { CardMedia } from "@mui/material";
import Button from "../../Component/Button";
const types = [
  { title: "All", table: <ProductPurchase /> },
  { title: "Checking", table: <ProductPurchase /> },
  { title: "Confirm", table: <ProductPurchase /> },
  { title: "Packaging", table: <ProductPurchase /> },
  { title: "Delivering", table: <ProductPurchase /> },
  { title: "Delivered", table: <ProductPurchase /> },
  { title: "Cancelled", table: <ProductPurchase /> },
  { title: "Returned", table: <ProductPurchase /> },
];

const UserPurchase = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <EvaluationDiv>
      <EvaluationsContainer>
        <EvaluationTitle>My Purchase</EvaluationTitle>
        <FilterContainer>
          <TitlePurchaseDiv>
            {types.map((type, id) => {
              return (
                <TitlePurchase
                  key={id}
                  onClick={() => setActive(type)}
                  active={active.title === type.title}
                >
                  {type.title}
                </TitlePurchase>
              );
            })}
          </TitlePurchaseDiv>
        </FilterContainer>
        {active.table}
        <BodyContainer>
          <ImgDiv>
            <CardMedia
              sx={{ borderRadius: "10px", width: "6em" }}
              component="img"
              image={Img}
              alt="green iguana"
            />
          </ImgDiv>
          <NameDiv>
            <div>ID of Order x Product Quantity</div>
            <div>estimateDeliveryTime</div>
          </NameDiv>
          <PriceDiv> Discount price </PriceDiv>
          <TotalDiv>
            <div style={{ color: "#2F5E5E" }}>Total bill </div>
            <Button>View Order</Button>
          </TotalDiv>
        </BodyContainer>
      </EvaluationsContainer>
    </EvaluationDiv>
  );
};

export default UserPurchase;
