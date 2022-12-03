import {CheckBoxStyle, ProductWidth, OtherWidth, Image, ProductName, Typo, ProductStyle, Disable, TypoSoldOut, ImageItem} from "./StyleTable";
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
                <Image style = {{ opacity: "0.6" }}><ImageItem src={ImgBrand}/>
                
                </Image>
                <ProductName style = {{ opacity: "0.6" }}>{name}
                <TypoSoldOut>This item is sold out. Please choose another item!</TypoSoldOut>
                </ProductName>
            </ProductWidth>
            <OtherWidth><Typo style = {{ opacity: "0.6"}}>{price}</Typo></OtherWidth>
            <OtherWidth><Typo>{liked}</Typo></OtherWidth>
            <OtherWidth><DeleteIcon style = {{color: "#FF5C5C"}}/></OtherWidth>
        </ProductStyle>
        );})}
        </>
    )
}

export default ProDis;