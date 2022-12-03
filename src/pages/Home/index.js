import ProductCard from "../../Component/ProductCard";
import { ProductWrapper, AlignCenter } from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SuggestContainer from "./Components/CategoryFilter";
import Branding from "./Components/Branding";
import Branding02 from "./Components/Branding02";
import { selectProducts } from "../../selectors/productSelect";
import FlashSale from "./Components/FlashSale";
import { Box } from "@mui/material";
import CategoryContainer from "../../pages/Home/Components/CategoryContainer";
import Brand from "../../assets/Branding/image 69.png";

const Home = () => {
  const AllProducts = useSelector(selectProducts);
  // console.log(AllProducts[0].data);
  const ProductAll = AllProducts[0];
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
        {ProductAll != null
          ? ProductAll.data.map((el, index) => {
              const { amount, name, star, sold } = el;

              return (
                <Link to="/productPage" key={index}>
                  <ProductCard
                    name={name}
                    price={amount}
                    rate={star}
                    sold={sold}
                  />
                </Link>
              );
            })
          : ""}
      </ProductWrapper>
    </>
  );
};

export default Home;
