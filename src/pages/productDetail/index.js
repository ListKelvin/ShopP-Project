import { useEffect, useState } from "react";

import Carousel2 from "./components/reactSlider";
import ProductInfo from "./components/productInfo";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectProducts } from "../../selectors/productSelect";
import ShopOfProduct from "./components/shopOfProduct";
import Detail from "./components/detail";
const ProductDetails = () => {
  const [state, setState] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const productItems = useSelector(selectProducts);
  const listProducts = productItems[0];

  useEffect(() => {
    let item = null;
    for (let i = 0; i < listProducts.length; i++) {
      if (listProducts[i].id === id) {
        item = listProducts[i];
        break;
      }
    }
    if (item != null) {
      setState(item);
    } else {
      navigate("/home");
    }
  }, [id]);

  return (
    <>
      {" "}
      {state && (
        <Grid container>
          <Grid item xs={7}>
            <Carousel2 item={state} />
          </Grid>
          <Grid item xs={5}>
            <ProductInfo product={state} />
          </Grid>
          <ShopOfProduct product={state} />
          <Detail product={state} />
        </Grid>
      )}
    </>
  );
};

export default ProductDetails;
