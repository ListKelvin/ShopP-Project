import React, { useState } from "react";
import {
  EvaluationDiv,
  EvaluationsContainer,
  EvaluationTitle,
} from "../UserEvaluation/style";
import { FilterContainer } from "../UserVouchers/Components/styleComponents";
import { TitlePurchase, TitlePurchaseAfter, TitlePurchaseDiv } from "./style";
import TabGroup from "../../Component/Tabs";

const Categories = [
  { id: 0, label: "All" },
  { id: 1, label: "Checking" },
  { id: 2, label: "Confirmed" },
  { id: 3, label: "Packaging" },
  { id: 4, label: "Delivering" },
  { id: 5, label: "Delivered" },
  { id: 6, label: "Cancelled" },
  { id: 7, label: "Returned" },
];

const UserPurchase = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <EvaluationDiv>
      <EvaluationsContainer>
        <EvaluationTitle>My Purchase</EvaluationTitle>
        <FilterContainer>
          <TitlePurchaseDiv>
            {Categories.map(({ id, label }) => {
              return (
                <TitlePurchase
                  key={id}
                  className={isActive ? "Title" : null}
                  onClick={toggleClass}
                >
                  {label}
                </TitlePurchase>
              );
            })}
          </TitlePurchaseDiv>
        </FilterContainer>
        <TabGroup />
      </EvaluationsContainer>
    </EvaluationDiv>
  );
};

// <Tabs>
//   <div label="Gator">
//     See ya later, <em>Alligator</em>!
//   </div>
//   <div label="Croc">
//     After 'while, <em>Crocodile</em>!
//   </div>
//   <div label="Sarcosuchus">
//     Nothing to see here, this tab is <em>extinct</em>!
//   </div>
// </Tabs>
// <ProductPurchase />
export default UserPurchase;
