import { useEffect, useState } from "react";

import Carousel2 from "./components/reactSlider";
import ProductInfo from "./components/productInfo";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectProducts } from "../../selectors/productSelect";

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
            <Carousel2 />
          </Grid>
          <Grid item xs={5}>
            <ProductInfo product={state} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductDetails;
