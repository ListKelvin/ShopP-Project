import {CheckBoxStyle, ProductWidth, PriceWidth, LikeWidth, ActionWidth, Image, ProductName, Typo, ProductStyle, Disable} from "./StyleTable";
import ImgBrand from "../../../assets/Branding/image 163.png";
import {CheckboxDis } from "./CheckBox";

const Products = [
    {id: 0, name: "Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$3200", liked: "2000"},
    {id: 0, name: "Chuột Không Dây Xanh ngọc Forter V182", price: "$3200", liked: "2000"},
];

const ProDis = ({disabled}) => {
    return (
        <>
        {Products.map(({name, price, liked, id}) => {
        return (
        <ProductStyle key = {id} style = {{ opacity: "0.6", cursor: "not-allowed" }}>
        <CheckBoxStyle style = {{cursor: "not-allowed"}}><CheckboxDis/></CheckBoxStyle>
            <ProductWidth>
                <Image><img src={ImgBrand} width="136px" height= "70px" alt="" style = {{verticalAlign: "middle", borderRadius: "3px"}}/></Image>
                <ProductName>{name}</ProductName>
            </ProductWidth>
            <PriceWidth><Typo>{price}</Typo></PriceWidth>
            <LikeWidth><Typo>{liked}</Typo></LikeWidth>
            <ActionWidth><Typo><a href="url" style = {{
                color: "red",
                textDecoration: "none"}} >Delete</a></Typo></ActionWidth>
        </ProductStyle>
        );})}
        </>
    )
}

export default ProDis;