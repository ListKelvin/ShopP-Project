import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImgBrand from "../../../assets/Branding/image 163.png";
import ImgBrand2 from "../../../assets/Branding/image 67.png";
const Branding = () => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
      <Grid item xs={8}>
        <img src={ImgBrand2} width="100%" height="100%" alt="" srcset="" />
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          // content
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>//content</Box>
      </Grid>
    </Grid>
  );
};

export default Branding;
