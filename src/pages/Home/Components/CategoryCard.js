import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ImgCatergory from "../../../assets/Category/image 75.png";
import { getFIleImage } from "../../../utils/productApi";
const CategoryCard = ({ label, img }) => {
  const [state, setState] = useState();

  useEffect(() => {
    getFIleImage(img.filename).then((res) => {
      const image = res.config.url;
      setState(image);
    });
  }, []);

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
        <img src={state} width={40} height={40} alt="" />
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
