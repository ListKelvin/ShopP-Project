import React from "react";
import { Typography, Box } from "@mui/material";
import ImgCatergory from "../../../assets/Category/image 75.png";
const CategoryCard = ({ label }) => {
  return (
    <div
      className=""
      style={{
        minWidth: 120,
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "70px",
          height: "70px",
          background: "#55ABAB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <img src={ImgCatergory} width={40} height={40} alt="" />
      </Box>
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "14px",
          width: "fit-content",
        }}
      >
        {label}
      </Typography>
    </div>
  );
};

export default CategoryCard;
