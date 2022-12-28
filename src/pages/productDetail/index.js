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
    let newItem;
    for (let i = 0; i < listProducts.length; i++) {
      if (listProducts[i].id === id) {
        item = listProducts[i];
        newItem = Object.assign({ amountInCart: 0 }, item);

        break;
      }
    }
    if (item != null) {
      setState(newItem);
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
            <ProductInfo product={state} action={setState} />
          </Grid>
          <ShopOfProduct product={state} />
          <Detail product={state} />
        </Grid>
      )}
    </>
  );
};

export default ProductDetails;
