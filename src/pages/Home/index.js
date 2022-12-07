import ProductCard from "../../Component/ProductCard";
import { ProductWrapper } from "./style";

import { useSelector } from "react-redux";
import SuggestContainer from "./Components/CategoryFilter";
import Branding from "./Components/Branding";
import Branding02 from "./Components/Branding02";
import { selectProducts } from "../../selectors/productSelect";
import FlashSale from "./Components/FlashSale";
import { Box } from "@mui/material";
import CategoryContainer from "../../pages/Home/Components/CategoryContainer";
import Brand from "../../assets/Branding/image 69.png";
import { ProductLink } from "./style";
const Home = () => {
  const AllProducts = useSelector(selectProducts);

  return (
    <>
      <Branding />
      <FlashSale />
      <Box sx={{ width: "100%" }}>
        <img src={Brand} width="100%" alt="" />
      </Box>
      <SuggestContainer />
      <CategoryContainer />

      <ProductWrapper>
        {AllProducts[0] !== undefined
          ? AllProducts[0].map((el, index) => {
              const { amount, name, star, sold, productImage } = el;

              return (
                <ProductLink to={`productpage/${el.id}`} key={index}>
                  <ProductCard
                    name={name}
                    price={amount}
                    rate={star}
                    sold={sold}
                    img={productImage}
                  />
                </ProductLink>
              );
            })
          : ""}
      </ProductWrapper>
    </>
  );
};

export default Home;
