import React from 'react';
import { CheckBox } from "@mui/icons-material";
import ImgBrand from "../../../assets/Branding/image 163.png";

const Products = [
    {id: 0, name: "[Mã ELHA9 giảm 15% đơn 50K] Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$2900", liked: "3000"},
    {id: 0, name: "[Mã ELHA9 giảm 15% đơn 50K] Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$2900", liked: "3000"},
    {id: 0, name: "[Mã ELHA9 giảm 15% đơn 50K] Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$2900", liked: "3000"},
  ];
  
  const Product = () => {
    return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#B6E3E3",
        padding: "5px",
        borderRadius: "0 0 5px 5px",
        
      }}>
        {Products.map(({name, price, liked, action, id}) => {
          return (
            <div key = {id} style = {{
            display: "flex",
            flexDirection: "row",
            height: "70px",
            alignItems: "center",
            borderRadius: "5px",
            fontSize: "18px",
            fontFamily: "Open Sans",
            lineHeight: "22px",
            }}>
              <CheckBox style = {{marginRight: "5px"}}>0</CheckBox>
              <img src={ImgBrand} width="136px" height="60px" alt="" />
              <span style = {{
                width: "50%",
                padding: "14px",
              }}>{name}</span>
              <span style = {{
                width: "15%",
                textAlign: "center",
              }}>{price}</span>
              <span style = {{
                width: "15%",
                textAlign: "center",
                color: "red",
              }}>{liked}</span>
              <a href="url" style = {{
                width: "15%",
                textAlign: "center",
                color: "red",
                textDecoration: "none"
              }}>Delete</a>
            </div>
          );
        })}
      </div>
    );
  };

  export default Product;