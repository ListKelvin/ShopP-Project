import { PaymentTd, TableStyle, TableTitle, PaymentCard, PaymentTableStyle } from "./StyleFooter";
import CreditCard from "../../../assets/PaymentLogictics/credit-card.png";
import MasterCard from "../../../assets/PaymentLogictics/Mastercard.jfif";
import VisaCard from "../../../assets/PaymentLogictics/visa.png";
import Express1 from "../../../assets/PaymentLogictics/BestExpresspng.png";
import Express6 from "../../../assets/PaymentLogictics/JTExpress.png";
import Express2 from "../../../assets/PaymentLogictics/Website Viettel Post.png";
import Express3 from "../../../assets/PaymentLogictics/VietNamPost.png";
import Express4 from "../../../assets/PaymentLogictics/[Vector Logo] Ninja Van - Công Ty TNHH Nin Sing Logistics - Download Định Dạng EPS, SVG Cho AI, Corel » Hải Triều.png";
import Express5 from "../../../assets/PaymentLogictics/GrabTaxi rebrands to Grab, makes brand loyalty a priority _ Advertising _ Campaign Asia.png";

const PaymentLogictics = () => {
    return(
        <PaymentTableStyle>
            <thead>
                    <tr>
                    <TableTitle>PAYMENT</TableTitle>
                    </tr>
            </thead>
            <tbody>
                <tr>
                <PaymentTd><PaymentCard src = {CreditCard} alt = ""/></PaymentTd>
                <PaymentTd><PaymentCard src = {MasterCard} alt = ""/></PaymentTd>
                <PaymentTd><PaymentCard src = {VisaCard} alt = ""/></PaymentTd>
                </tr>
                <tr>
                    <TableTitle>LOGICTICS</TableTitle>
                </tr>
                <tr>
                <PaymentTd><PaymentCard src = {Express2} alt = ""/></PaymentTd>
                <PaymentTd><PaymentCard src = {Express1} alt = ""/></PaymentTd>
                <PaymentTd><PaymentCard src = {Express3} alt = ""/></PaymentTd>
                </tr>
                <tr>
                <PaymentTd><PaymentCard src = {Express4} alt = ""/></PaymentTd>
                <PaymentTd><PaymentCard src = {Express5} alt = ""/></PaymentTd>
                <PaymentTd><PaymentCard src = {Express6} alt = ""/></PaymentTd>
                </tr>
            </tbody>
        </PaymentTableStyle>
    )
};

export default PaymentLogictics;