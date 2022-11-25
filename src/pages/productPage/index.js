import Carousel2 from "./components/reactSlider";
import ProductInfo from "./components/productInfo";
import { Grid } from "@mui/material";
const ProductPage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Carousel2 />
        </Grid>
        <Grid item xs={6}>
          <ProductInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
