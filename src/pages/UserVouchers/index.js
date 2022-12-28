import React from 'react';
import { EvaluationDiv, EvaluationsContainer, EvaluationTitle, WrapperAble, } from "../UserEvaluation/style";
import VoucherList from './Components/VoucherList';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SearchIcon from '@mui/icons-material/Search';
import {FilterContainer, Title, SearchTitle, SearchBox, SearchKeyWord, TitleContainer,  SearchContainer, IconStyle} from "./Components/styleComponents"
const Categories = [
  {
    id: 0,
    label: "All",
    titles: "", 
    status: "", 
  },
  {
    id: 1, 
    label: "Ship", 
    titles: "Free Shipping", 
    status: "ship", 
  },
  {
    id: 2, 
    label: "ShopP",  
    titles: "Discount & Cashback", 
    status: "shop", 
  },
]

const UserVouchers = ({label}) => {
  return (
  <EvaluationDiv>
    <EvaluationsContainer>
      <EvaluationTitle>My Voucher</EvaluationTitle> 
      <FilterContainer>
        {Categories.map (({label}) => {return (
          <Title>{label}</Title>
          );})}
        </FilterContainer>

        <SearchContainer>
        <TitleContainer>
          <IconStyle><LocalAtmIcon/></IconStyle>
          <SearchTitle>Enter Voucher</SearchTitle>
        </TitleContainer>
        <SearchBox>
          <SearchIcon/>
          <SearchKeyWord onChange={(e) => {console.log(e.target.value)}} type = "search" placeholder="Search..."></SearchKeyWord>
        </SearchBox>
      </SearchContainer>
      
      {Categories.map (({id, label, titles, status}) => {return (
        <div id = {id} label = {label} titles = {titles} status = {status}>
        <VoucherList id = {id} label = {label} titles = {titles} status = {status} />
      </div>
      );})}
    </EvaluationsContainer>
  </EvaluationDiv>)
};

export default UserVouchers;
