import {
  CheckBoxStyle,
  ProductTag,
  PriceTag,
  AmountTag,
  TotalTag,
  ActionTag,
  Image,
  ProductName,
} from "./StyleTable";
import ImgBrand from "../../../assets/image 68.svg";
import { Checkbox2 } from "./CheckBox";

const Products = [
  {
    id: 0,
    name: "Tủ lạnh Panasonic Inverter 380 lít NR-BX421WGKV",
    price: "$2900",
    amount: "1",
    total: "$2900",
  },
];

const Product = () => {
  return (
    <>
      {Products.map(({ name, price, amount, total, id }) => {
        return (
          <>
            <CheckBoxStyle>
              <Checkbox2 />
            </CheckBoxStyle>
            <ProductTag>
              <Image>
                <img src={ImgBrand} width="136px" height="60px" alt="" />
              </Image>
              <ProductName>{name}</ProductName>
            </ProductTag>
            <PriceTag>{price}</PriceTag>
            <AmountTag>{amount}</AmountTag>
            <TotalTag>{total}</TotalTag>
            <ActionTag>
              <a
                href="url"
                style={{
                  color: "red",
                  textDecoration: "none",
                }}
              >
                Delete
              </a>
            </ActionTag>
          </>
        );
      })}
    </>
  );
};

export default Product;
