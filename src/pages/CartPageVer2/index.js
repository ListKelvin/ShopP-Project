import TitleCartPage from "../CartPage/Component CartPage/Title";
import { ContainerV2 } from "./style";
import { EmptyCart } from "../CartPage/Component CartPage/EmptyCart";
import Flexbox from "../../Component/Flexbox";
import { selectCartItems } from "../../selectors/cartSelector";
import { useSelector } from "react-redux";
import TableCart from "./component/table";
const CartPageV2 = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <TitleCartPage />
      {cartItems.length === 0 ? <EmptyCart /> : <TableCart />}
    </>
  );
};

export default CartPageV2;
