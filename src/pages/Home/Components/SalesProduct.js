import React from "react";
import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Img from "../../../assets/Product/image 161.png";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: "20px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "20px",
    backgroundColor: theme.palette.mode === "light" ? "#FC5555" : "FC5555",
  },
}));

const SalesProduct = ({ name, price, rate, amountSell, progress }) => {
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

      <CardContent sx={{ paddingBottom: "0px" }}>
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
            value={rate}
            sx={{ fontSize: "14px" }}
            precision={0.5}
            readOnly
          />
          <div style={{ fontSize: "12px" }}>{amountSell} sold</div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "130px",
            marginBottom: "10px",
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
        <BorderLinearProgress variant="determinate" value={progress} />
      </CardContent>
    </Card>
  );
};

export default SalesProduct;
