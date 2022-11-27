import {
  CheckBoxStyle,
  ProductWidth,
  PriceWidth,
  LikeWidth,
  ActionWidth,
  Image,
  ProductName,
} from "./StyleTable";
import ImgBrand from "../../../assets/Branding/image 163.png";
import { Checkbox2 } from "./CheckBox";

const Products = [
  {
    id: 0,
    name: "[Mã ELHA9 giảm 15% đơn 50K] Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng",
    price: "$2900",
    liked: "3000",
  },
];

const Product = () => {
  return (
    <>
      {Products.map(({ name, price, liked, id }) => {
        return (
          <>
            <CheckBoxStyle>
              <Checkbox2 />
            </CheckBoxStyle>
            <ProductWidth>
              <Image>
                <img src={ImgBrand} width="136px" height="60px" alt="" />
              </Image>
              <ProductName>{name}</ProductName>
            </ProductWidth>
            <PriceWidth>{price}</PriceWidth>
            <LikeWidth>{liked}</LikeWidth>
            <ActionWidth>
              <a
                href="url"
                style={{
                  color: "red",
                  textDecoration: "none",
                }}
              >
                Delete
              </a>
            </ActionWidth>
          </>
        );
      })}
    </>
  );
};

export default Product;
