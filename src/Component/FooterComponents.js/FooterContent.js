import AboutShopP from "./AboutShopP";
import Categories from "./Categories";
import CustomerService from "./CustomerService";
import PaymentLogictics from "./Payment";
import ShopPApp from "./ShopPApp";
import {FooterDiv, FooterRow2, FooterRow1} from "./StyleFooter";
const FooterContent = () => {
    return(
        <FooterDiv>
            <FooterRow1>
                <CustomerService/>
                <AboutShopP/>
                <Categories/>
            </FooterRow1>
            <FooterRow2>
                <PaymentLogictics/>
                <ShopPApp/>
            </FooterRow2>
        </FooterDiv>
    )
};

export default FooterContent;