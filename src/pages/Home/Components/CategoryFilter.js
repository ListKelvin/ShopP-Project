import React from "react";
import { Typography, Box } from "@mui/material";
import SuggestCard from "./SuggestCard";
import Img from "../../../assets/suggest/image 72.png";
const SuggestList = [
  {
    id: 1,
    label: "for you",
  },
  {
    id: 2,
    label: "Hot deal",
  },
  {
    id: 3,
    label: "Supermarket",
  },
  {
    id: 4,
    label: "New Products",
  },
  {
    id: 5,
    label: "Fashion Trend",
  },
  {
    id: 6,
    label: "Book Market",
  },
  {
    id: 7,
    label: "Book Marke",
  },
];
const SuggestContainer = ({ label }) => {
  return (
    <div
      style={{
        background: "#B6E3E3",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "League Spartan",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "18px",
          marginBottom: "10px",
          color: "#2F5E5E",
        }}
      >
        SUGGESTION TODAY
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // padding: "20px 30px",
          background: "#B6E3E3",

          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {SuggestList.map(({ label, id }) => {
          return <SuggestCard id={id} label={label} />;
        })}
      </div>
    </div>
  );
};

export default SuggestContainer;

// <div
//   className=""
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <Box
//     sx={{
//       width: "120px",
//       height: "60px",
//       background: "#55ABAB",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       borderRadius: "5px",
//     }}
//   >
//     <img src={Img} width={40} height={40} alt="" />
//   </Box>
//   <Typography>label</Typography>
// </div>
