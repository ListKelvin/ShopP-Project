import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Img from "../../assets/Product/download.jpg";
const ProductCard = ({ rate, price, sold, name }) => {
  const [value, setValue] = React.useState(rate);
  return (
    <Card sx={{ maxWidth: 160 }}>
      <Box
        component="div"
        sx={{ background: "#ffffff", padding: "10px", height: "130px" }}
      >
        <CardMedia
          sx={{ borderRadius: "10px" }}
          component="img"
          // src={Img}
          height="130"
          image={Img}
          alt="green iguana"
        />
      </Box>

      <CardContent>
        <Typography variant="body2" color="text.primary">
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
            value={value}
            sx={{ fontSize: "14px" }}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
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
            {price}
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
  );
};
//{" "}
// <CardActions>
// <Button size="small">Share</Button>
// <Button size="small">Learn More</Button>
//{" "}
// </CardActions>;

export default ProductCard;
