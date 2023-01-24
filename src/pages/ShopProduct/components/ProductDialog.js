import { Grid, Button, Typography, DialogTitle, Dialog } from "@mui/material";
import CarouselImg from "./Carousel";
import { ProductName, ShopVoucherContainer } from "../../productDetail/styled";
import Chip from "@mui/material/Chip";
import { DescriptionWrapper } from "../styled";

const options = [
  { id: 1, label: "Discount -30%" },
  { id: 2, label: "Discount -50%" },
  { id: 3, label: "Discount -10%" },
  { id: 4, label: "Discount -10%" },
];

const ProductDialog = (props) => {
  const { onClose, open, item } = props;

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth={"lg"}>
      <DialogTitle>Product Information</DialogTitle>
      <Grid container>
        <Grid item xs={7}>
          <CarouselImg img={item.images} />
        </Grid>
        <Grid item xs={5}>
          <ProductName style={{ marginBottom: "20px" }}>
            testtesttesttesttesttesttesttesttesttesttesttest
          </ProductName>
          <ShopVoucherContainer>
            <div className="title">Price:</div>
            <div className="content">
              <div className="description"> Free Ship</div>
            </div>
          </ShopVoucherContainer>
          <ShopVoucherContainer>
            <div className="title">Category:</div>
            <div className="content">
              <div className="description"> Free Ship</div>
            </div>
          </ShopVoucherContainer>
          <ShopVoucherContainer>
            <div className="title">Amount:</div>
            <div className="content">
              <div className="description"> Free Ship</div>
            </div>
          </ShopVoucherContainer>
          <ShopVoucherContainer>
            <div className="title">color</div>
            {options.map((option, id) => {
              return (
                <Chip
                  key={option.label}
                  label={option.label}
                  size="small"
                  sx={{
                    minWidth: "50px",
                    marginRight: "10px",
                    color: `${"#ffffff"}`,
                    backgroundColor: `${"#55ABAB"}`,
                  }}
                />
              );
            })}
          </ShopVoucherContainer>
        </Grid>
        <Grid item xs={12} direction="column">
          <Typography
            variant="h6"
            gutterBottom
            sx={{ margin: "1rem", color: "#2F5E5E" }}
          >
            Description
          </Typography>
          <DescriptionWrapper>
            {" "}
            AKKO MonsGeek MG108 Black&Pink hứa hẹn sẽ là bàn phím nổi bật ở phân
            khúc giá dưới 1.5 triệu Đồng nhờ những ưu điểm dưới đây: Kết nối dây
            Type-C to Type-A có thể tháo dời, thuận tiện di chuyển LED nền RGB
            Keycap PBT Double-Shot, ASA profile đã quá quen thuộc với người dùng
            AKKO switch v3 (Cream Blue / Cream Yellow) kết hợp cùng foam tiêu âm
            PCB cho trải nghiệm gõ tối ưu và êm ái Giá thành hấp dẫn, phù hợp
            với người dùng mới và dễ tiếp cận Layout Fullsize phù hợp với đa số
            người dùng, dễ chơi keycap
          </DescriptionWrapper>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ProductDialog;
