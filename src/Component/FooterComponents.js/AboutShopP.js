import { TableDesciption, TableStyle, TableTitle, LinkStyle } from "./StyleFooter";
const list = [
    {id: 1, name: "About Us"},
    {id: 2, name: "ShopP Policies"},
    {id: 3, name: "Privacy Policy"},
    {id: 4, name: "ShopP Club"},
    {id: 5, name: "Seller Center"},
    {id: 6, name: "Flash Deals"},
    {id: 7, name: "Media Contact"},
];
const AboutShopP = () => {
    return(
        <TableStyle>
            <thead>
                <tr>
                    <TableTitle>ABOUT SHOPP</TableTitle>
                    </tr>
            </thead>
            <tbody style = {{height: "fit-content"}}>
            {list.map(({id, name}) => {
                return(
                <TableDesciption key = {id}><LinkStyle href = "url">{name}</LinkStyle></TableDesciption>
                );
            })}
            </tbody>
        </TableStyle>
    )
};

export default AboutShopP;