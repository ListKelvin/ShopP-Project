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

const SocialList = [
  {id: 1, name: Facebook, link: "facebook"},
  {id: 2, name: Twitter, link: "twitter"},
  {id: 3, name: Instagram, link: "instagram"},
  {id: 4, name: Linkedin, link: "linkedin"},
];
const Policy = [
  {id: 1, name: "PRIVACY POLICY"},
  {id: 2, name: "TERM OF SERVICE"},
  {id: 3, name: "SHIPPING POLICY"},
  {id: 4, name: "VIOLATION"},
];
const FooterSocial = () => {
  return (
    <FootSocialStyle>
      <FootSpan>Copyright @2022 ShopP. All Rights Reserved.</FootSpan>
      <FootSocDiv>
      {SocialList.map(({id, name, link}) => {
          return(
        <a href={link} key={id}>
          <FooterSocialImage src={name} alt=""></FooterSocialImage>
        </a>
        );})}
      </FootSocDiv>
      <>
        <FootPolicy>
        {Policy.map(({id, name}) => {
          return(
          <LinkStyle key={id} href="url">{name}  |</LinkStyle>
          );})}
        </FootPolicy>
      </>
    </FootSocialStyle>
  );
};

export default FooterSocial;
