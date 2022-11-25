import React from "react";
import ImgBrand from "../../../assets/Branding/image 163.png";
import { flexbox } from "@mui/system";
import { Typography } from "@mui/material";
const Title = () => {
  return (
    <>
    
    <div style = {{
      display: "flex",
      flexDirection: "row",
      marginBottom: "10px",
      alignItems: "center"
    }}>
        <img src={ImgBrand} width="136px" height="60px" alt="" />
        <span style={{
          fontFamily: "League Spartan",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "33px",
          width: "fit-content",
          padding: "10px",
          color: "#2F5E5E",
          marginLeft: "1px",
        }}>Wishlist</span>
        
    </div>
        
    </>
  );
};

export default Title;
