import React, { useState } from "react";
import {
  EvaluationDiv,
  EvaluationsContainer,
  EvaluationTitle,
} from "../UserEvaluation/style";
import { FilterContainer } from "../UserVouchers/Components/styleComponents";
import { TitlePurchase, TitlePurchaseAfter, TitlePurchaseDiv } from "./style";

import ProductPurchase from "./Components/ProductPurchase";

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
      </EvaluationsContainer>
    </EvaluationDiv>
  );
};

export default UserPurchase;
