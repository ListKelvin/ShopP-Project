import {
  PaymentTd,
  TableStyle,
  TableTitle,
  PaymentCard,
  PaymentTableStyle,
} from "./StyleFooter";
import CreditCard from "../../assets/PaymentLogictics/credit-card.png";
import MasterCard from "../../assets/PaymentLogictics/Mastercard.jfif";
import VisaCard from "../../assets/PaymentLogictics/visa.png";
import Express1 from "../../assets/PaymentLogictics/BestExpresspng.png";
import Express6 from "../../assets/PaymentLogictics/JTExpress.png";
import Express2 from "../../assets/PaymentLogictics/Website Viettel Post.png";
import Express3 from "../../assets/PaymentLogictics/VietNamPost.png";
import Express4 from "../../assets/PaymentLogictics/[Vector Logo] Ninja Van - Công Ty TNHH Nin Sing Logistics - Download Định Dạng EPS, SVG Cho AI, Corel » Hải Triều.png";
import Express5 from "../../assets/PaymentLogictics/GrabTaxi rebrands to Grab, makes brand loyalty a priority _ Advertising _ Campaign Asia.png";

const PaymentList = [
  {id: 1, name: CreditCard},
  {id: 2, name: MasterCard},
  {id: 3, name: VisaCard},
];
const LogicticsList1 = [
  {id: 1, name: Express2},
  {id: 2, name: Express1},
  {id: 3, name: Express3},
];
const LogicticsList2 = [
  {id: 1, name: Express4},
  {id: 2, name: Express5},
  {id: 3, name: Express6},
]
const PaymentLogictics = () => {
  return (
    <PaymentTableStyle>
      <thead>
        <tr>
          <TableTitle>PAYMENT</TableTitle>
        </tr>
      </thead>
      <tbody>
        <tr>
          <PaymentTd>
          {PaymentList.map(({id, name}) => {
          return(
            <PaymentCard key = {id} src={name} alt="" />
            );})}
          </PaymentTd>
        </tr>
        <tr>
          <TableTitle>LOGICTICS</TableTitle>
        </tr>
        <tr>
          <PaymentTd>
          {LogicticsList1.map(({id, name}) => {
          return(
            <PaymentCard key = {id} src={name} alt="" />
            );})}
          </PaymentTd>
        </tr>
        <tr>
          <PaymentTd>
          {LogicticsList2.map(({id, name}) => {
          return(
            <PaymentCard key = {id} src={name} alt="" />
            );})}
          </PaymentTd>
        </tr>
      </tbody>
    </PaymentTableStyle>
  );
};

export default PaymentLogictics;
