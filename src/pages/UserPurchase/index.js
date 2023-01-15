import React, { useEffect, useState } from "react";
import {
  EvaluationDiv,
  EvaluationsContainer,
  EvaluationTitle,
} from "../UserEvaluation/style";

import { FilterContainer } from "../UserVouchers/Components/styleComponents";
import { TitlePurchase, TitlePurchaseAfter, TitlePurchaseDiv } from "./style";
import TableOrderCustomer from "./Components/TableOrder";
import ProductPurchase from "./Components/ProductPurchase";
import orderApi from "../../utils/productApiComponent/orderApi";
import BasicTabs from "../../Component/Tabs/MuiTabs";
const UserPurchase = () => {
  const [orderCustomer, setOrderCustomer] = useState();
  const [orderCustomerDeliver, setOrderCustomerDeliver] = useState();
  const [orderCustomerHistory, setOrderCustomerHistory] = useState();
  const [orderCustomerCancel, setOrderCustomerCancel] = useState();

  const types = [
    { title: "All", table: <TableOrderCustomer data={orderCustomer} /> },
    { title: "Checking", table: <ProductPurchase /> },
    { title: "Confirm", table: <ProductPurchase /> },
    { title: "Packaging", table: <ProductPurchase /> },
    {
      title: "Delivering",
      table: <TableOrderCustomer data={orderCustomerDeliver} />,
    },
    {
      title: "Delivered",
      table: <TableOrderCustomer data={orderCustomerHistory} />,
    },
    {
      title: "Cancelled",
      table: <TableOrderCustomer data={orderCustomerCancel} />,
    },
    { title: "Returned", table: <ProductPurchase /> },
  ];

  return (
    <EvaluationDiv>
      <EvaluationsContainer>
        <EvaluationTitle>My Purchase</EvaluationTitle>
        <BasicTabs />
      </EvaluationsContainer>
    </EvaluationDiv>
  );
};

export default UserPurchase;
