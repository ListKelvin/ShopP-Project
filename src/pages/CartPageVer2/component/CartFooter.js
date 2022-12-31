import {
  CheckBoxWrap,
  CartFooterContainer,
  ToolFooter,
  SelectAllProduct,
  DeleteProduct,
  VoucherBtn,
  Text,
  WrapBtn,
} from "../style";

import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { selectCartItems } from "../../../selectors/cartSelector";
import Flexbox from "../../../Component/Flexbox";
import Button from "../../../Component/Button";
const CartFooter = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CartFooterContainer>
      <ToolFooter alignItems="center" flexDirection="row" gap="10px">
        <CheckBoxWrap>
          <label class="stardust-checkbox">
            <input class="stardust-checkbox__input" type="checkbox" />
          </label>
          <div class="stardust-checkbox__box"></div>
        </CheckBoxWrap>
        <SelectAllProduct type="button" className="select_all_btn">
          Select all ({cartItems.length})
        </SelectAllProduct>
        <DeleteProduct type="button" className="delete_btn">
          Delete
        </DeleteProduct>
        <VoucherBtn>
          Voucher <ArrowDropDownIcon />
        </VoucherBtn>
        <Button>
          <FavoriteBorderIcon
            style={{ marginLeft: "0.5rem", textAlign: "center" }}
          />
          <Text> Add to wishlist</Text>
        </Button>
      </ToolFooter>

      <Flexbox justifyContent="space-around" alignItems="center">
        <div> Total (0 product):</div>
        <div> $0</div>
      </Flexbox>
      <WrapBtn>
        <Button>Buy Now</Button>
      </WrapBtn>
    </CartFooterContainer>
  );
};

export default CartFooter;
