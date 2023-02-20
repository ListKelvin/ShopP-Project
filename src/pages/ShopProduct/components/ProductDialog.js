import { useState, useEffect } from "react";
import { Grid, Button, Typography, DialogTitle, Dialog } from "@mui/material";
import CarouselImg from "./Carousel";
import { ProductName, ShopVoucherContainer } from "../../productDetail/styled";
import Chip from "@mui/material/Chip";
import { DescriptionWrapper } from "../styled";
import productApi from "../../../utils/productApiComponent/productApi";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
const options = [
  { id: 1, label: "Discount -30%" },
  { id: 2, label: "Discount -50%" },
  { id: 3, label: "Discount -10%" },
  { id: 4, label: "Discount -10%" },
];

const ProductDialog = (props) => {
  const { onClose, open, item } = props;
  const [additional, setAdditional] = useState();

  const token = LocalStorageUtils.getToken();
  const fetchAdditionalInformation = async (productId, token) => {
    const data = await productApi.getProductAdditionalInfo(productId, token);
    setAdditional(data.data.data);
  };
  console.log(additional);
  useEffect(() => {
    return function () {
      fetchAdditionalInformation(item.id, token);
    };
  }, []);
  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth={"lg"}>
      <DialogTitle>Product Information</DialogTitle>
      <Grid container>
        <Grid item xs={7}>
          <CarouselImg img={item.productImage} />
        </Grid>
        <Grid item xs={5}>
          <ProductName style={{ marginBottom: "20px" }}>
            {item.name}
          </ProductName>
          <ShopVoucherContainer>
            <div className="title">Price:</div>
            <div className="content">
              <div className="description"> {item.amount}</div>
            </div>
          </ShopVoucherContainer>
          <ShopVoucherContainer>
            <div className="title">Category:</div>
            <div className="content">
              <div className="description"> {item?.category.name}</div>
            </div>
          </ShopVoucherContainer>
          <ShopVoucherContainer>
            <div className="title">Amount:</div>
            <div className="content">
              <div className="description"> {item.quantity}</div>
            </div>
          </ShopVoucherContainer>
          {additional?.map((el) => {
            let options = el?.value?.split(",");

            return (
              <ShopVoucherContainer key={el.id}>
                <div className="title">{el.key}</div>

                {options.map((option, id) => {
                  return (
                    <Chip
                      key={option}
                      label={option}
                      size="small"
                      sx={{
                        minWidth: "50px",
                        marginRight: "10px",
                        color: "#ffffff",
                        backgroundColor: "#55ABAB",
                      }}
                    />
                  );
                })}
              </ShopVoucherContainer>
            );
          })}
        </Grid>
        <Grid item xs={12} direction="column">
          <Typography
            variant="h6"
            gutterBottom
            sx={{ margin: "1rem", color: "#2F5E5E" }}
          >
            Description
          </Typography>
          <DescriptionWrapper>{item.detail}</DescriptionWrapper>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ProductDialog;
