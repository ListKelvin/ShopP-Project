import TitleCartPage from "./component/Title";

import { EmptyCart } from "./component/EmptyCart";
import { selectCartItems } from "../../selectors/cartSelector";
import { useSelector } from "react-redux";
import TableCart from "./component/table";
import TransferList from "./component/Test";
import cartApi from "../../utils/productApiComponent/cartApi";
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
