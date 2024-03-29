import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const CategoryCard = ({ label, img }) => {
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
        <img
          src={`https://shopp-be.lethanhlong.me/file/${img.filename}`}
          width={40}
          height={40}
          alt=""
        />
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
