import React, { useState } from "react";
import { ButtonGroup, Tab } from "./style";
import ProductPurchase from "../../pages/UserPurchase/Components/ProductPurchase";
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

export default function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map((type, id) => (
          <Tab
            key={id}
            active={active.title === type.title}
            onClick={() => setActive(type)}
          >
            {type.title}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p> Your payment selection: {active.table} </p>
    </>
  );
}
// Usage
// <TabGroup />;
//ProductPurchase
