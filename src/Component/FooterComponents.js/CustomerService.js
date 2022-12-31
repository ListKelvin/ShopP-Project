import { TableDesciption, TableStyle, TableTitle, LinkStyle } from "./StyleFooter";
const ServiceList = [
    {id: 1, name: "Help Center"},
    {id: 2, name: "ShopP Club"},
    {id: 3, name: "How To Buy"},
    {id: 4, name: "How To Sell"},
    {id: 5, name: "Payment"},
    {id: 6, name: "ShopP Coins"},
    {id: 7, name: "Shipping"},
    {id: 8, name: "Return & Refund"},
    {id: 9, name: "Contact Us"},
    {id: 10, name: "Warranty Policy"},
];
const CustomerService = () => {
    return(
        <TableStyle>
            <thead>
                <tr>
                    <TableTitle>CUSTOMER SERVICE</TableTitle>
                    </tr>
            </thead>
            <tbody>
            {ServiceList.map(({id, name}) => {
                return(
                <TableDesciption key = {id}><LinkStyle href = "url">{name}</LinkStyle></TableDesciption>
            );})}
            </tbody>
        </TableStyle>
    )
};

export default CustomerService;