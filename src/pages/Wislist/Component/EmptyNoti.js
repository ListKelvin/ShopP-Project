import {EmptyBox, Container} from "../style";
import {Typo} from "./EmptyStyle";
import BuyButton from "./BuyButton";
import WishlistImage from "../../../assets/Wishlist/wishlist.png";


const Empty = () => {
    return (
        <Container>
            <EmptyBox>
            <img src={WishlistImage} width="200px" height= "200px" alt="" />
                <Typo>Your Wishlist is empty!</Typo>
                <BuyButton/>
            </EmptyBox>
        </Container>
    )
}
export default Empty;