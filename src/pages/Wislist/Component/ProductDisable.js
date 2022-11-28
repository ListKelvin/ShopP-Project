import {CheckBoxStyle, ProductWidth, PriceWidth, LikeWidth, ActionWidth, Image, ProductName, Typo, ProductStyle, Disable} from "./StyleTable";
import ImgBrand from "../../../assets/Branding/image 163.png";
import {CheckboxDis } from "./CheckBox";
import DeleteIcon from '@mui/icons-material/Delete';

const Products = [
    {id: 0, name: "Chuột Không Dây Màu Hồng / Đen/ Xám/ Xanh ngọc Forter V182 - Hàng Chính Hãng", price: "$3200", liked: "2000"},
    {id: 0, name: "Chuột Không Dây Xanh ngọc Forter V182", price: "$3200", liked: "2000"},
];

const ProDis = ({disabled}) => {
    return (
        <>
        {Products.map(({name, price, liked, id}) => {
        return (
        <ProductStyle key = {id}>
        <CheckBoxStyle style = {{cursor: "not-allowed"}}><CheckboxDis/></CheckBoxStyle>
            <ProductWidth>
                <Image style = {{ opacity: "0.6" }}><img src={ImgBrand} width="136px" height= "70px" alt="" style = {{verticalAlign: "middle", borderRadius: "3px"}}/>
                
                </Image>
                <ProductName style = {{ opacity: "0.6" }}>{name}
                <div style = {{color: "red", fontSize: "14px"}}>This item is sold out. Please choose another item!</div>
                </ProductName>
            </ProductWidth>
            <PriceWidth><Typo style = {{ opacity: "0.6"}}>{price}</Typo></PriceWidth>
            <LikeWidth><Typo>{liked}</Typo></LikeWidth>
            <ActionWidth><DeleteIcon style = {{color: "#FF5C5C"}}/></ActionWidth>
        </ProductStyle>
        );})}
        </>
    )
}

export default ProDis;