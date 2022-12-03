import Facebook from "../../assets/Footer/facebook.png";
import Twitter from "../../assets/Footer/twitter.png";
import Instagram from "../../assets/Footer/instagram.png";
import Linkedin from "../../assets/Footer/linkedin.png";
import {
  FootSocDiv,
  FootSpan,
  FootPolicy,
  FootSocialStyle,
  FooterSocialImage,
  LinkStyle,
} from "./StyleFooter";

const FooterSocial = () => {
  return (
    <FootSocialStyle>
      <FootSpan>Copyright @2022 ShopP. All Rights Reserved.</FootSpan>
      <FootSocDiv>
        <a href="facebook">
          <FooterSocialImage src={Facebook} alt=""></FooterSocialImage>
        </a>
        <a href="twitter">
          <FooterSocialImage src={Twitter} alt=""></FooterSocialImage>
        </a>
        <a href="instagram">
          <FooterSocialImage src={Instagram} alt=""></FooterSocialImage>
        </a>
        <a href="linkedin">
          <FooterSocialImage src={Linkedin} alt=""></FooterSocialImage>
        </a>
      </FootSocDiv>
      <>
        <FootPolicy>
          <LinkStyle href="url">PRIVACY POLICY</LinkStyle>|
          <LinkStyle href="url">TERM OF SERVICE</LinkStyle>|
          <LinkStyle href="url">SHIPPING POLICY</LinkStyle>|
          <LinkStyle href="url">VIOLATION</LinkStyle>
        </FootPolicy>
      </>
    </FootSocialStyle>
  );
};

export default FooterSocial;
