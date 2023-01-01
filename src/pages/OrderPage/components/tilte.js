import { TitleH1, TitleStyle } from "../../CartPageVer2/style";
import ImgBrand from "../../../assets/Branding/image 163.png";

const TitleCartPage = () => {
  return (
    <TitleStyle>
      <img src={ImgBrand} width="136px" height="60px" alt="" />
      <TitleH1>Checkout</TitleH1>
    </TitleStyle>
  );
};

export default TitleCartPage;
