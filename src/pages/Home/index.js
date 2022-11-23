import ProductCard from "../../Component/ProductCard";
import { ProductWrapper, AlignCenter } from "./style";

import SuggestContainer from "./Components/CategoryFilter";
import Branding from "./Components/Branding";
import Branding02 from "./Components/Branding02";

import FlashSale from "./Components/FlashSale";
import { Box } from "@mui/material";
import CategoryContainer from "../../pages/Home/Components/CategoryContainer";
import Brand from "../../assets/Branding/image 69.png";
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
      <Branding />
      <FlashSale />
      <Box sx={{ width: "100%" }}>
        <img src={Brand} width="100%" alt="" />
      </Box>
      <SuggestContainer />
      <CategoryContainer />
      <Branding02 />
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
