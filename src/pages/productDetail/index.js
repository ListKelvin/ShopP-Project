import { useEffect, useState } from "react";

import Carousel2 from "./components/reactSlider";
import ProductInfo from "./components/productInfo";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectProducts } from "../../selectors/productSelect";
import ShopOfProduct from "./components/shopOfProduct";
import Detail from "./components/detail";
import productApi from "../../utils/productApiComponent/productApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
const ProductDetails = () => {
  const [state, setState] = useState();
  const [additional, setAdditional] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const productItems = useSelector(selectProducts);
  const listProducts = productItems[0];
  const token = LocalStorageUtils.getToken();
  const fetchAdditionalInformation = async (productId, token) => {
    const data = await productApi.getProductAdditionalInfo(productId, token);
    setAdditional(data.data.data);
  };
  useEffect(() => {
    let item = null;

    for (let i = 0; i < listProducts?.length; i++) {
      if (listProducts[i].id === id) {
        item = listProducts[i];
        fetchAdditionalInformation(id, token);

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
            <ProductInfo product={state} additional={additional} />
          </Grid>
          <ShopOfProduct product={state} />
          <Detail product={state} />
        </Grid>
      )}
    </>
  );
};

export default ProductDetails;
