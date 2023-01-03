import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ProductLink } from "../../pages/Home/style";
const ProductCard = ({ rate, price, sold, name, img, id }) => {
  const [value, setValue] = React.useState(rate);

  const { filename } = img[0].localFile;

  return (
    <ProductLink to={`/productpage/${id}`}>
      <Card sx={{ maxWidth: 180 }}>
        <Box
          component="div"
          sx={{ background: "#ffffff", padding: "10px", height: "140px" }}
        >
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height="140"
            image={`https://shopp-be.lethanhlong.me/file/${filename}`}
            alt="green iguana"
          />
        </Box>

        <CardContent>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "130px",
              marginBottom: "5px",
            }}
          >
            <Rating
              name="simple-controlled"
              value={parseFloat(value)}
              sx={{ fontSize: "14px" }}
              precision={0.5}
              readOnly
            />
            <div style={{ fontSize: "12px" }}>{sold} sold</div>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "130px",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "10px",
                color: "#F64A4A",
              }}
            >
              ${price}
            </span>
            <Chip
              label="-30%"
              size="small"
              sx={{
                color: "#F64A4A",
                backgroundColor: "rgba(252, 85, 85, 0.21)",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </ProductLink>
  );
};
//{" "}
// <CardActions>
// <Button size="small">Share</Button>
// <Button size="small">Learn More</Button>
//{" "}
// </CardActions>;

export default ProductCard;
