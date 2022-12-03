import {EmptyBox, Container, Image} from "../style";
import {Typo} from "./EmptyStyle";
import BuyButton from "./BuyButton";
import WishlistImage from "../../../assets/Wishlist/wishlist.png";


const Empty = () => {
    return (
        <Container>
            <EmptyBox>
                <Image src={WishlistImage} alt="" />
                <Typo>Your Wishlist is empty!</Typo>
                <BuyButton/>
            </EmptyBox>
        </Container>
    )
}
export default Empty;