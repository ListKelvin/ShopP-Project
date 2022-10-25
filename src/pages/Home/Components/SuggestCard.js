import React from "react";
import { Typography, Box } from "@mui/material";
import Img from "../../../assets/suggest/image 72.png";

const SuggestCard = ({ label }) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "60px",
          background: "#55ABAB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <img src={Img} width={40} height={40} alt="" />
      </Box>
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "14px",
        }}
      >
        {label}
      </Typography>
    </div>
  );
};

export default SuggestCard;
