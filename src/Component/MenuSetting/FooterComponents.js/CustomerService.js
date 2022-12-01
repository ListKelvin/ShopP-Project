import { TableDesciption, TableStyle, TableTitle, LinkStyle } from "./StyleFooter";
const CustomerService = () => {
    return(
        <TableStyle>
            <thead>
                <tr>
                    <TableTitle>CUSTOMER SERVICE</TableTitle>
                    </tr>
            </thead>
            <tbody>
                <TableDesciption><LinkStyle href = "url">Help Center</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">ShopP Club</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">How To Buy</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">How To Sell</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Payment</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">ShopP Coins</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Shipping</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Return & Refund</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Contact Us</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Warranty Policy</LinkStyle></TableDesciption>
            </tbody>
        </TableStyle>
    )
};

export default CustomerService;