import { CheckBox } from '@mui/icons-material';
import React from 'react';
import { Button } from '@mui/material';
import { fontSize } from '@mui/system';
const quantity = 3;

const Footer = () => {
    return (
        <div style = {{
            display: "flex",
            flexDirection: "row",
            height: "47px",
            backgroundColor: "#B6E3E3",
            alignItems: "center",
            borderRadius: "5px",
            fontFamily: "Open Sans",
            padding: "5px",
            fontSize: "20px",
            marginTop: "10px"
        }}>
            <CheckBox></CheckBox>
            <span style = {{paddingLeft: "5px"}}>Select all ({quantity})</span>
            <a href="url" style = {{
                width: "15%",
                textAlign: "center",
                color: "red",
                textDecoration: "none"
              }}>Delete</a>
            <Button style = {{
                backgroundColor: "#55ABAB",
                borderRadius: "6px",
                width: "146px",
                height: "34px",
                marginLeft: "63%",
            }}> <span
                style = {{
                fontSize: "16px",
                lineHeight: "125%",
                fontWeight: "500",
                textTransform: "none",
                color: "white",
            }}>
            Add to cart
            </span></Button>
        </div>
    )
}

export default Footer;