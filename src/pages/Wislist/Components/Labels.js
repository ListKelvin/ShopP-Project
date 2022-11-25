import React from 'react';
import { CheckBox } from "@mui/icons-material";
const Labels = () => {
    return (
        <>
        <div style = 
        {{
            display: "flex",
            flexDirection: "row",
            height: "47px",
            backgroundColor: "#55ABAB",
            alignItems: "center",
            borderRadius: "5px",
            fontFamily: "Open Sans",
            padding: "5px",
            fontSize: "20px",
        }}>
            <CheckBox/>
            <span style = {{
                paddingLeft: "5px",
                paddingRight: "51%",
            }}>Products</span>
            <span style = {{
                width: "14%",
                textAlign: "center",
            }}>Price</span>
            <span style = {{
                width: "15%",
                textAlign: "center",
            }}>Liked by</span>
            <span style = {{
                width: "15%",
                textAlign: "center",
            }}>Action</span>
        </div>
        </>
    )
};

export default Labels;