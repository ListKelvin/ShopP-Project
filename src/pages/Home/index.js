import ProductCard from "../../Component/ProductCard";
import { ProductWrapper } from "./style";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuggestContainer from "./Components/CategoryFilter";
import Branding from "./Components/Branding";

import { selectProducts } from "../../selectors/productSelect";
import FlashSale from "./Components/FlashSale";
import { Box } from "@mui/material";
import CategoryContainer from "../../pages/Home/Components/CategoryContainer";
import Brand from "../../assets/Branding/image 69.png";
import { ProductLink } from "./style";
import { setUser } from "../../slices/user";

import LocalStorageUtils from "../../utils/LocalStorageUtils";
import Modal from "../../Component/Modal/Modal";
const Home = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector(selectProducts);

  // const token = LocalStorageUtils.getJWTUser();

  useEffect(() => {
    const getUser = async () => {
      const user = await LocalStorageUtils.getUser();
      console.log(user.data);
      const simplifyUser = {
        customer: user.data.customer,
        email: user.data.email,
        id: user.data.id,
        role: user.data.role,
        shop: user.data.shop,
      };
      dispatch(setUser(simplifyUser));
    };
    getUser();
  }, []);

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
