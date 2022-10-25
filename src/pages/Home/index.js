/* eslint-disable no-unused-vars */
import { Container } from "./style";
import AppAppBar from "../../Component/NavBar";
import ProductCard from "../../Component/ProductCard";
import Stack from "@mui/material/Stack";
import { ProductWrapper } from "./style";
const products = [
  { id: 8, name: "laptop Asus gaming", price: "$30", rate: 3, sold: 10 },
  { id: 7, name: "T-shirt blue", price: "$60", rate: 2, sold: 30 },
  { id: 6, name: "bug", price: "$1000", rate: 2, sold: 30 },
  { id: 5, name: "bug", price: "$0", rate: 5, sold: 1000 },
  { id: 4, name: "laptop Asus gaming", price: "$30", rate: 3, sold: 10 },
  { id: 3, name: "T-shirt blue", price: "$60", rate: 2, sold: 30 },
  { id: 1, name: "bug", price: "$1000", rate: 2, sold: 30 },
  { id: 2, name: "bug", price: "$0", rate: 5, sold: 1000 },
  { id: 9, name: "bugFree", price: "$90", rate: 3, sold: 900 },
  { id: 10, name: "cake", price: "$120", rate: 1, sold: 30 },
  { id: 11, name: "cakeBug", price: "$10", rate: 4.5, sold: 10 },
  { id: 12, name: "deadline", price: "$1020", rate: 5, sold: 100 },
];
const Home = () => {
  return (
    <>
      <ProductWrapper>
        {products.map(({ name, price, rate, sold, id }) => {
          return (
            <ProductCard
              key={id}
              name={name}
              price={price}
              rate={rate}
              sold={sold}
            />
          );
        })}
      </ProductWrapper>
    </>
  );
};

export default Home;
