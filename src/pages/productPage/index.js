import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../config/config";
import Carousel2 from "./components/reactSlider";
import ProductInfo from "./components/productInfo";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { productsReducer } from "../../slices/productReducer";
const ProductPage = () => {
  const urlGetProduct = API_URL + "/product/list-all";
  const dispatch = useDispatch();
  //getProducts
  const getProducts = async (url) => {
    console.log(url);
    dispatch(productsReducer({ type: "SET_LOADING" }));
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch(productsReducer({ type: "SET_API_DATA", payload: products }));
    } catch (error) {
      dispatch(productsReducer({ type: "API_ERROR" }));
    }
  };
  // const getSingleProduct = async (url) => {
  //   dispatch(productsReducer({ type: "SET_SINGLE_LOADING" }));
  //   try {
  //     const res = await axios.get(url);
  //     const singleProduct = await res.data;
  //     dispatch(
  //       productsReducer({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
  //     );
  //   } catch (error) {
  //     dispatch(productsReducer({ type: "SET_SINGLE_ERROR" }));
  //   }
  // };
  useEffect(() => {
    getProducts(urlGetProduct);
  }, []);
  return (
    <>
      <Grid container>
        <Grid item xs={7}>
          <Carousel2 />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
