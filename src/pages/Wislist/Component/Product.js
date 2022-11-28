import {CheckBoxStyle, ProductWidth, PriceWidth, LikeWidth, ActionWidth, Image, ProductName, Typo, ProductStyle} from "./StyleTable";
import ImgBrand from "../../../assets/Branding/image 163.png";
import {Checkbox2 } from "./CheckBox";
import DeleteIcon from '@mui/icons-material/Delete';

const Products = [
    {id: 0, name: "[Mã ELHA9 giảm 15% đơn 50K] Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$2900", liked: "3000"},
    {id: 1, name: "Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$3200", liked: "2000"},
    {id: 2, name: "Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$3200", liked: "2000"},
];

export const Product = () => {
    return (
        <>
        {Products.map(({name, price, liked, id}) => {
        return (
        <ProductStyle key = {id}>
        <CheckBoxStyle><Checkbox2/></CheckBoxStyle>
            <ProductWidth>
                <Image><img src={ImgBrand} width="136px" height= "70px" alt="" style = {{verticalAlign: "middle", borderRadius: "3px"}}/></Image>
                <ProductName>{name}</ProductName>
            </ProductWidth>
            <PriceWidth><Typo>{price}</Typo></PriceWidth>
            <LikeWidth><Typo>{liked}</Typo></LikeWidth>
            <ActionWidth><DeleteIcon style = {{color: "#FF5C5C"}}/></ActionWidth>
        </ProductStyle>
        );})}
        </>
    )
};

export default Product;