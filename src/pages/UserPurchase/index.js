import React, {useState} from 'react';
import { EvaluationDiv, EvaluationsContainer, EvaluationTitle, } from "../UserEvaluation/style";
import {FilterContainer, } from "../UserVouchers/Components/styleComponents";
import {TitlePurchase, TitlePurchaseAfter, TitlePurchaseDiv} from "./style";
import ProductPurchase from "./Components/ProductPurchase";
const Categories = [
  {id: 1, label: "All"},
  {id: 2, label: "Checking"},
  {id: 3, label: "Confirmed"},
  {id: 4, label: "Packaging"},
  {id: 5, label: "Delivering"},
  {id: 6, label: "Delivered"},
  {id: 7, label: "Cancelled"},
  {id: 7, label: "Returned"},
]

const UserPurchase = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  }
  return (
  <EvaluationDiv>
    <EvaluationsContainer>
      <EvaluationTitle>My Purchase</EvaluationTitle> 
      <FilterContainer>
        <TitlePurchaseDiv>
          {Categories.map (({id, label}) => {return (
            <TitlePurchase 
            key = {id}
            className={isActive ? 'Title' : null}
            onClick={toggleClass}
            >{label}</TitlePurchase>
            );})}
        </TitlePurchaseDiv>
      </FilterContainer>
      <ProductPurchase/>
    </EvaluationsContainer>
  </EvaluationDiv>)
};

export default UserPurchase;
