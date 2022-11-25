import { CheckBox } from "@mui/icons-material";
import Product from "./Product"
const Shops = [
  {id: 1, shopName: "Panasonic"},
  {id: 2, shopName: "Computer and Accessories"},
  {id: 3, shopName: "Computer and Accessories"},
  {id: 4, shopName: "Computer and Accessories"},
];

const Shop = () => {
  return (
    <>
      {Shops.map(({shopName, id}) => {
        return (
          <div key = {id} style = {{
            marginTop: "10px",
          }}>
            <div style = 
        {{
            display: "flex",
            flexDirection: "row",
            height: "47px",
            backgroundColor: "#B6E3E3",
            alignItems: "center",
            borderRadius: "4px 4px 0px 0px",
            fontFamily: "Open Sans",
            padding: "5px",
            fontSize: "20px",
            borderColor: "#55ABAB",
            borderStyle: "solid",
            borderWidth: "1px 0",
        }}>
            <CheckBox/>
            <span style = {{paddingLeft: "5px"}}>{shopName}</span>
        </div>
            <Product/>
          </div>
        );
      })}
    </>
  );
};

export default Shop;
