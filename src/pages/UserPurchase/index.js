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
  const [active, setActive] = useState(types[0]);
  useEffect(() => {
    return function cleanUp() {
      orderApi.getOrderCustomer().then((res) => {
        setOrderCustomer(res.data.data);
      });
      orderApi.getOrderCustomerDeliver().then((res) => {
        setOrderCustomerDeliver(res.data.data);
      });
      orderApi.getOrderCustomerHistory().then((res) => {
        setOrderCustomerHistory(res.data.data);
      });
      orderApi.getOrderCustomerCancel().then((res) => {
        setOrderCustomerCancel(res.data.data);
      });
    };
  }, []);

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
        {active?.table}
      </EvaluationsContainer>
    </EvaluationDiv>
  );
};

export default UserPurchase;
