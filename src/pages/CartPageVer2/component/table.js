import { useEffect } from "react";
import {
  ContainerV2,
  HeaderCart,
  Item,
  ShopContainer,
  ShopInfo,
  CheckBoxWrap,
  Wrap,
  StyleDiv,
  ItemPrice,
  ItemAmount,
  ItemTotal,
  ItemAction,
  LinkImg,
  LinkName,
  Classification,
  CartFooterContainer,
  ToolFooter,
  SelectAllProduct,
  DeleteProduct,
  VoucherBtn,
  Text,
  WrapBtn,
} from "../style";
import { IncreaseAndDecrease } from "../../productDetail/styled";
import Flexbox from "../../../Component/Flexbox";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotals,
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
} from "../../../slices/cartReducer";
import { selectCartItems } from "../../../selectors/cartSelector";
import { API_URL } from "../../../config/config";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "../../../Component/Button";
import CartFooter from "./CartFooter";
import { width } from "@mui/system";
const TableCart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  //   let CheckItemInCart = cartItems.reduce(function (acc, curr) {
  //     if (!(acc.shop?.id === curr.shop?.id)) acc.push(curr);
  //     return acc;
  //   }, []);
  function unique(array) {
    return array.reduce(function (results, currentItem) {
      //using array find
      return results.find(function (result) {
        return currentItem.shop.id === result.shop.id;
      })
        ? results
        : [...results, currentItem];
    }, []);
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  let ShopInCart = unique(cartItems);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  return (
    <ContainerV2>
      <Flexbox flexDirection="column" gap="10px" alignItems="center">
        <HeaderCart>
          <CheckBoxWrap>
            <label class="stardust-checkbox">
              <input class="stardust-checkbox__input" type="checkbox" />
            </label>
            <div class="stardust-checkbox__box"></div>
          </CheckBoxWrap>
          <div
            style={{
              color: "rgba(0,0,0,.8)",
              width: "46.27949%",
              textAlign: "center",
            }}
          >
            Products
          </div>
          <ItemPrice>Price</ItemPrice>
          <ItemAmount>Amount</ItemAmount>
          <ItemTotal>Total</ItemTotal>
          <ItemAction>Action</ItemAction>
        </HeaderCart>
        {
          /* map function shop here */
          ShopInCart.map((el, id) => {
            let itemOfShop = cartItems.filter(
              (el2) => el2.shop?.id === el.shop?.id
            );
            console.log(itemOfShop);
            return (
              <Item key={id}>
                <ShopContainer>
                  <ShopInfo>
                    <CheckBoxWrap>
                      <label class="stardust-checkbox">
                        <input
                          class="stardust-checkbox__input"
                          type="checkbox"
                        />
                      </label>
                      <div class="stardust-checkbox__box"></div>
                    </CheckBoxWrap>
                    <div> {el.shop?.name}</div>
                  </ShopInfo>
                  <div style={{ position: "relative", paddingBottom: "1px" }}>
                    {
                      /*map function here */ itemOfShop.map((item, id) => {
                        const { productImage } = item;
                        return (
                          <Wrap key={id}>
                            <Flexbox alignItems="center">
                              <CheckBoxWrap>
                                <label class="stardust-checkbox">
                                  <input
                                    class="stardust-checkbox__input"
                                    type="checkbox"
                                  />
                                </label>
                                <div class="stardust-checkbox__box"></div>
                              </CheckBoxWrap>
                              <StyleDiv>
                                <Flexbox alignItems="center" gap="10px">
                                  <LinkImg to={`/productpage/${item.id}`}>
                                    <img
                                      src={`${API_URL}/file/${productImage[0].localFile.filename}`}
                                      alt={item.name}
                                    />
                                  </LinkImg>
                                  <LinkName to={`/productpage/${item.id}`}>
                                    {item.name}
                                  </LinkName>
                                </Flexbox>
                              </StyleDiv>

                              <Flexbox
                                width="17.24138%"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column"
                              >
                                <Classification>
                                  Classification <ArrowDropDownIcon />
                                </Classification>
                                <Classification>
                                  test additional info
                                </Classification>
                              </Flexbox>
                              <Flexbox
                                width="15.88022%"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="row"
                              >
                                {" "}
                                <div> ${item.amount}</div>
                              </Flexbox>
                              <Flexbox
                                width="15.4265%"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="row"
                                gap="20px"
                              >
                                {" "}
                                <IncreaseAndDecrease
                                  onClick={() => handleDecreaseCart(item)}
                                >
                                  <RemoveOutlinedIcon />
                                </IncreaseAndDecrease>
                                <div> {item.cartQuantity}</div>
                                <IncreaseAndDecrease
                                  onClick={() => handleAddToCart(item)}
                                >
                                  <AddOutlinedIcon />
                                </IncreaseAndDecrease>
                              </Flexbox>
                              <Flexbox
                                width="10.43557%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> ${item.amount * item.cartQuantity}</div>
                              </Flexbox>
                              <Flexbox
                                width="12.70417%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <IconButton
                                  onClick={() => handleRemoveFromCart(item)}
                                >
                                  <DeleteIcon style={{ color: "#FF5C5C" }} />
                                </IconButton>
                              </Flexbox>
                            </Flexbox>
                          </Wrap>
                        );
                      })
                    }
                  </div>
                </ShopContainer>
              </Item>
            );
          })
        }
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
      </Flexbox>
    </ContainerV2>
  );
};

export default TableCart;
