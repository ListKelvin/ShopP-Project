import { TableDesciption, TableStyle, TableTitle, LinkStyle } from "./StyleFooter";

const AboutShopP = () => {
    return(
        <TableStyle>
            <thead>
                <tr>
                    <TableTitle>ABOUT SHOPP</TableTitle>
                    </tr>
            </thead>
            <tbody style = {{height: "fit-content"}}>
                <TableDesciption><LinkStyle href = "url">About Us</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">ShopP Policies</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Privacy Policy</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">ShopP Club</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Seller Center</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Flash Deals</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Media Contact</LinkStyle></TableDesciption>
            </tbody>
        </TableStyle>
    )
};

export default AboutShopP;